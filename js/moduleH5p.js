const {
    H5P
} = H5PStandalone;


// function abrirModalAtividade(button) {
//     // Exibe o modal inicialmente com o indicador de carregamento
//     const modal = document.getElementById("atividadeModal");
//     modal.style.display = "flex";

//     // Definindo os logs de atividade
//     const logsAtividade = [
//         "Procurando Atividade",
//         "Verificando Questões",
//         "Liberando Atividades"
//     ];

//     const ContainerName = document.querySelector(".question-nome");

//     // Atualiza o conteúdo do modal
//     const modalBodyAtividade = document.querySelector(".modal-body-atividade");
//     modalBodyAtividade.innerHTML = ``;

//     modalBodyAtividade.innerHTML = `
//         <div id="loading-indicator"
//         style="display: flex; justify-content: center; align-items: center; font-size: 1.2em; color: #555;">
//         <div class="loader-atividade">
//                 <div>
//                     <ul>
//                         <li>
//                             <svg fill="currentColor" viewBox="0 0 90 120">
//                                 <path
//                                     d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z">
//                                 </path>
//                             </svg>
//                         </li>
//                         <li>
//                             <svg fill="currentColor" viewBox="0 0 90 120">
//                                 <path
//                                     d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z">
//                                 </path>
//                             </svg>
//                         </li>
//                         <li>
//                             <svg fill="currentColor" viewBox="0 0 90 120">
//                                 <path
//                                     d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z">
//                                 </path>
//                             </svg>
//                         </li>
//                         <li>
//                             <svg fill="currentColor" viewBox="0 0 90 120">
//                                 <path
//                                     d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z">
//                                 </path>
//                             </svg>
//                         </li>
//                         <li>
//                             <svg fill="currentColor" viewBox="0 0 90 120">
//                                 <path
//                                     d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z">
//                                 </path>
//                             </svg>
//                         </li>
//                         <li>
//                             <svg fill="currentColor" viewBox="0 0 90 120">
//                                 <path
//                                     d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z">
//                                 </path>
//                             </svg>
//                         </li>
//                     </ul>
//                 </div> 
//                 <span class="log-text">${logsAtividade[0]}</span>

//         </div>
//     </div>
//     <div id="h5p-container" style="display: none;"></div>
//     `;


//     // Chamando a função de efeito com `elemento` vazio para ativar a animação de entrada e saída
//     efeitoDigitacao(300, "", 3, "digitacao", ".log-text", logsAtividade);


//     // Configura o fechamento do modal
//     const closeBtn = document.getElementsByClassName("close-atividade")[0];
//     closeBtn.onclick = function () {
//         modal.style.display = "none";
//     };

//     window.onclick = function (event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     };

//     // Obtém o caminho do JSON do atributo do botão
//     const h5pJsonPath = `./plugins/h5p/h5p-folder/${button.getAttribute('data-h5pjsonpath')}`;

//     ContainerName.innerHTML = ` <button class="btn-next-atividade">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left"><circle cx="12" cy="12" r="10"/><path d="M16 12H8"/><path d="m12 8-4 4 4 4"/></svg>
//                                 </button>

//                                 <span class="bg-primary px-3 py-1 rounded text-white">${button.innerHTML}</span> 

//                                 <button class="btn-prev-atividade">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="m12 16 4-4-4-4"/></svg>
//                                 </button>`

//     // Carrega o conteúdo H5P e, após 2 segundos, exibe o conteúdo final
//     setTimeout(() => {
//         new H5P(document.getElementById("h5p-container"), {
//             h5pJsonPath: h5pJsonPath,
//             frameJs: './plugins/h5p/core/frame.bundle.js',
//             frameCss: './plugins/h5p/core/styles/h5p.css'
//         });

//         document.getElementById("loading-indicator").style.display = "none";
//         document.getElementById("h5p-container").style.display = "block";

//         // Chama a função de processamento do iframe (se necessário)
//         processarIframeH5P();

//     }, 3000); // Espera de 2 segundos antes de iniciar o carregamento

// };

