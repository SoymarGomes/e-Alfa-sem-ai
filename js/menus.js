document.addEventListener('DOMContentLoaded', function () {
    abrirSumario();
    abrirAnotacoes();
    checkEmptyResumoContainer();
    checkEmptyResumoHistoricoContainer();
    checkEmptyMarcacaoContainer();

});

// Função para verificar se o contêiner de resumo está vazio
function checkEmptyResumoContainer() {
    const resumoContainer = document.querySelector('.render-resumo-result');

    // Verifica se o contêiner existe
    if (!resumoContainer) return;

    // Verifica se o conteúdo do contêiner está vazio (desconsiderando comentários ou espaços em branco)
    if (!resumoContainer.children.length || resumoContainer.innerHTML.trim() === '') {
        // Adiciona a mensagem de "vazio" se não houver conteúdo visível
        $(".avatar-container").removeClass("d-flex").addClass("d-none");
        let emptyMessage = document.querySelector('.empty-resumo-message');
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.classList.add('empty-resumo-message-add');
            emptyMessage.innerHTML = `

                <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="text-center p-4">
                        <img src="./assets/list.gif" alt="list-is-empty" class="img-fluid mb-3" style="max-width: 150px;">
                        <h4>Nada aqui ainda...</h4>
                        <p>Selecione um texto apropriado para dar continuidade.</p>
                        <div class="flex column alert alert-warning" role="alert" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
                            <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser incorretas ou inadequadas.</p>
                        </div>
                    </div>
                </div>

                
            `;
            resumoContainer.appendChild(emptyMessage);
        }
    } else {
        // Remove a mensagem de "vazio" se houver conteúdo
        const emptyMessage = document.querySelector('.empty-resumo-message');
        $(".avatar-container").removeClass("d-none").addClass("d-flex");
        if (emptyMessage) {
            emptyMessage.remove();
        }
    }
}

// Função para verificar se o contêiner de resumo histórico está vazio
function checkEmptyResumoHistoricoContainer() {
    const resumoHistoricoContainer = document.querySelector('.render-resumo-result-historico');

    // Verifica se o contêiner existe
    if (!resumoHistoricoContainer) return;

    // Verifica se o conteúdo do contêiner está vazio
    if (!resumoHistoricoContainer.children.length || resumoHistoricoContainer.innerHTML.trim() === '') {
        // Adiciona a mensagem de "vazio" se não houver conteúdo visível
        let emptyMessage = document.querySelector('.empty-resumo-historico-message');
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.classList.add('empty-resumo-message-add');
            emptyMessage.innerHTML = `
                <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="text-center p-4">
                        <img src="./assets/list.gif" alt="list-is-empty" class="img-fluid mb-3" style="max-width: 150px;">
                        <h4>Nada aqui ainda...</h4>
                        <p>Salve um item no Histórico para dar continuidade.</p>
                  
                    </div>
                </div>
            `;
            resumoHistoricoContainer.appendChild(emptyMessage);
        }
    } else {
        // Remove a mensagem de "vazio" se houver conteúdo
        const emptyMessage = document.querySelector('.empty-resumo-historico-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }
    }
}

// Função para Verificar se o container de Marcação é Vazio
function checkEmptyMarcacaoContainer() {
    const marcacaoContainer = document.querySelector('.accordionMarcacao');

    // Verifica se o contêiner de marcação existe
    if (!marcacaoContainer) {
        // console.log('Container de marcação não encontrado');
        return;
    }

    // Verifica se o conteúdo do contêiner de marcação está vazio
    if (!marcacaoContainer.children.length || marcacaoContainer.innerHTML.trim() === '') {
        // console.log('Container de marcação está vazio');

        // Adiciona a mensagem de "vazio" se não houver conteúdo visível
        let emptyMessage = document.querySelector('.empty-marcacao-message');
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.classList.add('empty-marcacao-message');
            emptyMessage.innerHTML = `
                <div class="d-flex align-items-center justify-content-center h-100">
                    <div class="text-center p-4">
                        <img src="./assets/list.gif" alt="list-is-empty" class="img-fluid mb-3" style="max-width: 150px;">
                        <h4>Nada aqui ainda...</h4>
                        <p>Salve um item na marcação para dar continuidade.</p>
                    </div>
                </div>
            `;
            marcacaoContainer.appendChild(emptyMessage);
        }
    } else {
        // Remove a mensagem de "vazio" se houver conteúdo
        console.log('Container de marcação contém itens');
        const emptyMessage = document.querySelector('.empty-marcacao-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }
    }
}


