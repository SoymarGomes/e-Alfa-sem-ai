function abrirZoomist(url="https://placehold.co/600x400/blue/orange?font=Roboto&text=Substitua+o+caminho+da+img\n%20na+url(caminho)") {

    // Gera um ID único para evitar conflito
    const idUnico = `zoomist-${Math.random().toString(36).substr(2, 9)}`;

    // Pega o contêiner da modal e a área do Zoomist
    const modal = document.getElementById('modal-zoomist');
    const zoomistArea = document.getElementById('zoomist-area');

    // Verifique se os elementos existem
    if (!modal || !zoomistArea) {
        console.error('O modal ou a área do Zoomist não foram encontrados no DOM');
        return;
    }

    // Limpa o conteúdo anterior do Zoomist, se houver
    zoomistArea.innerHTML = '';

    // Verifica se a URL foi passada corretamente
    if (!url) {
        console.error('URL da imagem não foi fornecida');
        return;
    }

    // Cria a estrutura do Zoomist dinamicamente
    const zoomistContainer = document.createElement('div');
    zoomistContainer.classList.add('zoomist-container');
    zoomistContainer.id = idUnico;

    // Adiciona a imagem ao zoomistContainer
    const imgElement = new Image();
    imgElement.src = url;
    // imgElement.alt = "Zoomable Image";

    // Adiciona a estrutura da imagem
    zoomistContainer.innerHTML = `
        <div class="zoomist-wrapper zoomist-wrapper-componentes">
            <div class="zoomist-image zoomist-imagem-componentes"></div>
        </div>
    `;

    // Adiciona o Zoomist ao contêiner da modal
    zoomistArea.appendChild(zoomistContainer);
    const zoomistImageContainer = document.querySelector(`#${idUnico} .zoomist-image`);
    zoomistImageContainer.appendChild(imgElement);

    // Inicializa o Zoomist após a imagem carregar
    imgElement.onload = function () {
        // A modal deve estar visível antes de inicializar o Zoomist
        modal.style.display = 'flex';

        try {
            new Zoomist(`#${idUnico}`, {
                slider: true,
                zoomer: true,
                draggable: true,
                wheelable: true,
            });
        } catch (error) {
            console.error('Erro ao inicializar o Zoomist', error);
        }
    };

    // Fechar a modal ao clicar no "x"
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = 'none';
        };
    } else {
        console.error('O botão de fechar .close-modal não foi encontrado');
    }

    // Fecha a modal ao clicar fora do conteúdo
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