/*

    **************************************************************************************************************************************************

    -- _ct  -> container
    -- _bts -> butões
    -- _bt  -> butão
 
    tipo = _bt você precisar definir os choices e os butões das questões você pode coloca dentro "data" assim ficaria mais e pode customizar os butões
    Exemplo de Uso = 
    "data": {
            "container_render": `
           

                 <div class="pagina-tipo-atividade animation">

                    <button class="btn-atividades-questoes btn btn-primary" data-h5pjsonpath="MultiChoice_1" onclick="abrirModalAtividade(this)">Questão 1</button>

                    <button class="btn-atividades-questoes btn btn-primary" data-h5pjsonpath="MultiChoice_2" onclick="abrirModalAtividade(this)">Questão 2</button>

                    <button class="btn-atividades-questoes btn btn-primary" data-h5pjsonpath="MultiChoice_3" onclick="abrirModalAtividade(this)">Questão 3</button>

                </div>
    `,

    
    **************************************************************************************************************************************************

    tipo = _ct você precisa definir os choiser no propio container dentro do vc pode somente criar uma variação para as questões eles não vao ser exibidas
    dentro da modal mais sim no propio container.
    Exemplo de Uso = 

    const questoes = [
        "MultiChoice_1",
        "MultiChoice_2",
        "MultiChoice_3"
    ]

    dentro de Data:
     "data": {
            "container_render": `
        
                <div class="pagina-tipo-atividade animation">

                    <div class="container-content-atividade">
                        <h6 class="container-question-nome text-center d-flex align-items-center justify-content-center gap-1"></h6>
                        <div class="container-content-atividade-all">
                            <div class="container-body-atividade"></div>
                        </div>
                    </div>
                    
                </div>
        `,

    tipo = _ob você precisa configurar um botão para abrir os 1 ou mais questões do conteudo na modal 
    Exemplo de Uso = 
    "data": {
        "container_render": `
           
            <div class="pagina-tipo-atividade animation">

                <button class="btn-atividades-questoes btn btn-primary" onclick="abrirModalAtividade('_ob',this)">Questão 3</button>       

            </div>
        `,
    }

        

*/

