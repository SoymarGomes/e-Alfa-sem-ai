function initLivros() {

    const livros = [
        {
            titulo: "Livro 1: Treinamento de força levado a sério",
            descricao: "Capítulo 2: Planejamento e segurança alimentar.",
            imagem: "./assets/unidade/indicacao.png",
            thumbnail: "./assets/unidade/indicacao.png",
            content: `
                <p>Leia o Apêndice C do Livro: BOMPA, Tudor O.; DI PASQUALE, Mauro; CORNACCHIA, Lorenzo. Treinamento de força levado a sério. Manole, 2015.
                    Neste Capítulo, você encontrará informações sobre:
                    </p>
                    <li>Peso máximo com base em repetições.</li>

                    <div class="row justify-content-center">
                    <div class="col-12 text-center my-2">
                        <a target="_blank" href="https://pergamum.grupoceuma.com.br/"
                        class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" 
                        style="border:1px dashed #ccc;font-size:1rem !important;">
                        <i data-lucide="album" style="color:#FF8A00;"></i> Ir para o acervo</a>
                    </div>
                </div>`
        },
        {
            titulo: "Livro 2: Administração de Serviços",
            descricao: "Capítulo 2: Planejamento e segurança alimentar.",
            imagem: "./assets/unidade/indicacao2.png",
            thumbnail: "./assets/unidade/indicacao2.png",
            content: `
                <p>Leia o livro: SHOENFELD B. Hipertrofia Muscular, Ciência e Prática. 2° Edição, Manole, 2022.</p>                
                <div class="row justify-content-center">
                    <div class="col-12 text-center my-2">
                        <a target="_blank" href="https://pergamum.grupoceuma.com.br/"
                        class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" 
                        style="border:1px dashed #ccc;font-size:1rem !important;">
                        <i data-lucide="album" style="color:#FF8A00;"></i> Ir para o acervo</a>
                    </div>
                </div>`
        },
        
       
    ];

    const thumbnailsContainer = document.getElementById("thumbnails-container");
    const previewImg = document.getElementById("preview-img");
    const contentAction = document.getElementById("content-livro-action");

    // Função para criar thumbnails
    function criarThumbnail(livro) {
        const imgElement = document.createElement("img");
        imgElement.src = livro.thumbnail;
        imgElement.alt = livro.titulo;
        imgElement.className = "thumbnail img-thumbnail";
        imgElement.style.width = "50px";
        imgElement.style.height = "75px";
        imgElement.style.cursor = "pointer";

        // Adiciona evento de clique
        imgElement.addEventListener("click", () => {
            carregarPreview(livro);
            lucide.createIcons();
            aplicarClasseAnimada(previewImg, "_sugirEsquerdaAndando_1");
        });

        return imgElement;
    }

    // Função para atualizar o preview
    function carregarPreview(livro) {
        previewImg.src = livro.imagem; // Atualiza a imagem principal
        contentAction.innerHTML = livro.content; // Carrega o conteúdo dinâmico
    }

    // Função genérica para reaplicar classe de animação
    function aplicarClasseAnimada(elemento, classeAnimacao) {
        if (!elemento) return;

        // Remove a classe de animação existente
        elemento.classList.remove(classeAnimacao);

        // Reaplica a animação utilizando requestAnimationFrame
        requestAnimationFrame(() => {
            elemento.classList.add(classeAnimacao);
        });
    }

    // Função para verificar se as thumbnails já existem
    function renderizarThumbnails() {
        if (thumbnailsContainer.childElementCount === 0) {
        //    console.log(livros.length)

            if(livros.length > 1 ){
                livros.forEach(livro => {

    
                    const thumbnail = criarThumbnail(livro);
                    thumbnailsContainer.appendChild(thumbnail);
                });
            }
        }
    }

    // Renderizar thumbnails uma única vez
    renderizarThumbnails();

    // Carregar o primeiro livro como padrão
    carregarPreview(livros[0]);
    lucide.createIcons();
}

// Inicia o sistema de livros
initLivros();
