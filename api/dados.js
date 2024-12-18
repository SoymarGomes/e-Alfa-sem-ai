const _prefixAssets = "./assets/";
const _prefixAssetsIcons = "./assets/icons/";
const _prefixUnidade = "./assets/unidade/";
const _prefixConfJS = "./conf/js/"

/*
    Exemplos de uso
    FILTRAR PÁGINA = ( CTRL + F ) 
    -----------> pg[1]
    -----------> cm[inicio]

*/

/**
 * @type (Object)
*/

const configuracoesIntraGlobais = {
    "configuracoesSliderAll":{
        "procurar_slider":{
            "_sliderClass" : ".glider-slide",
            "_attrActiver" : "data-gslide"
        },
    }
}

/**
 * @type (Object)
*/

const api = [

    // PÁGINA 1 INICIAL 
    /*
        FILTRO
            ------> pg[1]
            ------> CM[inicio]
        AQUI ÉA PÁGINA DE INICIO AO CONTEUDO 

    */
    {
        "pagina": 1,
        "nome_page": `Início`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `       

                <!-- Container do texto animado -->
                <div id="text-container-capa">
                    <div class="animated-text">EXERCÍCIO FÍSICO PERSONALIZADO</div>
                    <div id="underline"></div>
                    <div id="second-text">Orientações básicas para a prescrição de exercícios resistidos</div>
                    <button id="animated-button" onclick="iniciar()">Início</button>
                     <div id="second-text" class="text-light" style="font-size:1rem;margin-top:1rem;">Bruno Bavaresco Gambassi</div>
                </div>

                <!-- Imagem animada -->
                <div id="animated-image"></div>

                <!-- Imagem -->
                <div id="image-capaOverlay"></div>
                <!-- Container do texto animado -->

            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "beforeend",
                "src": "./conf/js/pagina1.js"
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },

                    "Podcast": {
                        "ativa": true,
                        "html": `
                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                        </button>
                        `
                    },

                    "Ferramentas": {
                        "ativa": false,
                        "html": `
                            <button class="btn-ferramentas "  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="maximize-2"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                            <button vizioon-tip="Podcast" vizioon-attr="d-none d-md-block" vizioon-posicao="gbottom">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button vizioon-tip="Videoaula" vizioon-attr="d-none d-md-block" vizioon-posicao="gbottom">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas" aria-label="close" vizioon-attr="d-none d-md-block" vizioon-tip="Ferramentas" vizioon-posicao="gbottom">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                        `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                        `,
                        "acionador": `

                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                <div class="cores-destaque-inline-btn">
                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                        <button class="toolbar-button" id="limpar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                            Limpar
                                        </button>
                                 </div>
                            </div>

                        `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                        `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                        `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                            <button><i data-lucide="download"></i>Download</button>
                        `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                        `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                              <button><i data-lucide="x" id="close_box"></i></button>
                        `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                "fundo": ":#00000000",
                // "icones": "rgb(0, 110, 201)"
                "imagemFundo": {
                    "ativar": true,
                    "Capa": "url(../assets/fundo.gif)",
                    "subCapa": "url(../assets/capaOverlay.png)",
                    "posicaoY": "bottom 1.8%",
                    "posicaoX": "left 0.5%",
                    "tamanho": "100%",
                }
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {},
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logobranca1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],

        }
    },

    // PÁGINA 2 APRESENTACAO UNIDADE
    /*
        FILTRO
            ------> pg[2]
            ------> CM[APRESENTACAO UNIDADE]
        AQUI ÉA PÁGINA DE INTRODUÇÃO AO CONTEUDO 

    */
    {
        "pagina": 2,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound gap-2">
                            <p>Olá, estudante! </p>

                            <p>
                             Nesta unidade, você irá compreender as orientações básicas para a prescrição do treinamento
                             resistido. Esse tema é de grande importância, pois diversos estudos científicos demonstram
                             os benefícios do treinamento resistido tanto para indivíduos saudáveis quanto para pessoas
                             com doenças crônicas. Entre os principais benefícios estão o aumento da massa muscular, a
                             melhora da força e de parâmetros funcionais, além de melhorias na pressão arterial e na
                             rigidez arterial.
                            </p>

                            <p>
                                Ao longo dessa unidade é esperado que você desenvolva ainda mais a competência de
                                diagnosticar os interesses, expectativas e necessidades de pessoas de diferentes
                                populações, a fim de planejar, prescrever, ensinar, orientar, supervisionar, controlar e
                                avaliar programas de atividades físicas, exercícios físicos, esportivos e de lazer.
                            </p>                                          
                        </div> 

                     </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },

                    "Podcast": {
                        "ativa": true,
                        "html": `
                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                        </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>

                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `

                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>

                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                // "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow animate__delay-1s
                `
            }],
            // Animação pra toda Página
            // "animacao_elemento": [{
            //     "elemento": ".animation", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>

                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>

                                    </div>
                                </div>

                           `
                    }
                }
            ]
        }
    },

    // PÁGINA 3 APRESENTACAO UNIDADE - CONTINUACAO
    /*
        FILTRO
            ------> pg[3]
            ------> CM[APRESENTACAO UNIDADE CONTINUACAO]
        AQUI ÉA PÁGINA DE CONTINUACAO DA APRESENTACAO UNIDADE

    */
        {
            "pagina": 3,
            "nome_page": `Apresentação da Unidade`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-imagem",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound gap-2">
                                                                   
                               <p>
                                Nesta unidade, você vai explorar os seguintes tópicos: uma breve história do treinamento
                                resistido, as recomendações básicas voltadas para a hipertrofia muscular e os principais
                                métodos de treinamento resistido.                            </p>
    
                                
                            </div> 
    
                         </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "inserir_estilo_pagina": [{
                    "url": ""
                }],
                "inserir_escript_pagina": [{
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "setas": {
                    // "corSetas": "#fff",
                    // "corFundo": "rgba(255, 255, 255, 0.174)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                // "animacao_elemento": [{
                //     "elemento": ".animation", // 0 | all
                //     "script_animation": `
                //         animate__animated animate__fadeInDown animate__slow
                //     `
                // }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

    // PÁGINA 4 APRESENTACAO UNIDADE - CONTINUACAO
    /*
        FILTRO
            ------> pg[4]
            ------> CM[APRESENTACAO UNIDADE CONTINUACAO]
        AQUI ÉA PÁGINA DE CONTINUACAO DA APRESENTACAO UNIDADE

    */

    {
        "pagina": 4,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">

                            <div class="objetivo-aprendizagem-elemento">
                                <div class="objetivo-aprendizagem-elemento--box">
                                    <img src="${_prefixAssetsIcons}target.png" class="animationTarget" style="top:-6%"/>
                                    <div class="objetivo-aprendizagem-elemento--img-title">
                                        <h1>Objetivos de aprendizagem</h1>
                                    </div>
                                    <ol class="list-group list-group-numbered">
                                        <li class="list-group-item list-group-item-action list-group-item-info d-flex align-items-center">
                                            <p>Conhecer uma breve história do treinamento resistido;
</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info d-flex align-items-center">
                                            <p>Aprender sobre os modelos de periodização;

</p>
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info d-flex align-items-center">
                                            <p>Compreender as recomendações básicas do treinamento resistido direcionado
                                                para a hipertrofia muscular e os métodos de treinamento resistido.</p>                                        </li>                                

                                    </ol>
                                </div>
                            </div>

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": "./conf/css/SaibaMais.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },

                    "Podcast": {
                        "ativa": true,
                        "html": `
                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                        </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>

                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `

                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>

                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                // "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                "tamanho": "10%",
            },
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow animate__delay-1s
                `
            }],
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [
                {
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
                },
                {
                    "elemento": ".animationTarget", // 0 | all
                    "script_animation": `
                    animate__animated animate__backInRight animate__slow
                `
                }
            ],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>

                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>

                                    </div>
                                </div>

                           `
                    }
                }
            ]
        }
    },

    // PÁGINA 5 Breve história do treinamento resistido 
    /*
        FILTRO
            ------> pg[5]
            ------> CM[Breve história do treinamento resistido ]
        AQUI ÉA PÁGINA DE Breve história do treinamento resistido 

    */
    {
        "pagina": 5,
        "nome_page": `Breve história do treinamento resistido `,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">

                            <div class="d-flex flex-column gap-2">
                                <p>
                                    O treinamento resistido ou treinamento de força pode ser definido como tipo de
                                    exercício que exige ações do músculo esquelético contra a oposição de alguma
                                    resistência externa (FLECK; KRAEMER, 2017).
                                </p>
                                <p>
                                    No final do século XIX, o treinamento resistido (musculação) se resumia à prática de
                                    halterofilismo e aos artistas circenses (de SALLES, 2020). Muitas pessoas tinham a
                                    crença de que a musculação podia fazia mal para a saúde e ainda poderia reduzir a
                                    agilidade e velocidade no desempenho desportivo (de SALLES, 2020). Nessa época,
                                    nomes como Eugen Sandow e Charles Atlas, foram fundamentais para a desmistificação
                                    do treinamento resistido (de SALLES, 2020). Eugene Sandow descreveu o Método de
                                    Exaustão (1894), o primeiro na história do treinamento resistido (de SALLES, 2020).
                                </p>
                            </div>

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },

                    "Podcast": {
                        "ativa": true,
                        "html": `
                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                        </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>

                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `

                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>

                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                // "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow animate__delay-1s
                `
            }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>

                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>

                                    </div>
                                </div>

                           `
                    }
                }
            ]
        }
    },

 // PÁGINA 6 Breve história do treinamento resistido - CONTINUACAO 
    /*
        FILTRO
            ------> pg[6]
            ------> CM[Breve história do treinamento resistido - CONTINUACAO ]
        AQUI ÉA PÁGINA DE Breve história do treinamento resistido - CONTINUACAO

    */
        
        {
            "pagina": 6,
            "nome_page": `Breve história do treinamento físico`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
    
                   <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                            <div class="container">
                                <div class="row text-center">
                                    <!-- Texto e imagem lado a lado, centralizados -->
                                    <div class="col-md-8">
                                        <div class="pagina-historia-alimentacao-container-titulo-intro">
                                        <p class="w-100">O crescimento na área do treinamento físico no contexto desportivo ocorreu em paralelo à história dos jogos olímpicos. Veja a apresentação dos seguintes períodos de acordo com DANTAS (2003):</p>
                                        </div>
                                    </div>
    
                                    <!-- Imagem -->
                                    <div class="col-md-4">
                                        <div class="overflow-hidden">
                                            <div class="item-ligthbox-img img-photo-actions position-relative h-100 animationImg" style="border:none;background:none;">
                                                <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0;">
                                                    Adaptado de Kraemer et al. (2017),</p>
                                                <img src="${_prefixUnidade}linhadotempo.png" class="img-fluid rounded mx-auto d-block" style="max-width: 100%; border:none;background: none;" alt="Imagem de alimentação para soldados">
                                                <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": "./conf/css/pagina9.css" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                    `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                            "acionador": `
    
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
    
                                    `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    "titulo": "1rem",
                    // "paragrafos": "1rem",
                    "font_familly": "Lato",
                    // "cor_fonte":"black",
                    // "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
                    },
                    {
                        "elemento": ".animationImg", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeIn animate__slow animate__delay-1s
                    `
                    }
                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 7 Breve história do treinamento resistido - CONTINUACAO 
    /*
        FILTRO
            ------> pg[7]
            ------> CM[Breve história do treinamento resistido - CONTINUACAO ]
        AQUI ÉA PÁGINA DE Breve história do treinamento resistido - CONTINUACAO  

    */
        {
            "pagina": 7,
            "nome_page": `Breve história do treinamento resistido `,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
    
                                <div class="d-flex flex-column gap-2">
                                    <p>
                                        Também a partir da década de 1970, foram conduzidos estudos sobre os efeitos do
                                        TR em parâmetros relacionados a saúde de adolescentes, mulheres, idosos e de
                                        indivíduos com doenças crônicas não transmissíveis (KRAEMER et al., 2017).
                                        Também foi investigado o tema treinamento resitido e hipertrofia muscular
                                        (PRESTES et al., 2016; KRAEMER et al., 2017; SALLES, 2020, SHOENFELD, 2022). Com
                                        essa evolução científica, foi observado que a manipulação das variáveis do
                                        treinamento resistido, pode gerar diferentes adaptações estruturais e funcionais
                                        no organismo (PRESTES et al., 2016; KRAEMER et al., 2017; DE SALLES, 2020,
                                        SHOENFELD, 2022).                                    </p>
                                    
                                </div>
    
                            </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 8 Modelos de periodização  
    /*
        FILTRO
            ------> pg[8]
            ------> CM[Modelos de periodização  ]
        AQUI ÉA PÁGINA DE Modelos de periodização 

    */
        {
            "pagina": 8,
            "nome_page": `Modelos de periodização`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
    
                                <div class="d-flex flex-column gap-2">
                                    <p>
                                        Para prescrever corretamente o treinamento resistido, é essencial que o personal
                                        trainer compreenda o significado de volume e intensidade. O volume refere-se a
                                        elementos como o número de exercícios, séries, repetições, a frequência diária e
                                        semanal de treino. Já a intensidade está relacionada ao peso utilizado (em kg).
                                        Para controlar essa variável, o personal trainer pode utilizar diferentes
                                        métodos, como a porcentagem de uma repetição máxima (%1RM), realizar repetições
                                        até a falha concêntrica, ou aplicar a escala subjetiva de esforço. Segundo
                                        Prestes et al. (2016), é possível aplicar os seguintes modelos de periodização
                                        na prescrição do treinamento resistido: </p>                                    
                                </div>
    
                            </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

 // PÁGINA 9 Modelos de periodização - CONTINUACAO 
    /*
        FILTRO
            ------> pg[9]
            ------> CM[Modelos de periodização - CONTINUACAO ]
        AQUI ÉA PÁGINA DE Modelos de periodização - CONTINUACAO 

    */
        {
            "pagina": 9,
            "nome_page": `Modelos de periodização`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
    
                            <div class="pagina-tipo-texto animation">
        
                                    <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                        <div class="d-flex flex-column gap-2">
                            
    
                                        <div class="container my-4 p-4 animate-info rounded quadro" style="background-color: #f8e0b6; margin-top:1px !important; margin-bottom:1px !important;">
                                            <div class="row">
                                                <div class="col-12 d-flex flex-column gap-4">
                                                <h4>Periodização Linear</h4>
                                                <table style="width: 100%; border-collapse:collapse; font-size:1rem"> <tr> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Microciclo I (7 e 10 dias)</th> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Microciclo II (7 e 10 dias)</th> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Microciclo III (7 e 10 dias)</th> </tr> <tr> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 12-15 RM</td> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 8-10 RM</td> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 4-6 RM</td> </tr> </table>                                     
                                                <p class="description-descricao" style="margin:0;"> RM: Repetições máximas

                                                                                                    <p><strong style="color:#011c41;">Nesse modelo de periodização, no início o volume está alto e a intensidade está baixa. Conforme o tempo (semanas) passa, ocorre a redução do volume e o aumento da intensidade.</strong></p>
                                                </div>
                                            </div>
                                        </div>
    
                                        
    
                                    </div>
                                </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": "./conf/css/Lista.css" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                    `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                            "acionador": `
    
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
    
                                    `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    "titulo": "1rem",
                    // "paragrafos": "1rem",
                    "font_familly": "Lato",
                    // "cor_fonte":"black",
                    // "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
                    },
                    {
                        "elemento": ".quadro", // 0 | all
                        "script_animation": `
                            animate__animated animate__shakeY  animate__delay-3s animate__slow
                        `
                    }
                
                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 10 Modelos de periodização - CONTINUACAO 
    /*
        FILTRO
            ------> pg[10]
            ------> CM[Modelos de periodização - CONTINUACAO ]
        AQUI ÉA PÁGINA DE Modelos de periodização - CONTINUACAO 

    */
        {
            "pagina": 10,
            "nome_page": `Modelos de periodização`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
    
                            <div class="pagina-tipo-texto animation">
        
                                    <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                        <div class="d-flex flex-column gap-2">
                            
    
                                        <div class="container my-4 p-4 animate-info rounded quadro" style="background-color: #f8e0b6; margin-top:1px !important; margin-bottom:1px !important;">
                                            <div class="row">
                                                <div class="col-12 d-flex flex-column gap-4">
                                                <h4>Periodização Linear reversa</h4>
                                                <table style="width: 100%; border-collapse:collapse; font-size:1rem"> <tr> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Microciclo I (7 e 10 dias)</th> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Microciclo II (7 e 10 dias)</th> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Microciclo III (7 e 10 dias)</th> </tr>
                                                <tr> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 4-6 RM</td> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 8-10 RM</td> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 12-15 RM</td> </tr> </table>                                     
                                                <p class="description-descricao" style="margin:0;"> RM: Repetições máximas

                                                                                                    <p><strong style="color:#011c41;">Nesse modelo de periodização, no inicío a intensidade está alta e o volume está baixo. Conforme o tempo (semanas) passa, ocorre a redução da intensidade e o aumento do volume.</strong></p>
                                                </div>
                                            </div>
                                        </div>
    
                                        
    
                                    </div>
                                </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": "./conf/css/Lista.css" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                    `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                            "acionador": `
    
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
    
                                    `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    "titulo": "1rem",
                    // "paragrafos": "1rem",
                    "font_familly": "Lato",
                    // "cor_fonte":"black",
                    // "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
                    },
                    {
                        "elemento": ".quadro", // 0 | all
                        "script_animation": `
                            animate__animated animate__shakeY  animate__delay-3s animate__slow
                        `
                    }
                
                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 11 Modelos de periodização - CONTINUACAO 
    /*
        FILTRO
            ------> pg[11]
            ------> CM[Modelos de periodização - CONTINUACAO ]
        AQUI ÉA PÁGINA DE Modelos de periodização - CONTINUACAO 

    */
        {
            "pagina": 11,
            "nome_page": `Modelos de periodização`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
    
                            <div class="pagina-tipo-texto animation">
        
                                    <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                        <div class="d-flex flex-column gap-2">
                            
    
                                        <div class="container my-4 p-4 animate-info rounded quadro" style="background-color: #f8e0b6; margin-top:1px !important; margin-bottom:1px !important;">
                                            <div class="row">
                                                <div class="col-12 d-flex flex-column gap-4">
                                                <h4>Periodização ondulatória diária</h4>
                                                <table style="width: 100%; border-collapse:collapse; font-size:1rem"> <tr> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Segunda-feira</th> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Quarta-feira</th> <th style="border: 1px solid #000; text-align: center; padding: 8px; background-color: #004080; color:white">Sexta-feira</th> </tr>
                                                <tr> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 4-6 RM</td> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 8-10 RM</td> <td style="border: 1px solid #000; text-align: center; padding: 8px;">3 X 12-15 RM</td> </tr> </table>                                     
                                                <p class="description-descricao" style="margin:0;"> RM: Repetições máximas

                                                                                                    <p><strong style="color:#011c41;">No modelo de periodização ondulatória diária, existe variações no volume e na intensidade para o mesmo grupo muscular com o passar dos dias na semana.</strong></p>
                                                </div>
                                            </div>
                                        </div>
    
                                        
    
                                    </div>
                                </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": "./conf/css/Lista.css" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                    `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                            "acionador": `
    
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
    
                                    `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    "titulo": "1rem",
                    // "paragrafos": "1rem",
                    "font_familly": "Lato",
                    // "cor_fonte":"black",
                    // "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
                    },
                    {
                        "elemento": ".quadro", // 0 | all
                        "script_animation": `
                            animate__animated animate__shakeY  animate__delay-3s animate__slow
                        `
                    }
                
                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 12 Recomendações básicas para hipertrofia muscular 
    /*
        FILTRO
            ------> pg[12]
            ------> CM[Recomendações básicas para hipertrofia muscular ]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular

    */
        {
            "pagina": 12,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-imagem",
            "data": {
                "container_render": `
                <style>
                @media screen and (min-width: 1520px) {
                #para-pensar{
                left:85% !important
                }

                .para-pensar-elemento--box {
                padding: 1rem 15rem 1rem 1rem !important
            }

            }
                
                </style>
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                            <div class="d-flex flex-column gap-2">
                                <div class="objetivo-aprendizagem-elemento" style="margin: 0 auto;">
                                    <div class="para-pensar-elemento--box" style="background-color:#fef1ea; padding: 1rem 10rem 1rem 1rem;">
                                        <img id="para-pensar" src="${_prefixAssetsIcons}citacao.png" class="animationLamp" style="left: 85%" />
                                        <ol class="list-group list-group-numbered gap-2">
                                        <pimportant class="pimportante" style="text-align: justify;">A hipertrofia muscular pode ser definida como um aumento do
    tamanho do tecido muscular (SHOENFELD, 2023). Segundo Shoenfeld, (2022), a alteração no tamanho da célula muscular
    ocorre pela adição de sarcômeros em paralelo e/ou em séries, do acréscimo de elementos não contráteis e do aumento
    de líquido sarcoplasmático. Esse processo pode ocorrer devido a prática do treinamento resistido associado com
    descanso adequado e nutrição apropriada (SHOENFELD, 2022). 
                                        </pimportant>   
                                        
                                        </ol>
                                    </div>
                                    

                                
                               </div>                                                                   
                            </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "inserir_estilo_pagina": [{
                    "url": "./conf/css/SaibaMais.css"
                },
                {
                    "url": "./conf/css/buttonMind.css"
                }
            ],
                "inserir_escript_pagina": [{
                    "onde": "body",
                    "posicao": "beforeend",
                    "src": "./conf/js/buttonMind.js"
                }],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "setas": {
                    // "corSetas": "#fff",
                    // "corFundo": "rgba(255, 255, 255, 0.174)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"#ffffff",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                    },
                    {
                        "elemento": ".animationLamp", // 0 | all
                        "script_animation": `
                        animate__animated animate__flash animate__slow animate__repeat-2
                    `
                    },

                    {
                        "elemento": ".pimportante", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                    }                      
        

                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },


// PÁGINA 13 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[13]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */

        {
            "pagina": 13,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                    <div class="d-flex flex-column gap-2">
                                    <p>A primeira pergunta para o personal training é:</p>
                                    <pdestaque style="margin: 0 auto;width: 50%;text-align: center;display: flex;font-style: italic;font-weight: 600;font-size: 1rem;color: #011c41">Qual é o melhor modelo de periodização para conseguir hipertrofia muscular?
                                        </pdestaque>
                                        <p>Segundo Caldas <i>et al.</i> (2016), em estudo com metodologia robusta (meta-análise), demonstraram não ter diferenças entre
    periodização linear e periodização ondulatória para resistência muscular, força isométrica e hipertrofia muscular.
    No mesmo sentido, em estudos de revisão, não foi observado diferenças entre periodização linear e periodização
    ondulatória para hipertrofia muscular (GRGIC <i>et al.</i>, 2017; EVANS, 2019).</p>                                      
                                        
                                    </div>
                                </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
    
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 14 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[14]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */

        {
            "pagina": 14,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                    <div class="d-flex flex-column gap-2">
                                    <p>A segunda pergunta para o personal training é:</p>
                                    <pdestaque style="margin: 0 auto;width: 50%;text-align: center;display: flex;font-style: italic;font-weight: 600;font-size: 1rem;color: #011c41">Para hipertrofia muscular, é melhor prescrever o treino com algum modelo de periodização?

                                        </pdestaque>
                                        <p>Ao comparar treinamento resistido sem modelos de periodização com programas periodizados, não foram observadas
                                            diferenças para a variável hipertrofia muscular (GRGIC <i>et al.</i>, 2018). Na mesma linha, em estudo de revisão
                                            sistemática com meta-análise, não foi demonstrado diferenças entre programas periodizados e programas não
                                            periodizados para hipertrofia muscular (MOESGAARD <i>et al.</i>, 2022).</p>                                      
                                        
                                    </div>
                                </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
    
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },        

// PÁGINA 15 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[15]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */
        {
            "pagina": 15,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-imagem",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
    
                                <div class="objetivo-aprendizagem-elemento ">
                                    <div class="important-saber-elemento--box">
                                        <img id="important-saber" src="${_prefixAssetsIcons}lampada.svg" class="animationLamp" />
                                        <div class="objetivo-aprendizagem-elemento--img-title">
                                            <h1>É importante saber que...</h1>
                                        </div>
                                        
                                        <ol class="list-group list-group-numbered">
                                        <pimportant>É importante que o personal training conheça as variáveis do treinamento resistido. Pois foi observado que a
    manipulação das variáveis peso (carga), intervalos de descanso entre as séries e entre os exercícios, frequência,
    número de exercícios, número de séries, número de repetições, amplitude de movimento, cadência (velocidade nas fases
    concêntrica e excêntrica) pode gerar diferentes adaptações estruturais e funcionais no organismo (PRESTES et al.,
    2016; KRAEMER, 2017; DE SALLES, 2020, SHOENFELD, 2022).</pimportant>                                                          
    
                                        </ol>
                                    </div>
                                    
                                </div>
    
                            </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "inserir_estilo_pagina": [{
                    "url": "./conf/css/SaibaMais.css"
                }],
                "inserir_escript_pagina": [{
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "setas": {
                    // "corSetas": "#fff",
                    // "corFundo": "rgba(255, 255, 255, 0.174)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"#ffffff",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação para Texto API
                // "animacao_texto": [{
                //     "indice": "all", // 0 | all
                //     "script_animation": `
                //         animate__animated animate__fadeInDown animate__slow
                //     `
                // }],
                // Animação pra toda Página
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                    },
                    {
                        "elemento": ".animationLamp", // 0 | all
                        "script_animation": `
                        animate__animated animate__flash animate__slow animate__repeat-2
                    `
                    }
                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 16 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[16]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */

        {
            "pagina": 16,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                    <div class="d-flex flex-column gap-2">
                                    <p>Sendo assim, você pode se questionar:</p>
                                    <pdestaque
                                        style="margin: 0 auto;width: 50%;text-align: center;display: flex;font-style: italic;font-weight: 600;font-size: 1rem;color: #011c41">
                                        Quais as recomendações direcionadas para cada variável na prescrição do
                                        treinamento resistido com propósito de hipertrofia muscular?
                                        </pdestaque>
                                        <p>Variáveis como volume, frequência, carga, seleção dos exercícios, tipo de ação muscular, duração de intervalo de
    descanso, duração da repetição, ordem dos exercícios amplitude de movimento estão diretamente relacionadas com a
    hipertrofia muscular (SHOENFELD, 2023).</p>                                      
                                        
                                    </div>
                                </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
    
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },


// PÁGINA 17 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[17]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */

        {
            "pagina": 17,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                            <p>Clique nos cards abaixo e veja um direcionamento sobre as variáveis:</p>
                                <div class="pagina-tipo-texto--box-texto--grid">                         
                                
                                    
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard1">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #6366f1, #8b5cf6);">Volume</div>
                                            <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #3b82f6, #2dd4bf);">É recomendado a realização de 10 a 20 séries para cada músculo 
                                            por semana (SHOENFELD, 2023). </div>
                                        </div>
                                    </div>              
                                              
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard2">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #f63b3b, #d42d69);">Frequência</div>
                                        <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #f16363, #f65c94);"> Quando o volume for maior de 10 séries por músculo por semana, a opção de frequências mais
                                            altas (pelo menos 2 vezes por semana) permitirá melhor controle do volume. É recomendado aguardar pelo menos 48
                                            horas entre as sessões de treinamento para o mesmo grupo muscular (SHOENFELD, 2010).</div>
                                        </div>
                                    </div>                    
                                                                               
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard3">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #6366f1, #8b5cf6);">Carga</div>
                                        <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #3b82f6, #2dd4bf);"> Para maximizar a hipertrofia é recomendado a realização de 6 a 12 repetições máximas, o que pode proporcionar uma
 combinação ideal entre tensão mecânica e estresse metabólico (SHOENFELD, 2022). Adicionalmente, programas direcionados
 para a hipertrofia devem incluir séries realizadas até a falha muscular, bem como aquelas que são enceradas um pouco
 antes do esforço total
 (1-2 repetições em reserva).</div>
                                        </div>
                                    </div>     
                                 </div>                                           
                                    
                            </div>
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
    
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow 
                    `
                },
            
                {
                    "elemento": ".flipcard1", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-1s
                    `
                },
                {
                    "elemento": ".flipcard2", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-2s
                    `
                },
                {
                    "elemento": ".flipcard3", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-3s
                    `
                },
            
            ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

        // PÁGINA 18 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[18]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */

        {
            "pagina": 18,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                            <p>Clique nos cards abaixo e veja um direcionamento sobre as variáveis:</p>
                                <div class="pagina-tipo-texto--box-texto--grid">
                                
                                    
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard4">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg,  #f63b3b, #d42d69);">Seleção dos exercícios</div>
                                            <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #f16363, #f65c94);">Após a familiarização com os padrões de movimento, é recomendado a realização de uma diversidade de exercícios (máquinas, pesos livres, multiarticulares, monoarticulares, diferentes ângulos de execução) ao longo de um programa de treinamento periodizado (SHOENFELD, 2022).</div>
                                        </div>
                                    </div>              
                                              
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard5">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #6366f1, #8b5cf6);">Tipo de ação muscular</div>
                                        <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #3b82f6, #2dd4bf);">Para maximizar a hipertrofia muscular é recomendado a realização de ações concêntricas e excêntricas durante o treinamento. A adição de carga na fase excêntrica supramáxima pode melhorar a resposta hipertrófica (SHOENFELD, 2023).</div>
                                        </div>
                                    </div>                    
                                                                               
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard6">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #f63b3b, #d42d69);">Duração de intervalo de descanso</div>
                                        <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #f16363, #f65c94);">  No que se diz respeito aos intervalos de descanso, considerando os exercícios multiarticulares, pesquisas indicam que o tempo de 2 minutos entre as séries é superior para hipertrofia quando comparado com tempos inferiores. Em relação aos exercícios monoarticulares, o tempo recomendado para melhor resposta hipertrófica é de 60 a 90 segundos (SHOENFELD, 2022).</div>
                                        </div>
                                    </div>     
                                 </div>                                           
                                    
                            </div>
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
    
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                },
            
                {
                    "elemento": ".flipcard4", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-1s
                    `
                },

                {
                    "elemento": ".flipcard5", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-2s
                    `
                },

                {
                    "elemento": ".flipcard6", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-3s
                    `
                },
            
            
            ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 19 Recomendações básicas para hipertrofia muscular - CONTINUACAO
    /*
        FILTRO
            ------> pg[19]
            ------> CM[Recomendações básicas para hipertrofia muscular - CONTINUACAO]
        AQUI ÉA PÁGINA DE Recomendações básicas para hipertrofia muscular - CONTINUACAO

    */

        {
            "pagina": 19,
            "nome_page": `Recomendações básicas para hipertrofia muscular`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                            <p>Clique nos cards abaixo e veja um direcionamento sobre as variáveis:</p>
                                <div class="pagina-tipo-texto--box-texto--grid">                         
                                
                                    
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard7">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #6366f1, #8b5cf6);">Duração da repetição</div>
                                            <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #3b82f6, #2dd4bf);"> Sobre a velocidade da cadência, para maximizar os efeitos hipertróficos do treinamento resistido é recomendado realizar contrações com duração de 0,5, 6 segundos até a falha muscular.</div>
                                        </div>
                                    </div>              
                                              
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard8">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #f63b3b, #d42d69);">Ordem dos exercícios</div>
                                        <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #f16363, #f65c94);">  Em relação a ordem dos exercícios, segundo Shoenfeld (2023), os músculos com maior necessidade de hipertrofia devem ser realizados em primeiro lugar na sessão de treinos.</div>
                                        </div>
                                    </div>                    
                                                                               
                                     <!-- Card 1 -->
                                    <div class="flip-card flipcard9">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front" style="--bg-card-flip-front:linear-gradient(135deg, #6366f1, #8b5cf6);">Amplitude de movimento</div>
                                        <div class="flip-card-back" style="--bg-card-flip-back:linear-gradient(135deg, #3b82f6, #2dd4bf);"> Como base de um programa de treinamento resistido, os exercícios devem ser realizados com amplitude de movimento total.</div>
                                        </div>
                                    </div>     
                                 </div>                                           
                                    
                            </div>
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
    
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                },
            
                {
                    "elemento": ".flipcard7", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-1s
                    `
                },

                {
                    "elemento": ".flipcard8", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-2s
                    `
                },

                {
                    "elemento": ".flipcard9", // 0 | all
                    "script_animation": `
                        animate__animated animate__flipInY animate__slow animate__delay-3s
                    `
                },
            
            
            ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 20 Métodos de treinamento resistido  
    /*
        FILTRO
            ------> pg[20]
            ------> CM[Métodos de treinamento resistido]
        AQUI ÉA PÁGINA DE Métodos de treinamento resistido 

    */
        {
            "pagina": 20,
            "nome_page": `Métodos de treinamento resistido`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
    
                                <div class="d-flex flex-column gap-2">
                                    <p>
                                       É imprescindível mencionar as diferenças nas recomendações entre indivíduos
                                       iniciantes (até 6 meses de experiência) de nível intermediário (mais de 6 meses
                                       de experiência) e de nível avançado (mínimo 1 ano de experiência) (PRESTES <i>et
                                       al.</i>, 2016).</p> 
                                       <p>
                                       Adicionalmente, técnica de execução e força muscular também devem ser considerados nessa avaliação. Por exemplo, o aluno
                                        diz para o <i>personal</i> que treinou por 1 ano, mas a técnica de execução de alguns exercícios multiarticulares está ruim.
                                        Nesse sentido, esse aluno será considerado iniciante.</p>                                    
                                </div>
    
                            </div>
    
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
    
                        "Podcast": {
                            "ativa": true,
                            "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                            </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
    
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
    
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 21 Métodos de treinamento resistido - CONTINUACAO
    /*
        FILTRO
            ------> pg[21]
            ------> CM[Métodos de treinamento resistido - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos de treinamento resistido - CONTINUACAO

    */

        {
            "pagina": 21,
            "nome_page": `Métodos de treinamento resistido`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound gap-2">
                            <h4 style="color:#011c41; text-align:left;">Opções de métodos para a prescrição de TR para indivíduos iniciantes</h4>
                            <p>Clique nos botões e saiba mais:</p>
                            <div class="d-flex gap-2 container-button">
                                                      
                            <button class="btn-modal btn-modal-piramide">
                            <span>Método Pirâmide</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                            <button class="btn-modal btn-modal-circuito">
                            <span>Método Circuito</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                            <button class="btn-modal btn-modal-superset">
                            <span>Método Superset</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                        </div>
                                
                            </div>
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": `` // Colocar o Estilo somente nessa PÃ¡gina
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>DicionÃ¡rio</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos nÃ¡ Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // AnimaÃ§Ã£o para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // AnimaÃ§Ã£o pra toda PÃ¡gina
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                    },{
                        "elemento": ".btn-modal-piramide", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-1s
                        `
                    },
                    {
                        "elemento": ".btn-modal-circuito", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-2s
                        `
                    },
                    {
                        "elemento": ".btn-modal-superset", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-3s
                        `
                    }
            ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": false,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                DicionÃ¡rio
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 22 Métodos de treinamento resistido - CONTINUACAO
    /*
        FILTRO
            ------> pg[22]
            ------> CM[Métodos de treinamento resistido - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos de treinamento resistido - CONTINUACAO

    */

        {
            "pagina": 22,
            "nome_page": `Métodos de treinamento resistido`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                         <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound gap-2">
                            <h4 style="color:#011c41; text-align:left;">Opções de Métodos para a prescrição de TR para indivíduos de nível intermediário</h4>
                            <p>Clique nos botões e saiba mais:</p>
                            <div class="d-flex gap-2 container-button">
                                                      
                            <button class="btn-modal btn-modal-Cluster-Sets">
                            <span>Método Cluster Sets</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                            <button class="btn-modal btn-modal-exaustao">
                            <span>Método de Exaustão</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                            <button class="btn-modal btn-modal-repeticoes-parciais">
                            <span>Método de Repetições Parciais</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                            <button class="btn-modal btn-modal-Bi-set">
                            <span>Método Bi-Set</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                ></path>
                            </svg>
                            </button>

                        </div>
                                
                            </div>
                        </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": `` // Colocar o Estilo somente nessa PÃ¡gina
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>DicionÃ¡rio</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos nÃ¡ Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // AnimaÃ§Ã£o para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // AnimaÃ§Ã£o pra toda PÃ¡gina
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                    },{
                        "elemento": ".btn-modal-Cluster-Sets", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-1s
                        `
                    },
                    {
                        "elemento": ".btn-modal-exaustao", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-2s
                        `
                    },
                    {
                        "elemento": ".btn-modal-repeticoes-parciais", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-3s
                        `
                    },

                    {
                        "elemento": ".btn-modal-Bi-set", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-4s
                        `
                    }
            ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": false,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                DicionÃ¡rio
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                        }
                    }
                ]
            }
        },

// PÁGINA 23 Métodos de treinamento resistido - CONTINUACAO
    /*
        FILTRO
            ------> pg[23]
            ------> CM[Métodos de treinamento resistido - CONTINUACAO]
        AQUI ÉA PÁGINA DE Métodos de treinamento resistido - CONTINUACAO

    */

        {
            "pagina": 23,
            "nome_page": `Métodos de treinamento resistido`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
                    <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound gap-2">
                                <h4 style="color:#011c41; text-align:left;">Opções de Métodos para a prescrição de TR para indivíduos de nível avançado</h4>
                                <p>Clique nos botões e saiba mais:</p>
                           <div class="d-flex gap-2 container-button">
                                       <button class="btn-modal btn-modal-Rest-Pause">
                                        <span>Rest-Pause</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 74 74"
                                            height="34"
                                            width="34"
                                        >
                                            <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                            <path
                                            fill="white"
                                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                            ></path>
                                        </svg>
                                        </button>

                                        <button class="btn-modal btn-modal-Dropset-Stripset">
                                        <span>Métodos Dropset e Stripset</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 74 74"
                                            height="34"
                                            width="34"
                                        >
                                            <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                            <path
                                            fill="white"
                                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                            ></path>
                                        </svg>
                                        </button>

                                        <button class="btn-modal btn-modal-Tri-set">
                                        <span>Métodos Tri-set e Série Gigante</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 74 74"
                                            height="34"
                                            width="34"
                                        >
                                            <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                            <path
                                            fill="white"
                                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                            ></path>
                                        </svg>
                                        </button>

                                        

                                </div>

                                     <div class="d-flex gap-2 container-button">
                                     <button class="btn-modal btn-modal-German">
                                        <span>Método German Volume Training</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 74 74"
                                            height="34"
                                            width="34"
                                        >
                                            <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                            <path
                                            fill="white"
                                            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                            ></path>
                                        </svg>
                                        </button>

                                       <button class="btn-modal btn-modal-forcadas">
                                    <span>Método de Repetições Forçadas</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                        <path
                                        fill="white"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                    </button>

                                    <button class="btn-modal btn-modal-negativo">
                                    <span>Método Excêntrico ou Negativo</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                        <path
                                        fill="white"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                    </button>

                                    <button class="btn-modal btn-modal-Roubada">
                                    <span>Método de Roubada</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                        <path
                                        fill="white"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                    </button>

                                                                    </div>

                                <div class="d-flex gap-2 container-button">
                                        
                                <button class="btn-modal btn-modal-Superbomba">
                                    <span>Método Superbomba</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                        <path
                                        fill="white"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                    </button>

                                       <button class="btn-modal btn-modal-Pré-Exaustão">
                                    <span>Método de Pré-Exaustão</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                        <path
                                        fill="white"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                    </button>

                                    <button class="btn-modal btn-modal-Fluxo-Sanguíneo">
                                    <span>Treinamento com restrição do fluxo sanguíneo</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                                        <path
                                        fill="white"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                    </button>

                                    </div>
                            
                                                       
                          
                        </div>
                    </div>                                                                   
                   
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": `` // Colocar o Estilo somente nessa PÃ¡gina
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                            "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                    <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>DicionÃ¡rio</button>
                                `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                        },
                    }
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos nÃ¡ Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    // "titulo":"1rem",
                    // "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // AnimaÃ§Ã£o para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // AnimaÃ§Ã£o pra toda PÃ¡gina
                "animacao_elemento": [
                    {
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                    },{
                        "elemento": ".btn-modal-Rest-Pause", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-1s
                        `
                    },
                    {
                        "elemento": ".btn-modal-Dropset-Stripset", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-2s
                        `
                    },
                    {
                        "elemento": ".btn-modal-Tri-set", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-3s
                        `
                    },
                    {
                        "elemento": ".btn-modal-German", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-4s
                        `
                    },
                    {
                        "elemento": ".btn-modal-forcadas", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-5s
                        `
                    },
                    {
                        "elemento": ".btn-modal-negativo", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-6s
                        `
                    },
                    {
                        "elemento": ".btn-modal-Roubada", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-7s
                        `
                    },
                    {
                        "elemento": ".btn-modal-Superbomba", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-8s
                        `
                    },
                    {
                        "elemento": ".btn-modal-Pré-Exaustão", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-9s
                        `
                    },
                    {
                        "elemento": ".btn-modal-Fluxo-Sanguíneo", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-10s
                        `
                    }

                    
            ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": false,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                DicionÃ¡rio
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                        }
                    }
                ]
            }
        },


    // PÁGINA 24 Video Disciplina
    /*
        FILTRO
            ------> pg[24]
            ------> CM[Video Disciplina]
        AQUI ÉA PÁGINA DE Video Disciplina

    */
        {
            "pagina": 24,
            "nome_page": `Video Aula`,
            "tipo": "Video",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-video",
            "data": {
                "container_render": `
                    <div class="pagina-tipo-video animation">
    
                      <div class="pagina-tipo-video--box-video">
                            <div class="f-carousel render-video-container" id="carrosel-video">
                                <!-- Renderizador de Video -->
                                <!-- 
                                <div class="f-carousel__slide" data-thumb-src="https://i.vimeocdn.com/video/112836958_192x144.jpg">
                                    <iframe class="iframe-video" src="https://player.vimeo.com/video/1005614415" ></iframe>
                                </div>
                                -->
    
                            </div>
                      </div>
    
                      <div class="transcritor--box-video">
                        <div>
                            <!-- cabeçalho -->
                            <p class="header-transcritor-video">Transcrição</p>
                        </div>
    
                        <div class="body-transcritor-video">
                            <!-- body -->
    
                        </div>
    
                        <div class="footer-transcritor-video">
                            <!-- footer -->
                            <button>Gerar Transcrição</button>
                        </div>
                      </div>
    
                    </div>
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                // Injetar estilos na Pagina
                "inserir_estilo_pagina": [{
                    "url": ""
                }],
                "inserir_escript_pagina": [{
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }],
                "ferramentas": [
                    {
                        "container": "icons-action--container",                        
                        "Videoaula": {
                            "ativa": false,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                        },
                        "Videoaula": {
                            "ativa": false,
                            "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": false,
                            "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                            `
                        },
                        "Destacar": {
                            "ativa": false,
                            "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                            "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                        },
                        "Ouvinte": {
                            "ativa": false,
                            "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                            `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                        },
                    }
    
                ],
                "setas": {
                    "corSetas": "#fff",
                    "corFundo": "rgba(255, 255, 255, 0.174)"
                },
                "cores": {
                    "sidebar": "#000000",
                    "fundo": "#011C41",
                    "icones": "white",
                    "iconesEspecificos": {
                        ".openAnnotation": {
                            "cor": "white",
                        }
                    }
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 8 e Transcritor
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".transcritor--box-video",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    },
                    "_renderizadar_video": {
                        "status": true,
                        "onde_colocar_video": ".render-video-container",
                    },
    
                },
                "fonte": {
                    // "titulo":"1rem",
                    "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logobranca1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                // "animacao_texto": [{
                //     "indice": "all", // 0 | all
                //     "script_animation": `
                //         animate__animated animate__fadeInDown animate__slow
                //     `
                // }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".transcritor--box-video"
                        }
                    }
                ]
            }
        },
    
        // PÁGINA 25 Audio Disciplina
        /*
            FILTRO
                ------> pg[25]
                ------> CMAudio Disciplina]
            AQUI ÉA PÁGINA DE Audio Disciplina
    
        */
        {
            "pagina": 25,
            "nome_page": `Podcast`,
            "tipo": "Audio",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-audio",
            "data": {
                "container_render": `
                <div class="pagina-tipo-audio animation">
    
                    <div class="pagina-tipo-audio--box-audio">
                        <div class="render-audio-container" id="carrosel-audio">
    
                        </div>
                    </div>
    
                    <div class="transcritor--box-audio">
                        <div>
                            <!-- cabeçalho -->
                            <p class="header-transcritor-audio">Transcrição</p>
                        </div>
    
                        <div class="body-transcritor-audio">
                            <!-- body -->
    
                        </div>
    
                        <div class="footer-transcritor-audio">
                            <!-- footer -->
                            <button>Gerar Transcrição</button>
                        </div>
                    </div>
    
                </div>
            `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                // Injetar estilos na Pagina
                "inserir_estilo_pagina": [{
                    "url": ""
                }],
                "inserir_escript_pagina": [{
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }],
                "ferramentas": [
                    {
                        "container": "icons-action--container",                        
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
                        "Podcast": {
                            "ativa": false,
                            "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": false,
                            "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": false,
                            "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                            `
                        },
                        "Destacar": {
                            "ativa": false,
                            "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                            "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                        },
                        "Ouvinte": {
                            "ativa": false,
                            "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                            `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                        },
                    }
    
                ],
                "marcador": [{
                    "tipo": "p",
                    "posicao": 0,
                    "palavras": "Olá, estudante! Bem-vindo à Unidade 1!",
                    "attr_unitario": {
                        "Olá, estudante! Bem-vindo à Unidade 1!": {
                            "attr": "font-weight=[999], Font-size=[18px]",
    
                        },
    
                    },
                    // "fundo": "blue",
                    // "corTexto": "black",
                    // "padding": "0.3rem",
    
    
                }],
                "cores": {
                    "sidebar": "#000000",
                    "fundo": "#011C41",
                    "icones": "white",
                    // Cores de icones Especificas
                    "iconesEspecificos": {
                        ".openAnnotation": {
                            "cor": "white",
                        }
                    }
                },
                "setas": {
                    "corSetas": "#fff",
                    "corFundo": "rgba(255, 255, 255, 0.174)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 8 e Transcritor
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".transcritor--box-audio",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    },
                    "_renderizar_audio": {
                        "status": true,
                        "onde_colocar_audio": ".render-audio-container",
                    },
    
                },
                "fonte": {
                    // "titulo":"1rem",
                    "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logobranca1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                // "animacao_texto": [{
                //     "indice": "all", // 0 | all
                //     "script_animation": `
                //         animate__animated animate__fadeInDown animate__slow
                //     `
                // }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".transcritor--box-audio"
                        }
                    }
                ]
            }
        },
    
        // PÁGINA 26 Indicação de Leitura
        /*
            FILTRO
                ------> pg[26]
                ------> CM[Indicação de Leitura]
            AQUI ÉA PÁGINA DE Indicação de Leitura
    
        */
            {
                "pagina": 26,
                "nome_page": `Indicação de Leitura`,
                "tipo": "Texto",
                "id_page": ".content-render-api",
                "id_component": ".c-carousel__slides",
                "id_elemento_para_modificar": "container-texto",
                "data": {
                    "container_render": `
        
                    
    
                            <div class="pagina-tipo-texto animation">
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                    <div class="container p-4 animate-info">
                                        <!-- Linha para colunas lado a lado em telas grandes e empilhadas em telas pequenas -->
                                        <div class="row justify-content-center">
    
                                            <!-- Primeira Coluna: Responsiva -->
                                            <div class="col-12 col-md-6 d-flex gap-1 align-items-center justify-content-around container-livro-img-thumb">
                                                <!-- Coluna de Thumbnails -->
                                                <div class="d-flex" id="thumbnails-container" >
                                                    <!-- As thumbnails serão carregadas dinamicamente aqui -->
                                                </div>
    
                                                <!-- Coluna de Imagem Principal -->
                                                <div class="col-md-5 container-livro-img-thumb-content">
                                                    <div class="item-ligthbox-img img-photo-actions position-relative h-100" style="border:none;background:none;">
                                                        <img src="" id="preview-img"
                                                            alt="A imagem é a capa do livro sugerido."
                                                            class="w-100 rounded">
                                                    </div>
                                                </div>
                                            </div>
    
                                            <!-- Segunda Coluna: Conteúdo Dinâmico -->
                                            <div class="col-12 col-md-6 d-flex flex-column justify-content-center gap-1 text-center content-livro-action" id="content-livro-action">
                                                <!-- O conteúdo do livro será carregado aqui -->
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                     
                            
        
                    `,
                },
                "forcarAtualizacao": {
                    "variaveis": [
                        {
                            "Nome": "--animacao-sidebar",
                            "Entrada": "none",
                            "Saida": "slideDown 2s forwards"
                        }
                    ]
                },
                "paramentros": {
                    "lupa": "Yes",
                    "inserir_estilo_pagina": [
                        {
                            "url": "" // Colocar o Estilo somente nessa Página
                        }
                    ],
                    "inserir_escript_pagina": [
                        {
                            "onde": "body",
                            "posicao": "",
                            "src": `${_prefixConfJS}LivrosThu.js`
                        }
                    ],
                    "ferramentas": [
                        {
                            "container": "icons-action--container",
                            "Podcast": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                                    <i data-lucide="audio-lines"></i>
                                                </button>
                                            `
                            },
                            "Videoaula": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                                    <i data-lucide="video"></i>
                                                </button>
                                            `
                            },
                            "Ferramentas": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                                    <i data-lucide="pencil-ruler"></i>
                                                </button>
                                            `
                            },
                            "FullScreen": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                                    <i data-lucide="maximize-2"></i>
                                                </button>
                                            `
                            },
        
                        },
                        {
                            "container": "icons-action--container-mobile",
                            "Podcast": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-podcast">
                                                    <i data-lucide="audio-lines"></i>
                                                </button>
                                            `
                            },
                            "Videoaula": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-videoaula">
                                                    <i data-lucide="video"></i>
                                                </button>
                                            `
                            },
                            "Ferramentas": {
                                "ativa": true,
                                "html": `
                                                <button class="btn-ferramentas" aria-label="close">
                                                    <i data-lucide="pencil-ruler"></i>
                                                </button>
                                            `
                            },
        
                        },
                        {
                            "container": "box-tools-inline",
                            "Resulmo": {
                                "ativa": true,
                                "html": `
                                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                                
                                            `
                            },
                            "Destacar": {
                                "ativa": true,
                                "html": `
                                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                            `,
                                "acionador": `
                    
                                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                                    <div class="cores-destaque-inline-btn">
                                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                            <button class="toolbar-button" id="limpar">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                                Limpar
                                                            </button>
                                                     </div>
                                                </div>
                    
                                            `
                            },
                            "Notas": {
                                "ativa": true,
                                "html": `
                                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                            `
                            },
                            "Ouvinte": {
                                "ativa": true,
                                "html": `
                                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                            `
                            },
                            "Download": {
                                "ativa": true,
                                "html": `
                                                <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                            `
                            },
                            "Dicionario": {
                                "ativa": true,
                                "html": `
                                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                            `
                            },
                            "close": {
                                "ativa": true,
                                "html": `
                                                  <button><i data-lucide="x" id="close_box"></i></button>
                                            `
                            },
                        }
        
                    ],
                    "cores": {
                        // "sidebar": "red",
                        // "fundo": "red",
                        // "icones": "rgb(0, 110, 201)"
                    },
                    "configuracoes_gerais": {
        
                        // Habilitar Procurar de Paragrafos ná Pagina 2
                        "_procurar_paragrafos": {
                            "status": true,
                            "onde_procurar": ".pagina-tipo-texto--box-texto",
                        },
                        "_procurar_animacao": {
                            "status": true,
                            "onde_procurar_animacao": ".animation",
                        }
                    },
                    "fonte": {
                        "titulo": "1rem",
                        // "paragrafos": "1rem",
                        "font_familly": "Lato",
                        // "cor_fonte":"black",
                        // "alinhamento_texto": "justify",
                        "hifens": "auto"
                    },
                    "logo": {
                        "ativar": true,
                        "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                        "tamanho": "10%",
                    },
                    // Animação para Texto API
                    "animacao_texto": [{
                        "indice": "all", // 0 | all
                        "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-1s
                        `
                    }],
                    // Animação pra toda Página
                    "animacao_elemento": [{
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                                    animate__animated animate__fadeInDown animate__slow
                                `
                    }],
                    
                    
                    "modulos": [
                        {
                            "audio": {
                                "ativo": true,
                                "idRef": ".ouvinte-sound"
                            },
                            "toolbar": {
                                "ativo": true,
                                "refTools": ['editar'],
                                "idRef": ".pagina-tipo-texto--box-texto",
                                "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                            }
                        }
                    ]
                }
            },
    
        
               
        // PÁGINA 27 Saiba Mais
        /*
            FILTRO
                ------> pg[27]
                ------> CM[Saiba Mais]
            AQUI ÉA PÁGINA DE Saiba Mais
    
        */
        {
            "pagina": 27,
            "nome_page": `Saiba Mais`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
    
                   <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">
    
                             <div class="container-saibamais--content">
                            <div class="container-saibamais w-100 h-100 ">
                                    <!-- Seção 1 -->
                                    <button class="accordion-saibamais saibamais1">
                                        Artigo - Traditional vs. Undulating Periodization in the Context of Muscular Strength and Hypertrophy: A Meta-Analysis
                                        <i class="fas fa-chevron-down"></i>
                                    </button>
                                    <div class="panel-saibamais">
                                        <p>Para fortalecer o processo de ensino aprendizagem, leia o artigo: <br> CALDAS, Leonardo C. et al. Traditional vs. undulating periodization in the context of muscular strength and hypertrophy: a meta-analysis. <b>Int J Sports Sci,</b> v. 6, n. 6, p. 219-29, 2016.</p>

                                       <!-- Botão Centralizado -->
                                        <div class="row justify-content-center">
                                            <div class="col-12 text-center my-2">
                                                <a target="_blank" href="https://www.researchgate.net/publication/311452712_Traditional_vs_Undulating_Periodization_in_the_Context_of_Muscular_Strength_and_Hypertrophy_A_Meta-Analysis"
                                                class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" style="border:1px dashed #ccc;font-size:1rem;">Ler artigo</a>
                                            </div>
                                        </div>
                                        
                                        <!-- desativado --> 
                                        <!--<div class="video-container">
                                            <iframe src="https://www.youtube.com/embed/BBcvN7ezIOU" allowfullscreen></iframe>
                                        </div>
                                        -->
                                    </div>
    
                                    <!-- Seção 2 -->
                                    <button class="accordion-saibamais saibamais2">
                                        Artigo - Periodized resistance training for enhancing skeletal muscle hypertrophy and strength: A mini-review.
                                                                                <i class="fas fa-chevron-down"></i>
                                    </button>
                                    <div class="panel-saibamais">
                                        <p>Para fortalecer o processo de ensino aprendizagem, leia o artigo: <br> EVANS, Jonathan W. Periodized resistance training for enhancing skeletal muscle hypertrophy and strength: A mini-review. <b>Frontiers in physiology,</b> v. 10, p. 436344, 2019.</p>
                                        <div class="row justify-content-center">
                                            <div class="col-12 text-center my-2">
                                                <a target="_blank" href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2019.00013/full"
                                                class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" style="border:1px dashed #ccc;font-size:1rem">Ler artigo</a>
                                            </div>
                                         </div>
                                    </div>    
                                                <!-- Seção 3 -->
                                    <button class="accordion-saibamais saibamais3">
                                        Artigo - Effects of linear and daily undulating periodized resistance training programs on measures of muscle hypertrophy: a systematic review and meta-analysis.
                                                                                <i class="fas fa-chevron-down"></i>
                                    </button>
                                    <div class="panel-saibamais">
                                        <p>Para fortalecer o processo de ensino aprendizagem, leia o artigo: <br> GRGIC, Jozo et al. Effects of linear and daily undulating periodized resistance training programs on measures of muscle hypertrophy: a systematic review and meta-analysis. <b>PeerJ,</b> v. 5, p. e3695, 2017.</p>
                                        <div class="row justify-content-center">
                                            <div class="col-12 text-center my-2">
                                                <a target="_blank" href="https://peerj.com/articles/3695/#table-1"
                                                class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" style="border:1px dashed #ccc;font-size:1rem">Ler artigo</a>
                                            </div>
                                        </div>
                                    </div>

                                                
                                                <!-- Seção 4 -->
                                    <button class="accordion-saibamais saibamais4">
                                        Artigo - Effects of periodization on strength and muscle hypertrophy in volume-equated resistance training programs: a systematic review and meta-analysis.
                                                                                <i class="fas fa-chevron-down"></i>
                                    </button>
                                    <div class="panel-saibamais">
                                        <p>Para fortalecer o processo de ensino aprendizagem, leia o artigo: <br> MOESGAARD, Lukas et al. Effects of periodization on strength and muscle hypertrophy in volume-equated resistance training programs: a systematic review and meta-analysis. <b>Sports Medicine,</b> v. 52, n. 7, p. 1647-1666, 2022.</p>
                                        <div class="row justify-content-center">
                                            <div class="col-12 text-center my-2">
                                                <a target="_blank" href="https://lida.sport-iat.de/ta/Record/4076743"
                                                class="btn btn-outline-secondary d-inline-flex align-items-center gap-2" style="border:1px dashed #ccc;font-size:1rem">Ler artigo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "beforebegin",
                        "src": "./conf/js/saibaMais.js"
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                                <i data-lucide="video"></i>
                                            </button>
                                        `
                        },
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                                <i data-lucide="audio-lines"></i>
                                            </button>
                                        `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                                <i data-lucide="pencil-ruler"></i>
                                            </button>
                                        `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                                <i data-lucide="maximize-2"></i>
                                            </button>
                                        `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-podcast">
                                                <i data-lucide="audio-lines"></i>
                                            </button>
                                        `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-videoaula">
                                                <i data-lucide="video"></i>
                                            </button>
                                        `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-ferramentas" aria-label="close">
                                                <i data-lucide="pencil-ruler"></i>
                                            </button>
                                        `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
    
                                        `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                        `,
                            "acionador": `
    
                                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                                <div class="cores-destaque-inline-btn">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                 </div>
                                            </div>
    
                                        `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                        `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                        `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                            <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                        `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                        `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                              <button><i data-lucide="x" id="close_box"></i></button>
                                        `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    "titulo": "1rem",
                    // "paragrafos": "1rem",
                    "font_familly": "Lato",
                    // "cor_fonte":"black",
                    // "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },

                // Animação para Texto API
                // "animacao_texto": [{
                //     "indice": "all", // 0 | all
                //     "script_animation": `
                //         animate__animated animate__fadeInDown animate__slow
                //     `
                // }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                                animate__animated animate__fadeInDown animate__slow 
                            `
                },
            
                {
                    "elemento": ".saibamais1", // 0 | all
                    "script_animation": `
                                animate__animated animate__fadeInDown animate__slow animate__delay-1s
                            `
                },

                
                {
                    "elemento": ".saibamais2", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-2s
                        `
                },

                
                { 
                    "elemento": ".saibamais3", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-3s
                        `
                },

                
                {
                    "elemento": ".saibamais4", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow animate__delay-4s
                        `
                },

                ],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": true,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
    
                                        </div>
                                    </div>
    
                               `
                        }
                    }
                ]
            }
        },
    
    
        // PÁGINA 28 Página da Atividade
        /*
            FILTRO
                ------> pg[28]
                ------> CM[Página da Atividade]
            AQUI ÉA PÁGINA DE Página da Atividade
            
        */
        {
            "pagina": 28,
            "nome_page": `Atividade de Fixação`,
            "tipo": "Atividade",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-atividade",
            "data": {
                "container_render": `
               
    
                    <div class="pagina-tipo-atividade animation">
      
                        <button class="btn-atividades-questoes continue-application" onclick="abrirModalAtividade('_bt',this)">
                            <div>
                                <div class="pencil"></div>
                                <div class="folder">
                                    <div class="top">
                                        <svg viewBox="0 0 24 27">
                                            <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                        </svg>
                                    </div>
                                    <div class="paper"></div>
                                </div>
                            </div>
                            Iniciar
                        </button>   
    
                    </div>
            `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                // Injetar estilos na Pagina
                "inserir_estilo_pagina": [{
                    "url": ""
                }],
                "inserir_escript_pagina": [
                    {
                        "onde": "",
                        "posicao": "",
                        "src": ""
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": false,
                            "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                        },
                        "Destacar": {
                            "ativa": false,
                            "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                            "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                        },
                        "Ouvinte": {
                            "ativa": false,
                            "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                        },
                        "Download": {
                            "ativa": false,
                            "html": `
                                <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                            `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "#000000",
                    // "fundo": "#011C41",
                    // "icones": "white",
                    // Cores de icones Especificas
                    // "iconesEspecificos":{
                    //     ".openAnnotation":{
                    //         "cor":"white",
                    //     }  
                    // }
                },
                "configuracoes_gerais": {},
                "fonte": {
                    // "titulo":"1rem",
                    "paragrafos": "1rem",
                    // "font_familly":"Lato",
                    // "cor_fonte":"black",
                    "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                // "animacao_texto": [{
                //     "indice": "all", // 0 | all
                //     "script_animation": `
                //         animate__animated animate__fadeInDown animate__slow
                //     `
                // }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
                }],
                "modulos": []
    
            }
        },
    
        // PÁGINA 29 Síntese da Unidade
        /*
            FILTRO
                ------> pg[29]
                ------> CM[Síntese da Unidade]
            AQUI ÉA PÁGINA DE Síntese da Unidade
            
        */
        {
            "pagina": 29,
            "nome_page": `Síntese da Unidade`,
            "tipo": "Texto",
            "id_page": ".content-render-api",
            "id_component": ".c-carousel__slides",
            "id_elemento_para_modificar": "container-texto",
            "data": {
                "container_render": `
    
                   <div class="pagina-tipo-texto p-4  animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound bg-white p-5 rounded-3 shadow-lg">
                            <div>
                                <p class="mb-4">Além do que já foi mencionado nas unidades I e II respectivamente, o <i>personal training</i> deverá
    entender o básico da prescrição de exercícios resistidos, considerando o controle e monitoramento das principais
    variáveis desse tipo de treinamento (volume, frequência, carga, seleção dos exercícios, tipo de ação muscular,
    duração de intervalo de descanso, duração da repetição, ordem dos exercícios amplitude de movimento).</p>
                                <p class="mb-4">A prescrição deverá ser realizada somente após uma avaliação física,
                                    para que o programa seja direcionado, de acordo com as limitações e necessidades do
                                    aluno.</p>
                                <p class="mb-4">Além disso, é importante destacar a prescrição do exercício aeróbico, que envolve o controle de volume,
    intensidade e métodos, além do gerenciamento das cargas interna e externa. A correta aplicação dos princípios do
    treinamento físico é crucial para garantir a eficácia e a segurança do programa.</p>
                                
                            </div>
                            <div>
                                <p class="rough-sintese" style="color:#011c41;font-style:italic;font-weight:600;">Até Breve</p>
                            </div>
                        </div>
                    </div>
    
    
                `,
            },
            "forcarAtualizacao": {
                "variaveis": [
                    {
                        "Nome": "--animacao-sidebar",
                        "Entrada": "none",
                        "Saida": "slideDown 2s forwards"
                    }
                ]
            },
            "paramentros": {
                "lupa": "Yes",
                "inserir_estilo_pagina": [
                    {
                        "url": "" // Colocar o Estilo somente nessa Página
                    }
                ],
                "inserir_escript_pagina": [
                    {
                        "onde": "body",
                        "posicao": "beforebegin",
                        "src": "./conf/js/saibaMais.js"
                    }
                ],
                "ferramentas": [
                    {
                        "container": "icons-action--container",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                                <i data-lucide="audio-lines"></i>
                                            </button>
                                        `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                                <i data-lucide="video"></i>
                                            </button>
                                        `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                                <i data-lucide="pencil-ruler"></i>
                                            </button>
                                        `
                        },
                        "FullScreen": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                                <i data-lucide="maximize-2"></i>
                                            </button>
                                        `
                        },
    
                    },
                    {
                        "container": "icons-action--container-mobile",
                        "Podcast": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-podcast">
                                                <i data-lucide="audio-lines"></i>
                                            </button>
                                        `
                        },
                        "Videoaula": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-videoaula">
                                                <i data-lucide="video"></i>
                                            </button>
                                        `
                        },
                        "Ferramentas": {
                            "ativa": true,
                            "html": `
                                            <button class="btn-ferramentas" aria-label="close">
                                                <i data-lucide="pencil-ruler"></i>
                                            </button>
                                        `
                        },
    
                    },
                    {
                        "container": "box-tools-inline",
                        "Resulmo": {
                            "ativa": true,
                            "html": `
                                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                            
                                        `
                        },
                        "Destacar": {
                            "ativa": true,
                            "html": `
                                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                        `,
                            "acionador": `
                
                                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                                <div class="cores-destaque-inline-btn">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                 </div>
                                            </div>
                
                                        `
                        },
                        "Notas": {
                            "ativa": true,
                            "html": `
                                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                        `
                        },
                        "Ouvinte": {
                            "ativa": true,
                            "html": `
                                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                        `
                        },
                        "Download": {
                            "ativa": true,
                            "html": `
                                            <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                        `
                        },
                        "Dicionario": {
                            "ativa": true,
                            "html": `
                                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                        `
                        },
                        "close": {
                            "ativa": true,
                            "html": `
                                              <button><i data-lucide="x" id="close_box"></i></button>
                                        `
                        },
                    }
    
                ],
                "cores": {
                    // "sidebar": "red",
                    // "fundo": "red",
                    // "icones": "rgb(0, 110, 201)"
                },
                "configuracoes_gerais": {
    
                    // Habilitar Procurar de Paragrafos ná Pagina 2
                    "_procurar_paragrafos": {
                        "status": true,
                        "onde_procurar": ".pagina-tipo-texto--box-texto",
                    },
                    "_procurar_animacao": {
                        "status": true,
                        "onde_procurar_animacao": ".animation",
                    }
                },
                "fonte": {
                    "titulo": "1rem",
                    // "paragrafos": "1rem",
                    "font_familly": "Lato",
                    // "cor_fonte":"black",
                    // "alinhamento_texto": "justify",
                    "hifens": "auto"
                },
                "logo": {
                    "ativar": true,
                    "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                    "tamanho": "10%",
                },
                // Animação para Texto API
                "animacao_texto": [{
                    "indice": "all", // 0 | all
                    "script_animation": `
                        animate__animated animate__fadeInDown animate__slow animate__delay-1s
                    `
                }],
                // Animação pra toda Página
                "animacao_elemento": [{
                    "elemento": ".animation", // 0 | all
                    "script_animation": `
                                animate__animated animate__fadeInDown animate__slow
                            `
                }],
                "modulos": [
                    {
                        "audio": {
                            "ativo": true,
                            "idRef": ".ouvinte-sound"
                        },
                        "toolbar": {
                            "ativo": false,
                            "refTools": ['editar'],
                            "idRef": ".pagina-tipo-texto--box-texto",
                            "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                        }
                    }
                ]
            }
        },
    
        // PÁGINA 30 Referências
        /*
            FILTRO
                ------> pg[30]
                ------> CM[Referências]
            AQUI ÉA PÁGINA DE Referências
            
        */
            {
                "pagina": 30,
                "nome_page": "Referências",
                "tipo": "Texto",
                "id_page": ".content-render-api",
                "id_component": ".c-carousel__slides",
                "id_elemento_para_modificar": "container-texto",
                "data": {
                    "container_render": `
                            
                            <div class="pagina-tipo-texto animation">
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound p-4">
                                    <div class="container container-referencia bg-white rounded-3 shadow-lg">
            
                                        <div class="row lista-referencias-bibliograficas ">
            
                                            <div class="col-md-7">
                                                <ul>
                                                     <li>
                                                       CALDAS, Leonardo C. et al. Traditional vs. undulating
                                                       periodization in the context of muscular strength and
                                                       hypertrophy: a meta-analysis. Int J Sports Sci, v. 6, n. 6, p.
                                                       219-29, 2016.</li>
                                                    <li>
                                                         EVANS, Jonathan W. Periodized resistance training for enhancing
                                                         skeletal muscle hypertrophy and strength: A mini-review.
                                                         Frontiers in physiology, v. 10, p. 436344, 2019.</li>
                                                    
                                                    <li>
                                                         FLECK, Steven J.; KRAEMER, William J. Fundamentos do
                                                         treinamento de força muscular. Artmed Editora, 2017.</li>
                                       
                                                    <li>
                                                         GRGIC, Jozo et al. Effects of linear and daily undulating periodized resistance training programs on measures of
                                                        musclehypertrophy: a systematic review and meta-analysis. PeerJ, v. 5, p. e3695, 2017.</li> 
                                                        
                                                        <li>
                                                         GRGIC, Jozo et al. Should resistance training programs aimed at
                                                         muscular hypertrophy be periodized? A systematic review of
                                                         periodized versus non-periodized approaches. Science & sports,
                                                         v. 33, n. 3, p. e97-e104, 2018.</li>

                                                         <li>
                                                         KRAEMER, William J. et al. Understanding the science of
                                                         resistance training: An evolutionary perspective. Sports
                                                         medicine, v. 47, p. 2415-2435, 2017.</li>

                                                         <li>
                                                          MOESGAARD, Lukas et al. Effects of periodization on strength and muscle hypertrophy in volume-equated resistance
                                                            training programs: a systematic review and meta-analysis. Sports Medicine, v. 52, n. 7, p. 1647-1666, 2022.</li>

                                                        <li>
                                                          SALLES, B. F. Métodos de treinamento para força e hipertrofia:
                                                          da pratica a teoria. Belo Horizonte. Livro na mão, 2020.</li>

                                                          <li>
                                                          SHOENFELD B. Hipertrofia Muscular, Ciência e Prática. 2° Edição, Manole, 2022.
                                                        </li>

                                                   
                                                                                   
                                                </ul>
                                            </div>
            
                                            <div class="col-md-5">
                                                
                                                <img src="${_prefixUnidade}LogoReferencia.png" class="img-fluid rounded shadow-lg" alt="Logo Referência">
            
                                            </div>
            
                                        </div>
            
            
                                    </div>
                                </div>
                            </div>
            
            
                        `,
                },
                "forcarAtualizacao": {
                    "variaveis": [
                        {
                            "Nome": "--animacao-sidebar",
                            "Entrada": "none",
                            "Saida": "slideDown 2s forwards"
                        }
                    ]
                },
                "paramentros": {
                    "lupa": "Yes",
                    "inserir_estilo_pagina": [
                        {
                            "url": "./conf/css/referenciasBibliograficas.css" // Colocar o Estilo somente nessa Página
                        }
                    ],
                    "inserir_escript_pagina": [
                        {
                            "onde": "body",
                            "posicao": "beforebegin",
                            "src": ""
                        }
                    ],
                    "ferramentas": [
                        {
                            "container": "icons-action--container",
                            "Podcast": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                                        <i data-lucide="audio-lines"></i>
                                                    </button>
                                                `
                            },
                            "Videoaula": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                                        <i data-lucide="video"></i>
                                                    </button>
                                                `
                            },
                            "Ferramentas": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                                        <i data-lucide="pencil-ruler"></i>
                                                    </button>
                                                `
                            },
                            "FullScreen": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                                        <i data-lucide="maximize-2"></i>
                                                    </button>
                                                `
                            },
        
                        },
                        {
                            "container": "icons-action--container-mobile",
                            "Podcast": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-podcast">
                                                        <i data-lucide="audio-lines"></i>
                                                    </button>
                                                `
                            },
                            "Videoaula": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-videoaula">
                                                        <i data-lucide="video"></i>
                                                    </button>
                                                `
                            },
                            "Ferramentas": {
                                "ativa": true,
                                "html": `
                                                    <button class="btn-ferramentas" aria-label="close">
                                                        <i data-lucide="pencil-ruler"></i>
                                                    </button>
                                                `
                            },
        
                        },
                        {
                            "container": "box-tools-inline",
                            "Resulmo": {
                                "ativa": true,
                                "html": `
                                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                                    
                                                `
                            },
                            "Destacar": {
                                "ativa": true,
                                "html": `
                                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                                `,
                                "acionador": `
                        
                                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                                        <div class="cores-destaque-inline-btn">
                                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                                <button class="toolbar-button" id="limpar">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                                    Limpar
                                                                </button>
                                                         </div>
                                                    </div>
                        
                                                `
                            },
                            "Notas": {
                                "ativa": true,
                                "html": `
                                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                                `
                            },
                            "Ouvinte": {
                                "ativa": true,
                                "html": `
                                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                                `
                            },
                            "Download": {
                                "ativa": true,
                                "html": `
                                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                                `
                            },
                            "Dicionario": {
                                "ativa": true,
                                "html": `
                                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                                `
                            },
                            "close": {
                                "ativa": true,
                                "html": `
                                                      <button><i data-lucide="x" id="close_box"></i></button>
                                                `
                            },
                        }
        
                    ],
                    "cores": {
                        // "sidebar": "red",
                        // "fundo": "red",
                        // "icones": "rgb(0, 110, 201)"
                    },
                    "configuracoes_gerais": {
        
                        // Habilitar Procurar de Paragrafos ná Pagina 2
                        "_procurar_paragrafos": {
                            "status": true,
                            "onde_procurar": ".pagina-tipo-texto--box-texto",
                        },
                        "_procurar_animacao": {
                            "status": true,
                            "onde_procurar_animacao": ".animation",
                        }
                    },
                    "fonte": {
                        "titulo": "1rem",
                        // "paragrafos": "1rem",
                        "font_familly": "Lato",
                        // "cor_fonte":"black",
                        // "alinhamento_texto": "justify",
                        "hifens": "auto"
                    },

                    "logo": {
                        "ativar": true,
                        "img": "url(../assets/logopreta1.png)",
                    "posicaoY": "bottom 130%",
                    "posicaoX": "left 0%",
                        "tamanho": "10%",
                    },

                    
                    // Animação para Texto API
                    "animacao_texto": [{
                        "indice": "all", // 0 | all
                        "script_animation": `
                                animate_animated animatefadeInDown animate_slow
                            `
                    }],
                    // Animação pra toda Página
                    "animacao_elemento": [{
                        "elemento": ".animation", // 0 | all
                        "script_animation": `
                                        animate_animated animatefadeInDown animate_slow
                                    `
                    }],
                    "modulos": [
                        {
                            "audio": {
                                "ativo": true,
                                "idRef": ".ouvinte-sound"
                            },
                            "toolbar": {
                                "ativo": true,
                                "refTools": ['editar'],
                                "idRef": ".pagina-tipo-texto--box-texto",
                                "blocoRenderizacao": `
                                            <div id="toolbar" style="display: none; position: absolute;">
                                                <div class="toolbar-container">
                                                    <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                        <div class="cores-destaque">
                                                            <span class="corTexto" style="background-color:#dc3545" data-cor="#dc3545" data-color="white"></span>
                                                            <span class="corTexto" style="background-color: #198754;" data-cor="#198754"  data-color="white"></span>
                                                            <span class="corTexto" style="background-color: #0d6efd;" data-cor="#0d6efd"  data-color="white"></span>
                                                            <button class="toolbar-button" id="limpar">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                                Limpar
                                                            </button>
                                                            
                                                        </div>
                                                    </div>
                                                    <button class="toolbar-button" id="resumo">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                        Resumo
                                                    </button>
                                                    <button class="toolbar-button" id="destacar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                        Destacar
                                                    </button>
                                                    <button class="toolbar-button" id="dicionario-toolbar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                        Dicionário
                                                    </button>
                                                    
                                                </div>
                                            </div>
                
                                       `
                            }
                        }
                    ]
                }
            },
        


];