function abrirModalAtividade(tipo = "_bt", button = []) {
    if (tipo === "_ct") {

        const questoes = [
            {
                questao: "Questão 1",
                path: "MultiChoice_1",
            },
            {
                questao: "Questão 2",
                path: "MultiChoice_2",
            },
            {
                questao: "Questão 3",
                path: "MultiChoice_3",
            }
        ];

        let currentIndex = 0; // Índice inicial da questão

        const containerAtividadeRender = document.querySelector(".container-body-atividade");
        const ContainerNameAtividade = document.querySelector(".container-question-nome");

        // Função para atualizar o conteúdo da questão e do H5P
        function atualizarQuestao(index) {
            // Atualiza o nome da questão no título


            ContainerNameAtividade.innerHTML = `
        <button class="btn-prev-atividade">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" /></svg>
        </button>

        <span class="bg-primary px-3 py-1 rounded text-white">${questoes[index].questao}</span>

        <button class="btn-next-atividade">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" /></svg>
        </button>
        `;

            // Limpa e atualiza o conteúdo H5P no `h5p-container`
            containerAtividadeRender.innerHTML = `<div id="h5p-container" style="display: block;"></div>`;

            const h5pJsonPath = `./plugins/h5p/h5p-folder/${questoes[index].path}`;

            new H5P(document.getElementById("h5p-container"), {
                h5pJsonPath: h5pJsonPath,
                frameJs: './plugins/h5p/core/frame.bundle.js',
                frameCss: './plugins/h5p/core/styles/h5p.css'
            });

            // Configura os eventos de navegação após atualizar o conteúdo
            document.querySelector(".btn-next-atividade").onclick = avancarQuestao;
            document.querySelector(".btn-prev-atividade").onclick = retrocederQuestao;

            processarIframeH5P()
        }

        class ClassConfigAnimation {
            constructor(config) {
                this.config = config;
            }

            // Método para verificar se a animação está ativada e retornar a classe de animação
            getAnimationClass(direction) {
                const animationConfig = this.config.find(item => item[direction] && item._ativar);
                return animationConfig ? animationConfig[direction] : null;
            }
        }

        // Configuração das animações
        const classConfig = new ClassConfigAnimation([
            {
                _ativar: true,
                _next: "animate__animated animate__zoomIn animate__slow"
            },
            {
                _ativar: true,
                _prev: "animate__animated animate__zoomIn animate__slow"
            }
        ]);

        // Função para aplicar a animação se estiver ativada
        function aplicarAnimacao(element, animacao) {
            if (animacao) {
                element.classList.add(...animacao.split(" "));
                element.addEventListener("animationend", () => {
                    element.classList.remove(...animacao.split(" "));
                }, { once: true });
            }
        }

        // Funções de navegação entre questões
        function avancarQuestao() {
            if (currentIndex < questoes.length - 1) {
                const animacao = classConfig.getAnimationClass('_next');
                aplicarAnimacao(containerAtividadeRender, animacao);

                currentIndex++;
                atualizarQuestao(currentIndex);
            }
        }

        function retrocederQuestao() {
            if (currentIndex > 0) {
                const animacao = classConfig.getAnimationClass('_prev');
                aplicarAnimacao(containerAtividadeRender, animacao);

                currentIndex--;
                atualizarQuestao(currentIndex);
            }
        }

        // Inicializa a primeira questão com base no botão clicado
        atualizarQuestao(currentIndex);

    }
    else if (tipo === "_bts") {
        const modal = document.getElementById("atividadeModal");
        modal.style.display = "flex";

        // Obtenha todos os botões de questões e crie um array com os caminhos data-h5pjsonpath
        const questionsBtn = Array.from(document.querySelectorAll(".btn-atividades-questoes"));
        const questoes = questionsBtn.map(btn => btn.getAttribute("data-h5pjsonpath"));

        // Encontra o índice inicial com base no botão clicado
        let currentIndex = questionsBtn.indexOf(button);

        const modalBodyAtividade = document.querySelector(".modal-body-atividade");
        const ContainerName = document.querySelector(".question-nome");

        // Função para atualizar o conteúdo da questão e do H5P
        function atualizarQuestao(index) {
            // Atualiza o nome da questão no título

            ContainerName.innerHTML = `
        <button class="btn-prev-atividade">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" /></svg>
        </button>

        <span class="bg-primary px-3 py-1 rounded text-white">${questionsBtn[index].innerHTML}</span>

        <button class="btn-next-atividade">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" /></svg>
        </button>
        `;

            // Limpa o conteúdo do `h5p-container` e atualiza com o novo conteúdo H5P
            modalBodyAtividade.innerHTML = `<div id="h5p-container" style="display: block;"></div>`;

            const h5pJsonPath = `./plugins/h5p/h5p-folder/${questoes[index]}`;

            // Carrega o novo conteúdo H5P no `h5p-container`
            new H5P(document.getElementById("h5p-container"), {
                h5pJsonPath: h5pJsonPath,
                frameJs: './plugins/h5p/core/frame.bundle.js',
                frameCss: './plugins/h5p/core/styles/h5p.css'
            });

            // Configura os eventos de navegação após atualizar o conteúdo
            document.querySelector(".btn-next-atividade").onclick = avancarQuestao;
            document.querySelector(".btn-prev-atividade").onclick = retrocederQuestao;

            processarIframeH5P();
        }


        class ClassConfigAnimation {
            constructor(config) {
                this.config = config;
            }

            // Método para verificar se a animação está ativada e retornar a classe de animação
            getAnimationClass(direction) {
                const animationConfig = this.config.find(item => item[direction] && item._ativar);
                return animationConfig ? animationConfig[direction] : null;
            }
        }

        // Configuração das animações
        const classConfig = new ClassConfigAnimation([
            {
                _ativar: true,
                _next: "animate__animated animate__zoomIn animate__slow"
            },
            {
                _ativar: true,
                _prev: "animate__animated animate__zoomIn animate__slow"
            }
        ]);

        // Função para aplicar a animação se estiver ativada
        function aplicarAnimacao(element, animacao) {
            if (animacao) {
                element.classList.add(...animacao.split(" "));

                element.addEventListener("animationend", () => {
                    element.classList.remove(...animacao.split(" "));
                }, { once: true });
            }
        }

        // Funções de navegação entre questões
        function avancarQuestao() {
            if (currentIndex < questoes.length - 1) {
                const animacao = classConfig.getAnimationClass('_next');
                aplicarAnimacao(modalBodyAtividade, animacao);

                currentIndex++;
                atualizarQuestao(currentIndex);
            }
        }

        function retrocederQuestao() {
            if (currentIndex > 0) {
                const animacao = classConfig.getAnimationClass('_prev');
                aplicarAnimacao(modalBodyAtividade, animacao);

                currentIndex--;
                atualizarQuestao(currentIndex);
            }
        }


        // Inicializa a primeira questão com base no botão clicado
        atualizarQuestao(currentIndex);

        // Configura o fechamento do modal
        const closeBtn = document.getElementsByClassName("close-atividade")[0];
        closeBtn.onclick = () => { modal.style.display = "none"; };
        window.onclick = (event) => {
            if (event.target === modal) modal.style.display = "none";
        };

    }
    if (tipo === "_bt") {
        const modal = document.getElementById("atividadeModal");
        modal.style.display = "flex";

        // Define o conjunto de questões
        const questoes = [
            { questao: "Questão 1", path: "MultiChoice_1" },
            { questao: "Questão 2", path: "MultiChoice_2" },
            { questao: "Questão 3", path: "MultiChoice_3" }
        ];

        let currentIndex = 0; // Índice inicial da questão

        const modalBodyAtividade = document.querySelector(".modal-body-atividade");
        const ContainerName = document.querySelector(".question-nome");

        // Função para atualizar a questão e o conteúdo H5P
        function atualizarQuestao(index) {
            // Atualiza o nome da questão no título
            ContainerName.innerHTML = `
                <button class="btn-prev-atividade">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 12H8" />
                        <path d="m12 8-4 4 4 4" /></svg>
                </button>

                <span class="bg-primary px-3 py-1 rounded text-white">${questoes[index].questao}</span>

                <button class="btn-next-atividade">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                        <path d="m12 16 4-4-4-4" /></svg>
                </button>
            `;

            // Limpa o conteúdo do `h5p-container` e atualiza com o novo conteúdo H5P
            modalBodyAtividade.innerHTML = `<div id="h5p-container" style="display: block;"></div>`;

            const h5pJsonPath = `./plugins/h5p/h5p-folder/${questoes[index].path}`;

            // Carrega o novo conteúdo H5P no `h5p-container`
            new H5P(document.getElementById("h5p-container"), {
                h5pJsonPath: h5pJsonPath,
                frameJs: './plugins/h5p/core/frame.bundle.js',
                frameCss: './plugins/h5p/core/styles/h5p.css'
            });

            // Configura os eventos de navegação após atualizar o conteúdo
            document.querySelector(".btn-next-atividade").onclick = avancarQuestao;
            document.querySelector(".btn-prev-atividade").onclick = retrocederQuestao;

            processarIframeH5P();
        }

        // Configuração das animações
        class ClassConfigAnimation {
            constructor(config) {
                this.config = config;
            }

            getAnimationClass(direction) {
                const animationConfig = this.config.find(item => item[direction] && item._ativar);
                return animationConfig ? animationConfig[direction] : null;
            }
        }

        const classConfig = new ClassConfigAnimation([
            { _ativar: true, _next: "animate__animated animate__zoomIn animate__slow" },
            { _ativar: true, _prev: "animate__animated animate__zoomIn animate__slow" }
        ]);

        function aplicarAnimacao(element, animacao) {
            if (animacao) {
                element.classList.add(...animacao.split(" "));
                element.addEventListener("animationend", () => {
                    element.classList.remove(...animacao.split(" "));
                }, { once: true });
            }
        }

        // Funções de navegação entre questões
        function avancarQuestao() {
            if (currentIndex < questoes.length - 1) {
                const animacao = classConfig.getAnimationClass('_next');
                aplicarAnimacao(modalBodyAtividade, animacao);

                currentIndex++;
                atualizarQuestao(currentIndex);
            }
        }

        function retrocederQuestao() {
            if (currentIndex > 0) {
                const animacao = classConfig.getAnimationClass('_prev');
                aplicarAnimacao(modalBodyAtividade, animacao);

                currentIndex--;
                atualizarQuestao(currentIndex);
            }
        }

        // Inicializa a primeira questão
        atualizarQuestao(currentIndex);

        // Configura o fechamento do modal
        const closeBtn = document.getElementsByClassName("close-atividade")[0];
        closeBtn.onclick = () => { modal.style.display = "none"; };
        window.onclick = (event) => {
            if (event.target === modal) modal.style.display = "none";
        };
    }
    else {
        console.error("Sem configuração definidas Leia o manual de instrução...")
    }
}







