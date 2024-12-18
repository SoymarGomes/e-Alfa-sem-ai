function Lupa() {
    // Selecionar todas as imagens com a classe 'img-photo-actions'
    const images_photo = document.querySelectorAll('.img-photo-actions');
    
    // Iterar sobre cada imagem e adicionar um botão se ainda não existir
    images_photo.forEach(image => {
        // Verificar se já existe um botão de lupa
        if (!image.querySelector(".toggle-lupa")) {
            // Adicionar botão de lupa se não existir
            image.innerHTML += `
                <button class="toggle-lupa">
                    <i data-lucide="zoom-in"></i>
                </button>
            `;
        }

        let zoomist;

        // Bloco para iniciar automaticamente o link
        const imgPhotoActions = document.querySelectorAll(".img-photo-actions");
        imgPhotoActions.forEach((item, index) => {
            // Verificar se dentro tem algum botão
            const btns = item.querySelectorAll("button");

            // Verificar se já tem o link carregado
            const img = item.querySelector("img");

            // Pegar a modal_imagem e criar um link simbólico para o botão
            const modal = document.getElementById("modal-imagem");
            const modal_imagem = modal.querySelector(".imagem-zoomist");

            btns.forEach((btn, idx) => {
                // Criar um ID único para cada botão, se necessário
                btn.id = "openImagem" + idx;
                // Quando o botão for clicado, associar o link da img à modal atribuída ao botão
                btn.onclick = () => {
                    modal_imagem.src = img.src;
                    modal.style.display = "flex"; // Abre a modal

                    // Inicializa ou reinicializa o Zoomist
                    if (zoomist) {
                        zoomist.update(); // Se já existe, apenas atualiza
                    } else {
                        zoomist = new Zoomist("#zoomist", {
                            slider: true,
                            zoomer: true,
                            draggable: true,
                            wheelable: true,
                        });
                    }
                };
            });
        });

        // Associar o evento de clique para os botões de lupa
        const btn_lupa = document.querySelectorAll(".toggle-lupa");
        btn_lupa.forEach((btn, index) => {
            btn.onclick = (e) => {
                e.stopPropagation();

                // Pega o elemento pai
                const elementosPai = e.target.closest('.img-photo-actions') || e.target.parentNode;

                // Verificar se dentro do elemento pai tem img
                const link_da_img = elementosPai.querySelector("img");

                // Atribuir a imagem que o botão está transmitindo para a modal
                if (link_da_img) {
                    const modal = document.getElementById("modal-imagem");
                    const modal_imagem = modal.querySelector(".imagem-zoomist");
                    modal_imagem.src = link_da_img.src;
                    modal.style.display = "flex"; // Abre a modal

                    // Inicializa ou reinicializa o Zoomist
                    if (zoomist) {
                        zoomist.update(); // Se já existe, apenas atualiza
                    } else {
                        zoomist = new Zoomist("#zoomist", {
                            slider: true,
                            zoomer: true,
                            draggable: true,
                            wheelable: true,
                        });
                    }
                }
            };
        });

        // Fechar a modal quando clicar no botão de fechar
        const closeBtn = document.querySelector(".close-imagem");
        if (closeBtn) {
            closeBtn.onclick = () => {
                const modal = document.getElementById("modal-imagem");
                modal.style.display = "none";
            };
        }

    });
}