const toolBox = document.querySelector('.box-tools-inline');
const _animationShow = "animate__fadeInDown";
const _animationHide = "animate__backOutUp";
// Função para Fechar o Toobox quando o sumário ou anotações for Aberto
function closeToggleBox(toolBox) {
    toolBox.classList.remove(_animationShow); // Remove a animação de entrada
    toolBox.classList.add('animate__animated', _animationHide); // Adiciona a animação de saída
    toolBox.addEventListener('animationend', () => {
        toolBox.style.display = 'none';
        toolBox.classList.remove('animate__animated', _animationHide); // Remove a animação de saída
    }, {
        once: true
    });
}

// Função para abrir o sumário
function abrirSumario() {
    const botaoAbrirSumario = document.getElementById('btnOpenSumario');
    const menuSumario = document.querySelector('.sidebar-menu');
    botaoAbrirSumario.addEventListener('click', function (evento) {

        evento.stopPropagation();
        // Fecha o menu de anotações, se estiver aberto
        fecharMenuAnotacoes();
        fecharResumo();
        fecharMenuDicionario()
        fecharMenuMarcacao();

        // Chamando a função para fechar a caixa de ferramentas
        closeToggleBox(toolBox);

        menuSumario.classList.toggle('open');


        if (menuSumario.classList.contains('open')) {
            botaoAbrirSumario.innerHTML = `
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            `
        } else {
            botaoAbrirSumario.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-text"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5"/><path d="M9.5 12H16"/><path d="M9.5 16H14"/></svg>
            `
        }

    });

    document.addEventListener('click', function (evento) {
        if (menuSumario.classList.contains('open') && !menuSumario.contains(evento.target) && evento.target !== botaoAbrirSumario) {
            fecharMenuSumario();
        }
    });
}

// Função para fechar o menu de sumário
function fecharMenuSumario() {
    const menuSumario = document.querySelector('.sidebar-menu');
    const botaoAbrirSumario = document.getElementById('btnOpenSumario');

    if (menuSumario.classList.contains('open')) {
        menuSumario.classList.remove('open');

        botaoAbrirSumario.innerHTML = `
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-text"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5"/><path d="M9.5 12H16"/><path d="M9.5 16H14"/></svg>
       `
    }
}

// Função para abrir o menu de anotações
function abrirAnotacoes() {
    const botaoAbrirAnotacoes = document.querySelector('.openAnnotation');
    const menuAnotacoes = document.querySelector('.sidebar-menu-Annotation');

    botaoAbrirAnotacoes.addEventListener('click', function (evento) {
        evento.stopPropagation();

        // verificar se container é vazio pra mudar o icon
        const iconAnnotation = checkEmptyAnnotationsContainer();

        // Verificar e remover a classe 'close-annotation' se ela existir pois ele fecha a 
        // esquerda
        if (menuAnotacoes.classList.contains('close-annotation')) {
            menuAnotacoes.classList.remove('close-annotation');
        }

        // Verificar se está à esquerda e adicionar a classe 'close-annotation'
        if (menuAnotacoes.classList.contains('left')) {
            menuAnotacoes.classList.remove('left');
            menuAnotacoes.classList.add('close-annotation');
        }

        // Fecha o menu de sumário, se estiver aberto
        fecharMenuSumario();
        fecharResumo();

        // Chamando a função para fechar a caixa de ferramentas
        // closeToggleBox(toolBox);

        menuAnotacoes.classList.toggle('open-annotation');

        // Pegar ID Personalizado para Mudar o Nome do Tooltip...


        if (menuAnotacoes.classList.contains('open-annotation')) {
            botaoAbrirAnotacoes.innerHTML = `<i class="bi bi-x-lg"></i>`
        } else {

            botaoAbrirAnotacoes.innerHTML = `
                ${iconAnnotation ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticker"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M14 3v4a2 2 0 0 0 2 2h4"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"/></svg>`
                    :
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg> `}
            `
        }

    });

    document.addEventListener('click', function (evento) {
        if (menuAnotacoes.classList.contains('open-annotation') && !menuAnotacoes.contains(evento.target) && evento.target !== botaoAbrirAnotacoes) {
            fecharMenuAnotacoes();
        }
    });
}

function fecharMenuAnotacoes() {

    const menuAnotacoes = document.querySelector('.sidebar-menu-Annotation');
    const botaoAbrirAnotacoes = document.querySelector('.openAnnotation');
    // const vizioon_anotation = document.querySelector(".vizion-annotation");

    // Verificar se o container é vazio para mudar o ícone
    const iconAnnotation = checkEmptyAnnotationsContainer();

    if (menuAnotacoes.classList.contains('open-annotation')) {
        menuAnotacoes.classList.remove('open-annotation');


        // Verificar se está à esquerda e adicionar a classe 'close-annotation'
        if (menuAnotacoes.classList.contains('left')) {
            menuAnotacoes.classList.remove('left');
            menuAnotacoes.classList.add('close-annotation');
        }

        // Atualizar o ícone e o tooltip
        botaoAbrirAnotacoes.innerHTML = `
        ${iconAnnotation ?
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticker"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M14 3v4a2 2 0 0 0 2 2h4"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"/></svg>`
                :
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg> `}
        `

    }
}

// Função para abrir o dicionário
function abrirDicionario() {
    const menuDicionario = document.querySelector('.dicionario-menu');
    fecharResumo();
    abrirDicionario();
    fecharMenuAnotacoes();
    fecharMenuMarcacao();

    // Fecha o menu de anotações, se estiver aberto

    // Alterna a classe para abrir ou fechar o menu

    $.ajax({
        url: "./modules/config.json",
        method: "GET",
        cache: false,
        success: (data) => {

            const _dicionarioModules = data.dicionario

            Object.values(_dicionarioModules).length === 0 ? _dicionarioModules = {

                "ativo": true,
                "dicionario": "dicio",
                "menu_dicionario": true

            } : _dicionarioModules;

            if (data && _dicionarioModules) {

                if (_dicionarioModules.menu_dicionario) {

                    menuDicionario.classList.toggle('open');
                } else {
                    // Debug

                    Swal.fire({
                        icon: "error",
                        title: `Modulo Não Ativo`,
                        heightAuto: false,
                        footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
                    });
                }
            }


        },
        error: (error) => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: `Erro Json Desativada`,
                heightAuto: false,
                footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
            });
        }
    });

    // Fecha o menu quando clicar fora dele (Adiciona apenas uma vez)
    // document.addEventListener('click', function (evento) {
    //     if (menuDicionario.classList.contains('open') && !menuDicionario.contains(evento.target)) {
    //         fecharMenuDicionario();
    //     }
    // });
}

