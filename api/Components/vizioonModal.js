// Função para configurar o modal dinamicamente ao clicar no botão
function vizioonModal(titulo, conteudoHtml, botoesExtras = null, seletorClick = null, configModal = ["modal-dialog"], animationSelectors = [] , ativarModalSemButton = false) {
    if(ativarModalSemButton) {
        renderizarModal(titulo, conteudoHtml, botoesExtras, configModal, animationSelectors);
    }else{
        if (seletorClick) {
            const clickElement = document.querySelector(seletorClick);
            if (clickElement) {
                clickElement.addEventListener('click', () => {
                    renderizarModal(titulo, conteudoHtml, botoesExtras, configModal, animationSelectors);
                });
            } else {
                console.warn(`Elemento com o seletor "${seletorClick}" não encontrado.`);
            }
        }
        
    }
}

// Função para renderizar o modal com reinício de animações específicas
function renderizarModal(titulo, conteudoHtml, botoesExtras = null, configModal = ["modal-dialog"], animationSelectors = [] ) {
    // Define o título do modal
    const modalTitle = document.querySelector('#vizioonModal .vizioonModal-title');
    if (modalTitle) {
        modalTitle.innerHTML = titulo;
    } else {
        console.error("Elemento .vizioonModal-title não encontrado.");
    }

    // Define o conteúdo HTML do corpo do modal
    const modalBody = document.querySelector('#vizioonModal .vizioonModal-body');
    if (modalBody) {
        modalBody.innerHTML = conteudoHtml;
    } else {
        console.error("Elemento .vizioonModal-body não encontrado.");
    }

    // Insere os botões extras no rodapé do modal
    const modalFooter = document.querySelector('#vizioonModal .modal-footer');
    if (modalFooter) {
        modalFooter.innerHTML = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>`; // Botão padrão de fechamento
        if (botoesExtras) {
            modalFooter.innerHTML += botoesExtras;
        }
    } else {
        console.error("Elemento .modal-footer não encontrado.");
    }

    // Configura o tamanho do modal
    const modalDialog = document.querySelector('#vizioonModal .modal-dialog');
    if (modalDialog) {
        modalDialog.className = "modal-dialog"; // Remove todas as classes anteriores
        modalDialog.classList.add(...configModal); // Adiciona as novas classes de configuração
    }

    // Reinicia as animações para os elementos especificados
    animationSelectors.forEach(({ _class, _animation }) => {
        const animatedElement = document.querySelector(_class);
        if (animatedElement) {
            // Remove a(s) classe(s) de animação
            _animation.split(" ").forEach(animClass => animatedElement.classList.remove(animClass));
            
            // Força o reflow ao acessar uma propriedade de layout
            void animatedElement.offsetWidth;

            // Adiciona a(s) classe(s) de animação de volta
            _animation.split(" ").forEach(animClass => animatedElement.classList.add(animClass));
        }
    });

    // Inicializa e exibe o modal
    const vizioonModal = new bootstrap.Modal(document.getElementById('vizioonModal'));
    vizioonModal.show();
}

