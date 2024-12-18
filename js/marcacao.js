

// Render Destaques.
async function renderMarcacao() {
    const renderMarcacaoDiv = document.querySelector('#result-marcacao');
    renderMarcacaoDiv.innerHTML = ''; // Limpa o conteúdo existente

    // Criar o contêiner pai
    const ContainerPai = document.createElement("div");
    ContainerPai.className = `accordion accordion-flush d-flex flex-column gap-1 accordionMarcacao`;
    ContainerPai.id = `accordionMarcacao`;

    // console.log(destaquesDB)

    // Buscando os itens na coleção
    destaquesDB.find({}, function (destaquesItems) {
        // Verificar Quantidade de Marcações que já foram feitas o Total
        const totalMarcacoes = destaquesItems.length; // Total de marcações
        $(".counter-marcacao-button").text(totalMarcacoes); // Atualiza o total no botão

        // console.log(totalMarcacoes)

        const groupedItems = {};

        // Agrupando os itens por paginaIndex
        destaquesItems.forEach(item => {
            const pageIndex = item.paginaIndex;
            if (!groupedItems[pageIndex]) {
                groupedItems[pageIndex] = [];
            }
            groupedItems[pageIndex].push(item);
        });

        // Renderizando os itens agrupados
        for (const pageIndex in groupedItems) {
            const items = groupedItems[pageIndex];
            const accordionId = `flush-collapse-${pageIndex}`;
            const totalMarcacoes = items.length; // Total de marcações para a página
            const PageData = api[pageIndex];

            // console.log(PageData.nome_page)

            // Criação do acordeão para a página
            let accordionHTML = `
                <div class="accordion-item accordionMarcacao-item">
                    <h2 class="accordion-header accordionMarcacao-header">
                        <button class="accordion-button collapsed accordionMarcacao-button d-flex flex-row align-items-center justify-content-center gap-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#${accordionId}" aria-expanded="false"
                            aria-controls="${accordionId}">
                            <strong><i data-lucide="layers"></i></strong> <strong>Página ${pageIndex}</strong> <strong> || </strong> <strong>Total:</strong><span class="badge text-bg-secondary">${totalMarcacoes}</span>
                             <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="
                                <p>${PageData.nome_page}</p>
                                " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        </button>
                    </h2>
                    <div id="${accordionId}" class="accordion-collapse collapse" data-bs-parent="#accordionMarcacao">
                        <div class="accordion-body">
            `;

            // Adicionando os cards para cada item
            items.forEach((item, index) => {
                const dataHora = new Date(item.dataHora).toLocaleDateString('pt-BR');

                accordionHTML += `
                    <div class="card mb-3 shadow-sm border border-opacity-25 border-dark">
                        <div class="card-header text-white" style="background:${item.corFundo};color:${item.corTexto};">
                            <h5 class="mb-0 d-flex flex-row align-items-center gap-2 w-100">
                                <span class="rounded-circle border border-light d-flex flex-row align-items-center justify-content-center overflow-hidden" style="width:40px;height:40px;">${index + 1}</span>
                                Dia ${dataHora}
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                ${item.palavra}
                            </p>
                            <p class="card-text d-flex gap-3 align-items-center" style="cursor: pointer;">
                                <strong>Data:</strong> ${dataHora}
                                <!--
                                    <i class="justify-content-left" data-lucide="book-open" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="
                                    <p style='text-align:left;width:100%;'>startOffset:${reduzirTexto(item.startOffset, 10)}</p>
                                    <p style='text-align:left;width:100%;'>endOffset:${reduzirTexto(item.endOffset, 10)}</p>
                                    <p style='text-align:left;width:100%;'>_id:${reduzirTexto(item._id, 10)}</p>
                                    "></i>
                                -->
                                
                            </p>
                            <div class="d-flex justify-content-center mt-3">
                                <div class="btn-group" role="group" aria-label="action-marcacao-item">
                                    <button type="button" class="btn btn-success" onclick="seguirMarcacao('${item._id}')">Seguir</button>
                                    <button type="button" class="btn btn-danger" onclick="deletarMarcacao('${item._id}')">Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });

            accordionHTML += `</div> <!-- .accordion-body -->
                    </div> <!-- .accordion-collapse -->
                </div> <!-- .accordion-item -->
            `;

            // Adiciona o HTML do acordeão ao contêiner pai
            ContainerPai.innerHTML += accordionHTML;
        }

        // Adiciona o contêiner pai ao DOM
        renderMarcacaoDiv.appendChild(ContainerPai);
    });
}

// Função para seguir uma marcação
function seguirMarcacao(id) {
    destaquesDB.find({ _id: id }, function (results) {
        if (results.length > 0) {
            const destaque = results[0];
            const {
                containerId,
                parentTag,
                elementoIndex
            } = destaque; // Obtemos o containerId para aplicar a borda

            // Selecionar o card correspondente usando o ID da marcação
            const containerElement = document.querySelector(`#${containerId}`); // Ajustamos o seletor para usar o containerId
            // Selecionar o Elemento filho desse containerPai
            const cardElement = containerElement.querySelectorAll(parentTag)[elementoIndex]
            if (cardElement) {

                gliderElement.addEventListener("glider-slide-visible", (event) => {

                    // console.log(event.detail.slide)
                    // showLoading(event.timeStamp);

                    // Adiciona a borda piscante
                    let isVisible = true;
                    const interval = setInterval(() => {
                        cardElement.style.borderRadius = '0.5rem';
                        cardElement.style.padding = '0.5rem';
                        cardElement.style.border = isVisible ? '2px dashed rgba(255, 138, 0, 1)' : '2px dashed transparent';
                        isVisible = !isVisible;
                    }, 500); // A cada 500ms, alterna entre a borda visível e invisível

                    // Remove a animação após 3 segundos
                    setTimeout(() => {
                        clearInterval(interval); // Para o intervalo
                        cardElement.style.borderRadius = '';
                        cardElement.style.padding = '';
                        cardElement.style.border = 'none'; // Remove a borda
                    }, 6000);


                    // // Mostrar o loading antes de iniciar a mudança de slide
                    gliderElement.addEventListener('glider-slide-hidden', function (event) {
                        showLoading(event.timeStamp);
                        // console.log()
                    });

                })
            }

            // Implementar a lógica adicional para seguir a marcação
            console.log(`Seguindo a marcação: ${destaque.palavra}`);
            glider.scrollItem(destaque.paginaIndex); // Adicione a lógica conforme necessário
        } else {
            console.log(`Marcação com ID ${id} não encontrada.`);
        }
    });
}


// Função para verificar e remover marcadores que não existem no banco de dados
function verificarDestaque() {
    // Capturar todos os marcadores na página
    const marcadores = document.querySelectorAll('marcador');

    marcadores.forEach(marcador => {
        const dataId = marcador.getAttribute('data-id');

        if (dataId) {
            // Consultar o banco de dados para verificar se o marcador existe
            destaquesDB.find({ id: dataId }, function (items) {
                // Se o marcador não existir no banco de dados, removê-lo do DOM
                if (!Array.isArray(items) || items.length === 0) {
                    console.log(`Marcador com id ${dataId} não encontrado no banco. Removendo...`);

                    // Substituir o marcador pelo seu conteúdo textual
                    while (marcador.firstChild) {
                        marcador.parentNode.insertBefore(marcador.firstChild, marcador);
                    }
                    marcador.parentNode.removeChild(marcador); // Remove o marcador do DOM
                } else {
                    console.log(`Marcador com id ${dataId} encontrado no banco.`);
                }
            });
        } else {
            console.log('Marcador sem data-id encontrado, removendo...');
            // Se o marcador não tiver data-id, remover apenas a tag do marcador
            while (marcador.firstChild) {
                marcador.parentNode.insertBefore(marcador.firstChild, marcador);
            }
            marcador.parentNode.removeChild(marcador);
        }
    });
}

// // Atribuir o evento de clique ao botão "verificar destaques"
// const verificarBtn = document.querySelector('#verificarDestaques');
// verificarBtn.addEventListener('click', verificarDestaque);

// Função para remover uma anotação com confirmação
async function removeMarcador(id) {
    try {
        // Exibe o SweetAlert2 para confirmação com ícone de perigo
        const result = await Swal.fire({
            title: 'Você tem certeza?',
            // text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, remover!',
            cancelButtonText: 'Cancelar',
            heightAuto: false,
        });

        if (result.isConfirmed) {
            destaquesDB.find({ _id: id }, function (items) {
                if (items.length > 0) {
                    const item = items[0];
                    item.delete(); // Remover o item da base de dados
                    console.log(`Marcador com id ${item._id} removido da base de dados.`);
                    // restaurarDestaques();
                    renderMarcacao(); // Re-renderiza as marcações
                    verificarDestaque();
                    checkEmptyMarcacaoContainer();
                } else {
                    console.log(`Nenhuma marcação encontrada com o id ${id}.`);
                }
            });
        } else {
            console.log('removeMarcador: Remoção da anotação cancelada.');
        }
    } catch (error) {
        console.error('removeMarcador: Erro ao remover anotação.', error);
    }
}

function deletarMarcacao(id) {
    removeMarcador(id) 
}

// Chama a função para renderizar os destaques
renderMarcacao();