// Função para abrir o resumo
function abrirResumo() {
    const menuResumo = document.querySelector('.resumo-menu');

    // Alterna a classe para abrir ou fechar o menu de resumo
    // menuResumo.classList.toggle('open');
    fecharMenuDicionario();
    fecharMenuAnotacoes();
    fecharMenuSumario();
    fecharMenuSumario();

    $.ajax({
        url: "./modules/config.json",
        method: "GET",
        cache: false,
        success: (data) => {

            const _ceumaAIModules = data.ceumaAI;
            if (data && _ceumaAIModules) {

                if (_ceumaAIModules.menu_resumo) {
                    // Verificar e remover a classe 'close-annotation' se ela existir pois ele fecha a 
                    // esquerda
                    if (menuResumo.classList.contains('close-annotation')) {
                        menuResumo.classList.remove('close-annotation');
                    }

                    // Verificar se está à esquerda e adicionar a classe 'close-annotation'
                    if (menuResumo.classList.contains('left')) {
                        menuResumo.classList.remove('left');
                        menuResumo.classList.add('close-annotation');
                    }


                    menuResumo.classList.toggle('open');
                } else {
                    // Debug

                    Swal.fire({
                        icon: "error",
                        title: `Modulo Não Ativo`,
                        heightAuto: false,
                        footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
                    });
                }
            }


        },
        error: (error) => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: `Erro Json Desativada`,
                heightAuto: false,
                footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
            });
        }
    });

    // Fecha o menu quando clicar fora dele
    // document.addEventListener('click', function (evento) {
    //     if (menuResumo.classList.contains('open') && !menuResumo.contains(evento.target)) {
    //         fecharResumo();
    //     }
    // });
}

