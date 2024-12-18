const variantes_globais = {
    Toolbar: function () {
        // console.log("Toolbar");

        return `
    
                <div id="toolbar" style="display: none; position: absolute;">
                    <div class="toolbar-container">
                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                            <div class="cores-destaque">
                                <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                <span class="corTexto" style="background-color: #198754;" data-cor="#198754" data-color="white"></span>
                                <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd" data-color="white"></span>
                                <button class="toolbar-button" id="limpar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-eraser">
                                        <path
                                            d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                                        <path d="M22 21H7" />
                                        <path d="m5 11 9 9" /></svg>
                                    Limpar
                                </button>

                            </div>
                        </div>
                        <button class="toolbar-button" id="resumo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-file-text">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" /></svg>
                            Resumo
                        </button>
                        <button class="toolbar-button" id="destacar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-pencil">
                                <path
                                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                <path d="m15 5 4 4" /></svg>
                            Destacar
                        </button>
                        <button class="toolbar-button" id="dicionario-toolbar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-text-search">
                                <path d="M21 6H3" />
                                <path d="M10 12H3" />
                                <path d="M10 18H3" />
                                <circle cx="17" cy="15" r="3" />
                                <path d="m21 19-1.9-1.9" /></svg>
                            Dicionário
                        </button>

                    </div>
                </div>
        
        `
    },

    Debug: function () {
        console.info(`
        ================ Toolbar ===============

        ${this.Toolbar()}

        ========================================
        `)
    }
};

