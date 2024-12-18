document.addEventListener("DOMContentLoaded", function () {
    // toolbarRender(savedPosition,0,['editar']);
})

let selectedRange = null;

function toolbarRender(pagina = {}, sliderIndex = 0, documentoRenderizacao = [], verificarSeEstaAtivo) {
    // console.log("Verificando se o Toolbar está Ativo", verificarSeEstaAtivo)

    if (verificarSeEstaAtivo) {
        // console.log(pagina.pagina);
        // console.log(sliderIndex);
        // console.log(documentoRenderizacao);
        // console.log(containerPage)

        // Verifica se documentoRenderizacao é um array
        if (!Array.isArray(documentoRenderizacao)) {
            // Se não for, transforma em um array
            documentoRenderizacao = Array.isArray(documentoRenderizacao) ? documentoRenderizacao : [documentoRenderizacao];
        }

        // Se documentoRenderizacao for uma string, divide por vírgula e transforma em array
        if (typeof documentoRenderizacao === 'string') {
            documentoRenderizacao = documentoRenderizacao.split(',').map(item => item.trim());
        }

        // Agora documentoRenderizacao é um array
        // console.log(pagina.pagina);
        // console.log(sliderIndex);
        // console.log(documentoRenderizacao);

        // Função para carregar a configuração da toolbar a partir de um arquivo JSON
        const toolbarConfig = async (url = "./modules/toolbar.json") => {
            try {
                const response = await fetch(url); // Faz a requisição do arquivo JSON
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
                }
                const data = await response.json(); // Parseia o arquivo JSON
                return data; // Retorna os dados carregados
            } catch (error) {
                console.error("Erro ao carregar a configuração da toolbar:", error);
                return null;
            }
        }

        // const response = toolbarConfig()
        // Geração de ID único
        function gerarIdUnico() {
            return 'destaque-' + Math.random().toString(36).substr(2, 9);
        }

        function salvarDestaque(idUnicoMarcador = null, palavra, corFundo, corTexto, containerId, elementoIndex, startOffset, endOffset, parentTag, dataHora, estiloTexto, elementoIndexNodeList) {


            const idUnico = gerarIdUnico(); // Gerar ID único para o destaque

            const destaque = {
                id: idUnicoMarcador === null ? idUnico : idUnicoMarcador,                      // ID único
                palavra: palavra,                                                               // Palavra destacada
                paginaIndex: sliderIndex,                                                       // Salvar Página de Marcação
                corFundo: corFundo,                                                             // Cor de fundo aplicada
                corTexto: corTexto,                                                             // Cor do texto aplicada
                containerId: containerId,                                                       // ID do contêiner
                elementoIndex: elementoIndex,                                                   // Índice do elemento (p, div, etc.)
                elementoIndexNodeList: elementoIndexNodeList,                                   // Índice do elemento dentro de sua NodeList (p, div, button, etc.)
                startOffset: startOffset,                                                       // Posição inicial do texto destacado
                endOffset: endOffset,                                                           // Posição final do texto destacado
                parentTag: parentTag,                                                           // Tag do elemento pai (p, div, etc.)
                dataHora: dataHora,                                                             // Data e hora do destaque
                estiloTexto: estiloTexto                                                        // Estilo adicional, como negrito ou itálico
            };

            // Salva o destaque individualmente
            databaseDestaques.save(destaque, function (_item) {
                // console.log('Destaque Salvo: ', _item);
                restaurarDestaques();
                renderMarcacao();
            });
        }

        async function aplicarDestaqueSelecionado(corFundo, corTexto = 'black', estiloTexto = '') {
            if (selectedRange) {
                const configuracao = await toolbarConfig();
                const marcarMultiplosElementos = configuracao.toolbar_configuracao.marcarMultiplosElementos;
                let elementosSelecionaveis = configuracao.toolbar_actions.elementos_marcacao;

                const selection = window.getSelection();
                if (!selection.rangeCount) {
                    console.error('Nenhum range encontrado para clonar.');
                    return;
                }

                const range = selectedRange.cloneRange(); // Clonar o range para preservar a seleção

                const startContainer = range.startContainer;
                const endContainer = range.endContainer;

                const containerMarcador = documentoRenderizacao; // Classes permitidas para destacar
                const container = startContainer.parentElement.closest(containerMarcador.map(cls => `.${cls}`).join(','));

                if (!container) {
                    console.log('Seleção fora de contêiner permitido.');
                    return;
                }

                // Selecionar apenas os elementos destacáveis (p, div, button, etc.) dentro do container
                const elementos = Array.from(container.querySelectorAll('*')).filter(el =>
                    elementosSelecionaveis.includes(el.nodeName.toLowerCase())
                );

                // Função auxiliar para destacar um trecho de texto
                // Função auxiliar para destacar um trecho de texto
                function highlightRange(r, elementoIndex, tagName, elementoIndexNodeList) {
                    const idMarcador = gerarIdUnico();
                    let marcador = document.createElement('marcador');

                    // Adiciona o data-id ao marcador
                    marcador.setAttribute('data-id', idMarcador);

                    marcador.style.backgroundColor = corFundo;
                    marcador.style.color = corTexto;
                    if (estiloTexto) {
                        marcador.style.cssText += estiloTexto;
                    }

                    const fragment = r.extractContents();
                    marcador.appendChild(fragment);
                    r.insertNode(marcador);

                    renderMarcacao();
                    restaurarDestaques();

                    salvarDestaque(
                        idMarcador,
                        marcador.textContent,
                        corFundo,
                        corTexto,
                        container.id,
                        elementoIndex,
                        r.startOffset,
                        r.endOffset,
                        tagName.toLowerCase(),
                        new Date().toISOString(),
                        estiloTexto,
                        elementoIndexNodeList
                    );
                }



                // Função para calcular corretamente o elementoIndex e elementoIndexNodeList
                function calcularIndices(startContainer) {
                    let elementoPai = startContainer.parentElement;

                    // Se o pai do nó for null ou um nó muito aninhado, suba na hierarquia
                    while (elementoPai && !elementos.includes(elementoPai)) {
                        elementoPai = elementoPai.parentElement;
                    }

                    if (!elementoPai) {
                        console.error("Elemento pai não encontrado no contêiner.");
                        return { elementoIndex: -1, elementoIndexNodeList: -1 };
                    }

                    const elementoIndex = elementos.indexOf(elementoPai);

                    const elementosDoMesmoTipo = elementos.filter(el => el.nodeName.toLowerCase() === elementoPai.nodeName.toLowerCase());
                    const elementoIndexNodeList = elementosDoMesmoTipo.indexOf(elementoPai);

                    return { elementoIndex, elementoIndexNodeList };
                }

                // Se a seleção envolve apenas um nó
                if (startContainer === endContainer) {
                    const { elementoIndex, elementoIndexNodeList } = calcularIndices(startContainer);
                    highlightRange(range, elementoIndex, startContainer.parentElement.tagName, elementoIndexNodeList);
                } else {
                    // Processar o primeiro trecho da seleção
                    const startRange = document.createRange();
                    startRange.setStart(startContainer, range.startOffset);
                    startRange.setEnd(startContainer, startContainer.length);
                    const { elementoIndex: startIndex, elementoIndexNodeList: elementoIndexNodeListStart } = calcularIndices(startContainer);

                    highlightRange(startRange, startIndex, startContainer.parentElement.tagName, elementoIndexNodeListStart);

                    // Se marcar múltiplos elementos for permitido
                    if (marcarMultiplosElementos) {
                        // Processar o último trecho da seleção
                        const endRange = document.createRange();
                        endRange.setStart(endContainer, 0);
                        endRange.setEnd(endContainer, range.endOffset);
                        const { elementoIndex: endIndex, elementoIndexNodeList: elementoIndexNodeListEnd } = calcularIndices(endContainer);

                        highlightRange(endRange, endIndex, endContainer.parentElement.tagName, elementoIndexNodeListEnd);

                        // Processar os nós intermediários entre o início e o fim da seleção
                        let currentNode = startContainer.parentElement.nextElementSibling;
                        while (currentNode && currentNode !== endContainer.parentElement) {
                            if (elementosSelecionaveis.includes(currentNode.nodeName.toLowerCase())) {
                                const middleRange = document.createRange();
                                middleRange.selectNodeContents(currentNode);
                                const middleIndex = elementos.indexOf(currentNode);

                                const elementosDoMesmoTipoMiddle = elementos.filter(el => el.nodeName.toLowerCase() === currentNode.nodeName.toLowerCase());
                                const elementoIndexNodeListMiddle = elementosDoMesmoTipoMiddle.indexOf(currentNode);

                                highlightRange(middleRange, middleIndex, currentNode.nodeName, elementoIndexNodeListMiddle);
                            }
                            currentNode = currentNode.nextElementSibling;
                        }
                    }
                }

                // Limpar a seleção após o destaque
                selection.removeAllRanges();
            } else {
                alert("Nenhuma seleção foi feita!");
            }
        }

        document.addEventListener('mouseup', async function (e) {


            const selection = window.getSelection();
            const textoSelecionado = selection.toString().trim();
            const toolbar = document.getElementById('toolbar');
            abrirToolbar()

            const configuracao = await toolbarConfig();
            const elementosSelecionaveis = configuracao.toolbar_actions.elementos_selecao; // Elementos que podem ser selecionados
            const classesPermitidas = documentoRenderizacao; // Classes permitidas para exibir a toolbar
            let selecionarTodosElementos = configuracao.toolbar_configuracao.selecionarTodosElementos; // Mudar para true para selecionar múltiplos elementos

            if (textoSelecionado && selection.rangeCount > 0) { // Verificar se há um range válido
                const range = selection.getRangeAt(0);
                const startContainer = range.startContainer;
                const endContainer = range.endContainer;

                // Função para verificar se o elemento faz parte de uma das classes permitidas
                const dentroDeClassePermitida = (elemento) => {
                    return classesPermitidas.some(classe => elemento.closest(`.${classe}`));
                };

                const startElemento = startContainer.parentElement.closest(elementosSelecionaveis.join(','));
                const endElemento = endContainer.parentElement.closest(elementosSelecionaveis.join(','));

                // Verifica se o elemento inicial e final são válidos e estão dentro das classes permitidas
                if (startElemento && endElemento && dentroDeClassePermitida(startElemento) && dentroDeClassePermitida(endElemento)) {
                    // Caso selecionarTodosElementos seja falso, considerar apenas o primeiro elemento
                    if (!selecionarTodosElementos) {
                        const rangeBox = startElemento.getBoundingClientRect();
                        const toolbarHeight = toolbar.offsetHeight;
                        const toolbarWidth = toolbar.offsetWidth;

                        let topPosition = rangeBox.top - 40; // Ajuste para ficar acima da palavra
                        let leftPosition = rangeBox.left;

                        // Garantir que a toolbar fique dentro da tela (horizontalmente)
                        if (leftPosition + toolbarWidth > window.innerWidth) {
                            leftPosition = window.innerWidth - toolbarWidth;
                        } else if (leftPosition < 0) {
                            leftPosition = 0;
                        }

                        // Ajuste da posição para cima ou abaixo, dependendo do espaço disponível
                        if (topPosition < 0) {
                            topPosition = rangeBox.bottom + window.scrollY + 10; // Mostrar abaixo do texto se não houver espaço acima
                        }

                        // Aplicar as posições calculadas
                        toolbar.style.left = `${leftPosition}px`;
                        toolbar.style.top = `${topPosition}px`;
                        toolbar.style.display = 'block';

                        // Salvar o range selecionado para ser usado posteriormente
                        selectedRange = selection.getRangeAt(0);
                    } else {
                        // Quando selecionarTodosElementos for true, calcular o range entre o início e o fim da seleção
                        const rangeBox = range.getBoundingClientRect();
                        const toolbarHeight = toolbar.offsetHeight;
                        const toolbarWidth = toolbar.offsetWidth;

                        let topPosition = rangeBox.top - 40; // Ajuste para ficar acima da palavra
                        let leftPosition = rangeBox.left;

                        // Garantir que a toolbar fique dentro da tela (horizontalmente)
                        if (leftPosition + toolbarWidth > window.innerWidth) {
                            leftPosition = window.innerWidth - toolbarWidth;
                        } else if (leftPosition < 0) {
                            leftPosition = 0;
                        }

                        // Ajuste da posição para cima ou abaixo, dependendo do espaço disponível
                        if (topPosition < 0) {
                            topPosition = rangeBox.bottom + window.scrollY + 10; // Mostrar abaixo do texto se não houver espaço acima
                        }

                        // Aplicar as posições calculadas
                        toolbar.style.left = `${leftPosition}px`;
                        toolbar.style.top = `${topPosition}px`;
                        toolbar.style.display = 'block';

                        // Salvar o range selecionado para ser usado posteriormente
                        selectedRange = selection.getRangeAt(0);
                    }
                } else {
                    // Se os elementos não forem válidos ou a seleção está fora das classes permitidas
                    toolbar.style.display = 'none';
                    selectedRange = null; // Limpar o range salvo
                }
            }
        });

        // Fechar Box de Cores
        function fecharBoxCores() {
            document.getElementById('boxMarcaCores').style.display = 'none';
        }

        function abrirToolbar() {
            const toolbar = document.getElementById('toolbar');
            toolbar.classList.remove("d-none")

        }

        function fecharToolbar() {
            const toolbar = document.getElementById('toolbar');
            toolbar.className = "d-none"
            toolbar.removeAttribute("style");
            toolbar.style = "display: none;"
            window.getSelection().removeAllRanges()

        }



        // Ocultar toolbar ao clicar fora dela
        document.addEventListener('mousedown', function (e) {
            if (!document.getElementById('toolbar').contains(e.target)) {
                document.getElementById('toolbar').style.display = 'none';
                document.getElementById('boxMarcaCores').style.display = 'none';
            }
        });

        // Exibir a caixa de cores ao clicar em "Destacar"
        document.getElementById('destacar').addEventListener('click', function () {
            const boxMarcaCores = document.getElementById('boxMarcaCores');
            boxMarcaCores.style.display = 'block';
        });

        // Aplicar cor ao texto selecionado ao clicar na paleta de cores
        document.querySelectorAll('.corTexto').forEach(function (colorSpan) {
            colorSpan.addEventListener('click', function () {
                const corFundo = this.getAttribute('data-cor');
                const corTexto = this.getAttribute('data-color');
                aplicarDestaqueSelecionado(corFundo, corTexto);
                document.getElementById('boxMarcaCores').style.display = 'none';
            });
        });

        // Concatenar as classes em uma string com um ponto antes de cada classe
        const classParaApareceroToolbar = documentoRenderizacao.map(item => `.${item.trim()}`).join(', ');

        // // Console para verificação
        // console.log(classParaApareceroToolbar);

        // Gerar IDs únicos para cada bloco com a classe 'editar' ou 'editarParagrafo'
        // document.querySelectorAll(`${classParaApareceroToolbar}`).forEach((element, index) => {
        //     // Obtém a lista de classes como um array
        //     const classes = Array.from(element.classList);

        //     // Verifica se existe um segundo className
        //     if (classes.length > 1) {
        //         // console.log(classes[1]); 
        //         element.id = `${classes[1]}-${index}`;
        //     } else {
        //         console.log('Esse elemento não tem um segundo className.');
        //     }
        // });

        document.querySelectorAll(`${classParaApareceroToolbar}`).forEach((element, index) => {
            // console.log(element)
            const idRefTools = element.getAttribute("procurar-toolbar-rfTools")
            element.id = `${idRefTools}-${index}`;
        });

        // Função para restaurar destaques salvos com LocalDB.js (incluindo cor do texto e cor de fundo)

        function restaurarDestaques() {
            databaseDestaques.find({}, function (results) {
                if (results.length === 0) return;

                const destaquesPorElemento = {};
                results.sort((a, b) => b.palavra.length - a.palavra.length);

                results.forEach(destaque => {
                    const key = `${destaque.containerId}-${destaque.elementoIndexNodeList}`;
                    if (!destaquesPorElemento[key]) destaquesPorElemento[key] = [];
                    destaquesPorElemento[key].push(destaque);
                });

                Object.keys(destaquesPorElemento).forEach(key => {
                    const destaques = destaquesPorElemento[key];
                    const primeiroDestaque = destaques[0];
                    const container = document.getElementById(primeiroDestaque.containerId);
                    if (!container) return;

                    const elementos = container.querySelectorAll(primeiroDestaque.parentTag);
                    const elemento = elementos[primeiroDestaque.elementoIndexNodeList];
                    if (!elemento) return;

                    destaques.forEach(destaque => {
                        const palavraParaMarcar = destaque.palavra;
                        let encontrado = false;

                        // Função para verificar se o texto já está dentro de um marcador com o mesmo data-id
                        function jaEstaMarcado(node, dataId) {
                            let parent = node.parentElement;
                            while (parent) {
                                if (parent.tagName === 'MARCADOR' && parent.getAttribute('data-id') === dataId) {
                                    return true;
                                }
                                parent = parent.parentElement;
                            }
                            return false;
                        }

                        // Buscar por nós de texto
                        let walker = document.createTreeWalker(
                            elemento,
                            NodeFilter.SHOW_TEXT,
                            null,
                            false,
                        );

                        let node;
                        while ((node = walker.nextNode()) && !encontrado) {
                            if (jaEstaMarcado(node, destaque.id)) continue;

                            let texto = node.textContent;
                            let comprimentoPalavra = palavraParaMarcar.length;

                            // Usar os offsets para verificar a correspondência exata
                            if (
                                texto.substring(destaque.startOffset, destaque.startOffset + comprimentoPalavra) === palavraParaMarcar
                            ) {
                                encontrado = true;

                                let range = document.createRange();
                                range.setStart(node, destaque.startOffset);
                                range.setEnd(node, destaque.startOffset + comprimentoPalavra);

                                let marcador = document.createElement('marcador');
                                marcador.style.backgroundColor = destaque.corFundo;
                                marcador.style.color = destaque.corTexto;
                                marcador.setAttribute("data-id", destaque.id);

                                if (destaque.estiloTexto) {
                                    marcador.style.cssText += destaque.estiloTexto;
                                }

                                const conteudo = range.extractContents();
                                marcador.appendChild(conteudo);
                                range.insertNode(marcador);
                            }
                        }
                    });
                });
            });
        }

        // Restaurar destaques ao carregar a página
        restaurarDestaques();

        function deletarMarcacao() {
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0) return;
        
            const range = selection.getRangeAt(0);
            if (!range) return;
        
            let commonAncestor = range.commonAncestorContainer;
            if (commonAncestor.nodeType === 3) {
                commonAncestor = commonAncestor.parentElement;
            }
        
            // Verifica se o commonAncestor é um marcador
            if (commonAncestor.tagName === 'MARCADOR') {
                const dataId = commonAncestor.getAttribute('data-id');
                while (commonAncestor.firstChild) {
                    commonAncestor.parentNode.insertBefore(commonAncestor.firstChild, commonAncestor);
                }
                commonAncestor.parentNode.removeChild(commonAncestor);
                if (dataId) {
                    removerMarcadorDoLocalDB(dataId);
                }
                selection.removeAllRanges();
                normalizarTexto(commonAncestor.parentNode);
                return;
            }
        
            // Continua com a lógica original para outros casos
            const walker = document.createTreeWalker(commonAncestor, NodeFilter.SHOW_ELEMENT);
            const elementosSelecionados = [];
            let currentNode = walker.currentNode;
        
            while (currentNode) {
                if (range.intersectsNode(currentNode)) {
                    elementosSelecionados.push(currentNode);
                }
                currentNode = walker.nextNode();
            }
        
            elementosSelecionados.forEach(elemento => {
                const marcadores = elemento.querySelectorAll('marcador');
                marcadores.forEach(marcador => {
                    if (range.intersectsNode(marcador)) {
                        const dataId = marcador.getAttribute('data-id');
                        while (marcador.firstChild) {
                            marcador.parentNode.insertBefore(marcador.firstChild, marcador);
                        }
                        marcador.parentNode.removeChild(marcador);
                        if (dataId) {
                            removerMarcadorDoLocalDB(dataId);
                        }
                    }
                });
                normalizarTexto(elemento); // Normaliza o texto do elemento para corrigir quebras
            });
        
            selection.removeAllRanges();
        }
        
        /**
         * Função para normalizar o texto dentro de um elemento, unindo nós de texto separados.
         */
        function normalizarTexto(elemento) {
            if (!elemento) return;
        
            const childNodes = Array.from(elemento.childNodes);
            let textoCompleto = "";
        
            childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    textoCompleto += node.textContent; // Concatena o texto
                    elemento.removeChild(node);
                }
            });
        
            if (textoCompleto) {
                const textoUnificado = document.createTextNode(textoCompleto.trim());
                elemento.appendChild(textoUnificado);
            }
        }        

        // Função para remover o marcador da base de dados usando LocalDB.js
        function removerMarcadorDoLocalDB(dataId) {
            databaseDestaques.find({ id: dataId }, function (items) {
                // Verificar se existem itens correspondentes na base de dados
                if (Array.isArray(items) && items.length > 0) {
                    items.forEach((item) => {
                        item.delete(); // Remover o item da base de dados
                        restaurarDestaques();
                        console.log(`Marcador com id ${item.id} removido da base de dados.`);
                        renderMarcacao();
                        checkEmptyMarcacaoContainer();
                    });
                } else {
                    console.log(`Nenhum marcador encontrado com o id ${dataId} na base de dados.`);
                }
            });
        }

        // Atribuir o evento de clique ao botão "limpar"
        const limparToolbarRender = document.querySelectorAll('#limpar');
        limparToolbarRender.forEach((btn) => {
            btn.addEventListener('click', function () {
                // Executa a função de restauração (se houver)
                restaurarDestaques();

                // Executa a função para deletar a marcação do texto selecionado
                deletarMarcacao();
            });
        });

        function obterTextoSelecionado() {
            const selection = window.getSelection();

            // Verifica se há uma seleção ativa
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);

                // Obtém o texto selecionado
                const textoSelecionado = range.toString().trim();

                // Retorna o texto selecionado
                return textoSelecionado;
            }

            return null; // Nenhuma seleção foi feita
        }

        // Função Para Busca a Palavra no dicionario
        async function buscarNoDicionario(palavra) {
            if (palavra) {
                fecharToolbar()
                document.getElementById('search-input').value = palavra.toLowerCase();
                fecharMenuDicionario();
                abrirDicionario();
                await buscarPalavra(palavra.toLowerCase());

            } else {
                alert("Por favor, selecione uma palavra válida.");
            }
        }

        // Função para verificar se mais de uma palavra foi selecionada
        function verificarSelecao() {
            const renderMenuDiv = document.querySelector('.render-dicionario');
            renderMenuDiv.innerHTML = "";
            const textoSelecionado = window.getSelection().toString().trim();

            // Conta o número de palavras na seleção
            const palavras = textoSelecionado.split(/\s+/); // Quebra o texto em palavras pelo espaço

            if (palavras.length > 1) {
                // Mais de uma palavra foi selecionada
                abrirDicionario();
                renderMenuDiv.innerHTML = `
        
            <div style="position:absolute;top:50%;left:50%; transform: translate(-50%,-50%);">
                <div class="d-flex align-content-center flex-column justify-content-center w-100 h-100 align-items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    <p style="color:#000;" class="text-center"><strong>Opps...</strong></p>
                    <p style="color:#000;" class="text-center">Selecione apenas uma palavra.</p>
                </div>
            </div>
        `;
                return false; // Retorna false para impedir a busca
            }

            return palavras[0]; // Retorna a primeira palavra se apenas uma for selecionada
        }

        // Evento para o clique no dicionário
        document.getElementById('dicionario-toolbar').addEventListener('click', function () {
            const primeiraPalavra = verificarSelecao(); // Usa a função de verificação

            fecharBoxCores();
            if (primeiraPalavra) {
                buscarNoDicionario(primeiraPalavra); // Faz a busca no dicionário se for uma única palavra

            }
            // else {
            //     alert("Por favor, selecione uma palavra válida.");
            // }
        });

        document.getElementById('resumo').addEventListener('click', async function () {
            const textoResumo = obterTextoSelecionado();
            fecharBoxCores();
            fecharToolbar();

            const configuracaoData = await resumoConfig();
            const config = configuracaoData.ceumaAI

            const { contexto } = config;

            // console.log(contexto)

            // Chama a função que gera o resumo
            resumoAI(textoResumo, contexto, "Faça esse Resumo bem siplificadinho pra uma pessoa leiga", "Estudante Leigo", 10, "1 linha").then(resumo => {
                const containerFlip = document.querySelector("#flip-container");
                // console.log(resumo)
                // Verifica se o container está mostrando o histórico (flipado)
                if (containerFlip.classList.contains('flip-active')) {
                    // Se estiver no histórico, removemos o flip para voltar ao resumo
                    containerFlip.classList.remove('flip-active');
                }

                // Processa o resumo e o exibe
                soundBipe();
                // console.log('Resumo retornado:', resumo);

                // Após gerar o resumo, você pode processar o resumo e exibir na tela
            });

            const verificarAberturaResumo = document.querySelector(".resumo-menu");

            // Verifica se o resumo está aberto ou não
            if (verificarAberturaResumo.classList.contains("open")) {
                // O menu já está aberto, então não precisamos fechá-lo, apenas atualizar
                // console.log("O menu de resumo já está aberto.");
            } else {
                // O menu está fechado, então fechamos e reabrimos para garantir atualização
                fecharResumo(); // Fecha o resumo, caso esteja parcialmente aberto
                abrirResumo(); // Reabre o menu de resumo
            }

        });

    }


}