// Verifica se o documento já está pronto ou aguarda a renderização completa


async function processarIframeH5P() {
    const h5pContainerWrapper = document.querySelector(".h5p-iframe-wrapper");

    if (h5pContainerWrapper) {
        // Procurar elemento iframe
        const iframeSearch = h5pContainerWrapper.querySelector("iframe");

        if (iframeSearch) {
            iframeSearch.addEventListener("load", () => {
                const iframe = iframeSearch;
                const maxRetries = 10; // Número máximo de tentativas
                let attempt = 0;

                const verificarConteudoIframe = setInterval(() => {
                    attempt++;
                    // console.log(`Tentativa ${attempt} de acessar o conteúdo do iframe`);

                    // Verifica se o iframe está disponível e acessível
                    if (iframe && iframe.contentWindow) {
                        const fluxoIframe = iframe.contentDocument || iframe.contentWindow.document;

                        if (fluxoIframe) {
                            const container = fluxoIframe.querySelector(".h5p-question-content");

                            if (container) {
                                clearInterval(verificarConteudoIframe); // Interrompe o intervalo ao encontrar o elemento
                                const listaMulti = container.querySelector("ul");
                                // console.log(listaMulti)

                                // Função para organizar a lista responsivamente
                                function organizarListaResponsiva() {
                                    if (!listaMulti) {
                                        console.log("Lista não encontrada.");
                                        return;
                                    }

                                    const itens = Array.from(listaMulti.children);
                                    let colunas;

                                    // Ajusta o número de colunas baseado na quantidade de itens
                                    if (itens.length === 4) {
                                        colunas = 2;
                                    } else if (itens.length === 5) {
                                        colunas = 3;
                                    } else {
                                        colunas = 3;
                                    }

                                    // Cria um novo contêiner para organizar as colunas
                                    const novoContainer = document.createElement("div");
                                    novoContainer.className = "w-100 h-100";
                                    novoContainer.style.display = "flex";
                                    novoContainer.style.flexWrap = "wrap";
                                    novoContainer.style.gap = "5px";

                                    // Remove os itens da lista original
                                    listaMulti.innerHTML = '';

                                    const numeroColunas = Math.ceil(itens.length / colunas);
                                    let contadorItens = 0;

                                    for (let i = 0; i < numeroColunas; i++) {
                                        let itensNestaColuna;
                                        if (itens.length === 5 && i === 0) {
                                            itensNestaColuna = 3;
                                        } else {
                                            itensNestaColuna = colunas;
                                        }

                                        const colunaAtual = document.createElement("ul");
                                        colunaAtual.style.flex = "1";
                                        colunaAtual.style.padding = "0";
                                        colunaAtual.style.listStyleType = "none";

                                        for (let j = 0; j < itensNestaColuna; j++) {
                                            if (contadorItens >= itens.length) break;
                                            const item = itens[contadorItens];
                                            item.style.width = "100%";
                                            colunaAtual.appendChild(item);
                                            contadorItens++;
                                        }

                                        novoContainer.appendChild(colunaAtual);
                                    }

                                    listaMulti.appendChild(novoContainer);
                                }

                                organizarListaResponsiva();
                            } else {
                                console.log("Elemento .h5p-question-content ainda não encontrado dentro do iframe.");
                            }
                        } else {
                            console.log("Não foi possível acessar o conteúdo do iframe.");
                        }
                    }

                    // Interrompe o intervalo após exceder o número de tentativas
                    if (attempt >= maxRetries) {
                        clearInterval(verificarConteudoIframe);
                        // console.log("Tempo limite excedido. Não foi possível encontrar o elemento .h5p-question-content.");
                    }
                }, 1); // Verifica a cada 500ms
            });
        } else {
            console.log("Elemento iframe não encontrado dentro do wrapper.");
        }
    } else {
        console.log("Iframe H5P não renderizado ainda...");
    }
}