// Função para fechar o menu de resumo
function fecharResumo() {
    const menuResumo = document.querySelector('.resumo-menu');
    $(".render-resumo-result").html("");
    // Verificar e remover a classe 'close-annotation' se ela existir pois ele fecha a 
    // esquerda
    if (menuResumo.classList.contains('close-annotation')) {
        menuResumo.classList.remove('close-annotation');
    }

    // Verificar se está à esquerda e adicionar a classe 'close-annotation'
    if (menuResumo.classList.contains('left')) {
        menuResumo.classList.remove('left');
        menuResumo.classList.add('close-annotation');
    }

    // Verifica se o menu está aberto
    if (menuResumo.classList.contains('open')) {
        menuResumo.classList.remove('open');
    }

    if (typeof checkEmptyResumoContainer === 'function') {
        checkEmptyResumoContainer();  // Executa a função apenas se ela existir
    }
}

// Função para abrir o resumo
function abrirDicionario() {
    const menuDicionario = document.querySelector('.dicionario-menu');

    // Fecha o menu de anotações, se estiver aberto

    // Alterna a classe para abrir ou fechar o menu

    $.ajax({
        url: "./modules/config.json",
        method: "GET",
        cache: false,
        success: (data) => {

            const _dicionarioModules = data.dicionario

            Object.values(_dicionarioModules).length === 0 ? _dicionarioModules = {

                "ativo": true,
                "dicionario": "dicio",
                "menu_dicionario": true

            } : _dicionarioModules;

            if (data && _dicionarioModules) {

                if (_dicionarioModules.menu_dicionario) {

                    menuDicionario.classList.toggle('open');
                    fecharMenuAnotacoes();
                    fecharResumo();
                    fecharMenuSumario();
                    fecharMenuMarcacao();
                } else {
                    // Debug

                    Swal.fire({
                        icon: "error",
                        title: `Modulo Não Ativo`,
                        heightAuto: false,
                        footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
                    });
                }
            }


        },
        error: (error) => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: `Erro Json Desativada`,
                heightAuto: false,
                footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
            });
        }
    });

    // Fecha o menu quando clicar fora dele (Adiciona apenas uma vez)
    // document.addEventListener('click', function (evento) {
    //     if (menuDicionario.classList.contains('open') && !menuDicionario.contains(evento.target)) {
    //         fecharMenuDicionario();
    //     }
    // });
}

// Função para fechar o resumo
function fecharMenuDicionario() {
    const menuDicionario = document.querySelector('.dicionario-menu');

    // Verifica se o menu está aberto
    if (menuDicionario.classList.contains('open')) {


        // Verifica se a função pararAudioDicionario existe
        if (typeof renderizarDicionario === 'function') {
            renderizarDicionario();  // Chama Sempre essa Atualização para Verificar se o Dicionario Está True
        }
        // Verifica se a função pararAudioDicionario existe se ele não existe signifi que o dicionario Está False ou seja não tem requisição >-<
        if (typeof pararAudioDicionario === 'function') {
            pararAudioDicionario();  // Executa a função apenas se ela existir
        }

        // Limpa o conteúdo do dicionário e fecha o menu
        $("#result-dicionario").html("");
        document.getElementById('search-input').value = "";

        if (typeof checkEmptyDicionarioContainer === 'function') {
            checkEmptyDicionarioContainer();  // Executa a função apenas se ela existir
        }

        menuDicionario.classList.remove('open');
    }


}

// Função para abrir o resumo
function abrirDicionario() {
    const menuDicionario = document.querySelector('.dicionario-menu');

    // Fecha o menu de anotações, se estiver aberto

    // Alterna a classe para abrir ou fechar o menu

    $.ajax({
        url: "./modules/config.json",
        method: "GET",
        cache: false,
        success: (data) => {

            const _dicionarioModules = data.dicionario

            Object.values(_dicionarioModules).length === 0 ? _dicionarioModules = {
                "pesquisa": true,
                "menu_marcacao": true

            } : _dicionarioModules;

            if (data && _dicionarioModules) {

                if (_dicionarioModules.menu_dicionario) {

                    menuDicionario.classList.toggle('open');
                    fecharMenuAnotacoes();
                    fecharResumo();
                    fecharMenuSumario();
                    fecharMenuMarcacao();
                } else {
                    // Debug

                    Swal.fire({
                        icon: "error",
                        title: `Modulo Não Ativo`,
                        heightAuto: false,
                        footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
                    });
                }
            }


        },
        error: (error) => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: `Erro Json Desativada`,
                heightAuto: false,
                footer: `<a href="#" onclick="">você acha que isso é um erro ? @suporte</a>`
            });
        }
    });

    // Fecha o menu quando clicar fora dele (Adiciona apenas uma vez)
    // document.addEventListener('click', function (evento) {
    //     if (menuDicionario.classList.contains('open') && !menuDicionario.contains(evento.target)) {
    //         fecharMenuDicionario();
    //     }
    // });
}

