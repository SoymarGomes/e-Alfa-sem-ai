

async function enviar__anotacoes_ai_eva(event = undefined) {
    try {
        console.log(event)
        typeof event !== "undefined" ? event.stopPropagation() : undefined;

        const modalBody = document.querySelector('#vizioonModal .vizioonModal-body');
        if (!modalBody) {
            console.error('Modal body não encontrado');
            return;
        }

        const procurarTexto = modalBody.querySelector(".resumoTesseractImg");
        // console.log( procurarTexto)

        // Cria a anotação
        await createAnnotation(procurarTexto.innerText);

        // Fecha o modal
        const modal = document.getElementById('vizioonModal');
        if (modal) {
            // Se você estiver usando Bootstrap
            if (typeof bootstrap !== 'undefined') {
                const bsModal = bootstrap.Modal.getInstance(modal);
                if (bsModal) {
                    bsModal.hide();
                }
            } else {
                // Fechamento manual do modal
                modal.style.display = 'none';
                // Remove a classe que mostra o backdrop (fundo escuro)
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
                // Remove o backdrop se existir
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
            }
        }
        
        // filterAnnotations("t:soluto1");

    } catch (error) {
        console.error('Erro ao enviar anotação:', error);
    }
}


async function abrirImagenVizualizador(url = ""){

    if(url === ""){
        console.info("Não foi possivel Encontrar o Caminho da imagen para o vizualizador...")
        return
    };


    try {
        const modalBody = document.querySelector('#vizioonModal .vizioonModal-body');
        if (!modalBody) {
            console.error('Modal body não encontrado');
            return;
        }

        // Fecha o modal
        const modal = document.getElementById('vizioonModal');
        if (modal) {
            // Se você estiver usando Bootstrap
            if (typeof bootstrap !== 'undefined') {
                const bsModal = bootstrap.Modal.getInstance(modal);
                if (bsModal) {
                    bsModal.hide();
                }
            } else {
                // Fechamento manual do modal
                modal.style.display = 'none';
                // Remove a classe que mostra o backdrop (fundo escuro)
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
                // Remove o backdrop se existir
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
            }
        }

        abrirZoomist(url);

    } catch (error) {
        console.error('Erro ao enviar anotação:', error);
    }
}

async function abrirModal___TEST() {
    try {

        const ferramentasButtonsModalTeseract = `
        <div class="d-flex justify-content-center align-items-center gap-2 w-100">

                <button type="button" onclick="enviar__anotacoes_ai_eva(event)" class="btn btn-success eva_button____lista" style="margin-top:0 !important;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note">
                    <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/>
                    </svg>
                </button>
                <p class="bg-dark h-100 p-2 rounded text-light d-flex align-items-center "> Resumo da imagen <button class="btn btn-link bg-dark" onclick="abrirImagenVizualizador()"><span class="text-light border border-1 border-light py-1 px-2 rounded d-flex justify-content-center align-items-center"><i class=" bi-image"></i></span></button></p> 
        
        </div>
    `;

        vizioonModal(
            `${ferramentasButtonsModalTeseract}`,
            `   
            <div class="container d-flex flex-column justify-content-center align-items-center">
                
                    <div class="row justify-content-center gap-3 animationTesseract ">


                        Teste Modal

                    </div>

            </div>
         `,
            ``, // <button type="button" class="btn btn-success text-light resumo__eva_button____lista d-flex align-items-center" onclick="openQuestionEva('.animationIngredientes')">Gera Resumo da Lista com Eva <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></button>
            ".buttonIngredientes",
            ["modal-fullscreen"],
            [
                {
                    _class: ".animationTesseract",
                    _animation: "animate__animated animate__backInDown"
                },
                {
                    _class: ".warnAnimation",
                    _animation: "animate__animated animate__flash animate__infinite animate__slow"
                },
            ],
            true
        );
    

    } catch (error) {
        console.error('Erro ao enviar anotação:', error);
    }
}

// abrirModal___TEST();

async function TesseractIMG(imgsAndPropts = []) {


    // Validate input
    if (!Array.isArray(imgsAndPropts) || imgsAndPropts.length === 0) {
        console.error('Invalid input: Expected a non-empty array of image objects');
        return;
    }

    const configuracaoData = await global__Config();
    const config = configuracaoData.ceumaAI;
    const { contexto } = config;

    // Process each image
    imgsAndPropts.forEach((imgConfig, index) => {
        try {
            // Select image element
            const imgElement = document.querySelector(imgConfig._class);

            // console.log(imgElement)

            
            const ferramentasButtonsModalTeseract = `
                <div class="d-flex justify-content-center align-items-center gap-2 w-100">

                        <button type="button" onclick="enviar__anotacoes_ai_eva(event)" class="btn btn-success eva_button____lista" style="margin-top:0 !important;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note">
                            <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/>
                            </svg>
                        </button>
                        <p class="bg-dark h-100 p-2 rounded text-light d-flex align-items-center "> Resumo da imagen <button class="btn btn-link bg-dark" onclick="abrirImagenVizualizador('${imgElement || !imgConfig._btn ? imgElement.src : imgConfig._link}')"><span class="text-light border border-1 border-light py-1 px-2 rounded d-flex justify-content-center align-items-center"><i class=" bi-image"></i></span></button></p> 
                
                </div>
            `;

            if (imgElement || !imgConfig._btn) {
                if (!imgElement) {
                    console.error(`No image found for selector: ${imgConfig._class}`);
                    return;
                }

                // Check if already processed
                if (imgElement.dataset.tesseractProcessed) return;

                // Create container for relative positioning
                const containerDiv = document.createElement('div');
                containerDiv.style.position = 'relative';
                containerDiv.style.display = 'inline-block';

                // Wrap the image with the container
                imgElement.parentNode.insertBefore(containerDiv, imgElement);
                containerDiv.appendChild(imgElement);

                // Create overlay button
                const overlayButton = document.createElement('button');
                overlayButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>`;
                overlayButton.className = `toggle-tesseract toggle-tesseract-${index}`;

                // Add button to the container
                containerDiv.appendChild(overlayButton);

                // Add hover events
                containerDiv.addEventListener('mouseenter', () => {
                    overlayButton.style.opacity = '1';
                });

                containerDiv.addEventListener('mouseleave', () => {
                    overlayButton.style.opacity = '0';
                });

                // Mark as processed to avoid multiple renderings
                imgElement.dataset.tesseractProcessed = 'true';

                // Add click event
                overlayButton.addEventListener('click', async () => {
                    overlayButton.style.opacity = '1';
                    containerDiv.addEventListener('mouseleave', () => {
                        overlayButton.style.opacity = '1';
                    });

                    try {
                        // Disable button during processing
                        overlayButton.disabled = true;
                        overlayButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>';

                        // Perform OCR
                        const { data: { text } } = await Tesseract.recognize(
                            imgElement.src,
                            imgConfig.idioma || 'por', // Default to Portuguese
                            {}
                        );

                        // console.log(text)

                        // console.log(`${imgConfig.prompt} para ${text}`)

                        resumoAI(`${imgConfig.prompt} para ${text}`, contexto, imgConfig.prompt, "Estudante Leigo", 10, "2 paragrafos", null, null, false).then(resumo => {
                            soundBipe();

                            vizioonModal(
                                `${ferramentasButtonsModalTeseract}`,
                                `   
                                <div class="container d-flex flex-column justify-content-center align-items-center">
                                    
                                        <div class="row justify-content-center gap-3 animationTesseract ">
    
                                            ${resumo ?
                                    `
                                               <div class="resumoTesseractImg">
                                                 ${marked.parse(resumo)}
                                               </div>

                                                 <div class="alert alert-warning" role="alert">

                                                    <div class="d-flex flex-column align-items-center justify-content-center"
                                                        style="padding:0.3rem;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="lucide lucide-brain-circuit">
                                                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                                            <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                                                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                                            <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                                            <path d="M12 13h4" />
                                                            <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                                                            <path d="M12 8h8" />
                                                            <path d="M16 8V5a2 2 0 0 1 2-2" />
                                                            <circle cx="16" cy="13" r=".5" />
                                                            <circle cx="18" cy="3" r=".5" />
                                                            <circle cx="20" cy="21" r=".5" />
                                                            <circle cx="20" cy="8" r=".5" /></svg>
                                                        <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser
                                                            incorretas ou inadequadas.</p>
                                                            
                                                        </div>
                                                </div>
                                        
                                            
                                            `
                                    :

                                    `
                                                <div class="alert alert-warning" role="alert">
                                                    <h4 class="alert-heading">Sobre ${reduzirTexto(text, 10, 10)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="lucide lucide-sparkles">
                                                            <path
                                                                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                                            <path d="M20 3v4" />
                                                            <path d="M22 5h-4" />
                                                            <path d="M4 17v2" />
                                                            <path d="M5 18H3" /></svg>
                                                    </h4>
                                                    <p> ${marked.parse(`${resumo ? resumo : "Opa, aguarde alguns minutos. Se estiver tendo problemas, entre em contato com <a href='#'>@suporte.cead@ceuma.br </a>"}`)}😉. <code>Servidor Indisponível</code> </p>
                                                    <hr>
                                                    <div class="d-flex flex-column align-items-center justify-content-center"
                                                        style="padding:0.3rem;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="lucide lucide-brain-circuit">
                                                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                                            <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                                                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                                            <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                                            <path d="M12 13h4" />
                                                            <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                                                            <path d="M12 8h8" />
                                                            <path d="M16 8V5a2 2 0 0 1 2-2" />
                                                            <circle cx="16" cy="13" r=".5" />
                                                            <circle cx="18" cy="3" r=".5" />
                                                            <circle cx="20" cy="21" r=".5" />
                                                            <circle cx="20" cy="8" r=".5" /></svg>
                                                        <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser
                                                            incorretas ou inadequadas.</p>
                                                        
                                                    </div>
                                                </div>
                                            
                                            `
                                }
    
                                            
    
                                        </div>
    
                                </div>
                             `,
                                ``, // <button type="button" class="btn btn-success text-light resumo__eva_button____lista d-flex align-items-center" onclick="openQuestionEva('.animationIngredientes')">Gera Resumo da Lista com Eva <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></button>
                                ".buttonIngredientes",
                                ["modal-fullscreen"],
                                [
                                    {
                                        _class: ".animationTesseract",
                                        _animation: "animate__animated animate__backInDown"
                                    },
                                    {
                                        _class: ".warnAnimation",
                                        _animation: "animate__animated animate__flash animate__infinite animate__slow"
                                    },
                                ],
                                true
                            );

                            overlayButton.style.opacity = '0';
                            containerDiv.addEventListener('mouseleave', () => {
                                overlayButton.style.opacity = '0';
                            });

                            // Restore button
                            overlayButton.disabled = false;
                            overlayButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>`;
                        });
                    } catch (error) {
                        console.error('OCR Error:', error);
                        overlayButton.disabled = false;
                        overlayButton.textContent = 'Error';
                    }
                });
            } else {
                console.warn("Converting Operation...");
                const buttonActiver = document.querySelector(imgConfig._btn);

                if (!buttonActiver || !imgConfig._link) {
                    console.error(`No image found for selector: ${imgConfig._link}`);
                    return;
                }

                imgsAndPropts.forEach((imgConfig, index) => {
                    try {
                        // Selecionar ou criar os botões
                        let buttons = document.querySelectorAll(`${imgConfig._btn.join(', ')}`);
                        if (buttons.length === 0) {
                            buttons = imgConfig._btn.map(selector => {
                                const button = document.createElement('button');
                                button.classList.add(`buttonIngredientes-${index}`);
                                button.textContent = 'Resumir';
                                document.body.appendChild(button);
                                return button;
                            });
                        }

                        // Adicionar evento de clique aos botões
                        buttons.forEach(button => {
                            button.addEventListener('click', async () => {

                                try {
                                    // Desativar o botão durante o processamento
                                    button.disabled = true;
                                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>';

                                    // Realizar OCR e exibir o resumo na modal
                                    const { data: { text } } = await Tesseract.recognize(
                                        imgConfig._link,
                                        imgConfig.idioma || 'por',
                                        {}
                                    );

                                    resumoAI(`${imgConfig.prompt} para ${text}`, contexto, "completo", "Estudante Leigo", 10, "completo", null, null, false).then(resumo => {
                                        soundBipe();

                                        vizioonModal(
                                            `${ferramentasButtonsModalTeseract}`,
                                            `   
                                            <div class="container d-flex flex-column justify-content-center align-items-center">
                                                
                                                    <div class="row justify-content-center gap-3 animationTesseract ">
                
                                                        ${resumo ?
                                                `
                                                            <div class="resumoTesseractImg">
                                                                ${marked.parse(resumo)}
                                                            </div>

                                                                <div class="alert alert-warning" role="alert">

                                                                    <div class="d-flex flex-column align-items-center justify-content-center"
                                                                        style="padding:0.3rem;">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                            class="lucide lucide-brain-circuit">
                                                                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                                                            <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                                                                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                                                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                                                            <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                                                            <path d="M12 13h4" />
                                                                            <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                                                                            <path d="M12 8h8" />
                                                                            <path d="M16 8V5a2 2 0 0 1 2-2" />
                                                                            <circle cx="16" cy="13" r=".5" />
                                                                            <circle cx="18" cy="3" r=".5" />
                                                                            <circle cx="20" cy="21" r=".5" />
                                                                            <circle cx="20" cy="8" r=".5" /></svg>
                                                                        <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser
                                                                            incorretas ou inadequadas.</p>
                                                                            
                                                                        </div>
                                                                </div>
                                                        
                                                        `
                                                :

                                                `
                                                            <div class="alert alert-warning" role="alert">
                                                                <h4 class="alert-heading">Sobre ${reduzirTexto(text, 10, 10)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" class="lucide lucide-sparkles">
                                                                        <path
                                                                            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                                                        <path d="M20 3v4" />
                                                                        <path d="M22 5h-4" />
                                                                        <path d="M4 17v2" />
                                                                        <path d="M5 18H3" /></svg>
                                                                </h4>
                                                                <p> ${marked.parse(`${resumo ? resumo : "Opa, aguarde alguns minutos. Se estiver tendo problemas, entre em contato com <a href='#'>@suporte.cead@ceuma.br </a>"}`)}😉. <code>Servidor Indisponível</code> </p>
                                                                <hr>
                                                                <div class="d-flex flex-column align-items-center justify-content-center"
                                                                    style="padding:0.3rem;">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                        class="lucide lucide-brain-circuit">
                                                                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                                                        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                                                                        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                                                        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                                                        <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                                                        <path d="M12 13h4" />
                                                                        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                                                                        <path d="M12 8h8" />
                                                                        <path d="M16 8V5a2 2 0 0 1 2-2" />
                                                                        <circle cx="16" cy="13" r=".5" />
                                                                        <circle cx="18" cy="3" r=".5" />
                                                                        <circle cx="20" cy="21" r=".5" />
                                                                        <circle cx="20" cy="8" r=".5" /></svg>
                                                                    <p style="font-size:0.8rem;">As informações são geradas por inteligência artificial. Algumas respostas podem ser
                                                                        incorretas ou inadequadas.</p>
                                                                    
                                                                </div>
                                                            </div>
                                                        
                                                        `
                                            }
                
                                                        
                
                                                    </div>
                
                                            </div>
                                         `,
                                            ``, // <button type="button" class="btn btn-success text-light resumo__eva_button____lista d-flex align-items-center" onclick="openQuestionEva('.animationIngredientes')">Gera Resumo da Lista com Eva <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></button>
                                            ".buttonIngredientes",
                                            ["modal-fullscreen"],
                                            [
                                                {
                                                    _class: ".animationTesseract",
                                                    _animation: "animate__animated animate__backInDown"
                                                },
                                                {
                                                    _class: ".warnAnimation",
                                                    _animation: "animate__animated animate__flash animate__infinite animate__slow"
                                                },
                                            ],
                                            true
                                        );

                                        // Restore button
                                        button.disabled = false;
                                        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>`;
                                    });
                                } catch (error) {
                                    console.error('Erro de OCR:', error);
                                    button.disabled = false;
                                    button.textContent = 'Erro';
                                }
                            });
                        });
                    } catch (error) {
                        console.error('Erro no processamento da imagem:', error);
                    }
                });

            }
        } catch (error) {
            console.error('Error processing the image:', error);
        }
    });
}


// // Exemplo de uso
// const imgs = [
//     {
//         "_class": ".img1",
//         "prompt": "Explique cada 1 desses itens",
//         "idioma": "por",
//         "buffer": () => {
//             const x = [8, 8];
//             return x[0] >> x[1]
//         },
//     }
// ];

// // Garantir que o Tesseract.js esteja carregado antes de chamar
// TesseractIMG(imgs);