// Função para fechar o resumo
function fecharMenuDicionario() {
    const menuDicionario = document.querySelector('.dicionario-menu');

    // Verifica se o menu está aberto
    if (menuDicionario.classList.contains('open')) {


        // Verifica se a função pararAudioDicionario existe
        if (typeof renderizarDicionario === 'function') {
            renderizarDicionario();  // Chama Sempre essa Atualização para Verificar se o Dicionario Está True
        }
        // Verifica se a função pararAudioDicionario existe se ele não existe signifi que o dicionario Está False ou seja não tem requisição >-<
        if (typeof pararAudioDicionario === 'function') {
            pararAudioDicionario();  // Executa a função apenas se ela existir
        }

        // Limpa o conteúdo do dicionário e fecha o menu
        $("#result-dicionario").html("");
        document.getElementById('search-input').value = "";

        if (typeof checkEmptyDicionarioContainer === 'function') {
            checkEmptyDicionarioContainer();  // Executa a função apenas se ela existir
        }

        menuDicionario.classList.remove('open');
    }


}

// Função para abrir a seção de marcação
function abrirMarcacao() {
    const menuMarcacao = document.querySelector('.marcacao-menu');

    // Fecha o menu de anotações, se estiver aberto
    // fecharMenuDicionario(); // Assume que você deseja fechar o dicionário se estiver aberto

    // Alterna a classe para abrir ou fechar o menu
    $.ajax({
        url: "./modules/config.json",
        method: "GET",
        cache: false,
        success: (data) => {
            const _marcacaoModules = data.marcacao; // Alterado para acessar 'marcacao'

            // Se não houver módulos, define os padrões
            Object.values(_marcacaoModules).length === 0 ? _marcacaoModules = {
                "pesquisa": true,
                "menu_marcacao": true
            } : _marcacaoModules;

            if (data && _marcacaoModules) {
                if (_marcacaoModules.menu_marcacao) {
                    menuMarcacao.classList.toggle('open'); // Alterna a classe para abrir/fechar
                    fecharMenuAnotacoes();
                    fecharResumo();
                    fecharMenuSumario();
                    fecharMenuDicionario();
                } else {
                    // Mensagem de erro se o módulo não estiver ativo
                    Swal.fire({
                        icon: "error",
                        title: `Módulo Não Ativo`,
                        heightAuto: false,
                        footer: `<a href="#" onclick="">Você acha que isso é um erro? @suporte</a>`
                    });
                }
            }
        },
        error: (error) => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: `Erro ao carregar o JSON`,
                heightAuto: false,
                footer: `<a href="#" onclick="">Você acha que isso é um erro? @suporte</a>`
            });
        }
    });

    // Fecha o menu quando clicar fora dele (Adiciona apenas uma vez)
    // document.addEventListener('click', function (evento) {
    //     if (menuMarcacao.classList.contains('open') && !menuMarcacao.contains(evento.target)) {
    //         fecharMenuMarcacao();
    //     }
    // });
}

// Função para fechar o menu de marcação
function fecharMenuMarcacao() {
    const menuMarcacao = document.querySelector('.marcacao-menu');

    // Verifica se o menu está aberto
    if (menuMarcacao.classList.contains('open')) {
        // Limpa o conteúdo da marcação e fecha o menu
        // $("#result-marcacao").html("");
        // document.getElementById('search-input').value = "";

        // Remove a classe 'open' para fechar o menu
        menuMarcacao.classList.remove('open');
    }
}

const btn_marcacao = document.querySelector(".marcacao-button");
btn_marcacao.addEventListener("click", function (event) {
    event.stopPropagation();
    abrirMarcacao();

})

const fechar_marcacao = document.querySelector(".close_marcacao");
fechar_marcacao.addEventListener("click", function (event) {
    event.stopPropagation();
    fecharMenuMarcacao();
})

