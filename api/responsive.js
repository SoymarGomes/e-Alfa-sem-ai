const responsivo = [
    {   
        // Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        // Que tipo de quebra Tem que Fazer
        "media" : "(max-width: 1240px)", // Apenas a condição dentro dos parênteses
        // Estilos que podem vir adicionais
        "synchronous" : `
        .pagina-tipo-texto--box-texto p{
         /* margin-bottom: 0.3rem !important; */
        font-size: 1rem !important; 
        /* background-color: aqua;*/
        }

        .header-title p {
        margin-bottom: 0.3rem !important;

        }

        .carrosel--container {
        background-position-x: 50%;
        background-position-y: 50%;
        }

        svg {
        padding: 2px !important;

        }

        #dots {
        bottom: 8%;
        align-items: normal;
        position: relative !important;
        left: 0% !important;
        }

        .animated-text {
        font-size: 4vw;
        }

        #second-text {
        font-size: 2.5vw;
        }

        #animated-button {
        margin-top: 15px;
        font-size: 1.8vw;
        }

        .sidebar-menu {
        width: 300px;
        height: 21rem;
        padding: 0.8rem;
        }

        .sidebar-menu header {
        padding: 0.2rem;
        }

        .mola-encardernamento {
        width: 9%;
        height: 92%;
        margin-left: -1.85rem;
        background-size: 100%;
        }

        .render-menu a {
        height: 35px;
        font-size: 13px !important;
        }

        .searcListMateria {
        margin: 0.3rem 0;
        }

        .sidebar-menu-Annotation {
        width: 300px;
        height: 20rem;
        }

        .sidebar-menu-Annotation header {
        padding: 0.2rem;
        }

        hr {
        margin: 0.2rem 0;
        }

        .searcListKeyWord {
        margin: 0.1rem 0;
        }

        .searcListKeyWord span {
        padding: 0 0.5rem;
        }

        .container-searcListKeyWord button {
        margin: 0.2rem;
        }

        .render-menu-Annotation {
        padding-right: 0;
        }

        .sidebar-menu header p:nth-of-type(1){
        font-size:1rem;
        }

        .sidebar-menu header p:nth-of-type(2){
        font-size:.7rem;
        }

        #image-capaOverlay {
        max-width: 10% !important; 
        }

        .olcards li .content .text {
        font-size: 0.8rem !important;
        text-align: justify;
        }

        .olcards, .olcards * {
        margin: -1px 0 !important;
        }

        .olcards li .content {
        padding: 0.6rem !important;
        }

        .message-text {
        font-size: 18px;
        }

        .dicionario-menu {
        width: 300px;
        height: 21rem;
        padding: 0.8rem;
        gap: 0.5rem;
        }
        .dicionario-menu header {
        padding: 0.2rem;
        }

        .dicionario-menu header p:nth-of-type(1) {
        font-size: calc(var(--tamanho-do-texto-do-paragrafo-header) - 0.2rem);
        }
        .mt-3 {
        margin-top: 0.25rem !important;
        }

        .btn {
        padding: .175rem .45rem !important;
        font-size: 0.8rem !important;
        margin-top: 0.25rem !important;

        }

        .titulo {
        font-size: 1.2rem;
        }

        .searchDicionario {
        margin: 0;
        }

        .form-select {
        padding: .275rem 2.25rem .275rem .30rem !important;
        font-size: 0.85rem !important;

        }

        label {
        font-size: 0.8rem;
        }

        .accordion-body {
        gap: 0 1rem !important;
        display: flex !important;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        }

        /*
        .modal-content{
        width: 81% !important;
        }

        */

        #button-Dowload-Ouvinte{
        max-width: 82%;
        height: 2rem !important;
        }

        .resumo-menu {
        width: 375px;
        height: 21rem;
        padding: 0.8rem;
        gap: 0.5rem;
        }

        .text-success {
        font-size: 0.8rem;
        }

        strong.data-generacao {
        font-size: 0.8rem;
        }

        .resumo-menu header p:nth-of-type(1) {
        font-size: 1rem !important;
        }
        .result-resumo-items p {
        font-size: calc(var(--font-para-paragrafos) - 4px) !important;
        }

        .dropdown-item {
        font-size: .8rem;

        }

        .modal-content-imagem {
        max-width: 100%;
        }

        .accordion section h2 {
        font-size: 1rem !important;
        }

        .flip-card-front, .flip-card-back {
        font-size: 1rem;
        }

        .flip-card {
        width: 390px;
        height: 259px;
        margin: 5px;
        }

        li {
        text-align: left;
        font-size: 1rem;
        }

     
        `,



        // Atualização Forçada onde ele está aparecendo
        "variantes":`
            --tamanho-de-font-para-paragrafo-sidebar=[1rem];
            --tamanho-dos-icones-siderbar=[2rem];
            --tamanho-x-y-imagem=[7%];
            --width=[40px];
           --height=[40px];
        //    --tamanho-do-texto-do-paragrafo-header=[1.2rem];
            // --font-para-paragrafos=[1rem]
        `,
        "atualizacaoBrutaElementos":[
            // Exemplos de atualizações brutas de elementos
            // {
            //     "Elemento":"p",
            //     "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            //      "scriptAtualizacao":`
            //          [document.querySelectorAll(p)] => var[p] {
            //              p.fontSize = 2rem;
            //          }
            //      `
            // }
        ]
    },
    {   
        // Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        // Que tipo de quebra Tem que Fazer
        "media" : "(min-width: 1241px) and (max-width: 1279px)", // Apenas a condição dentro dos parênteses
        // Estilos que podem vir adicionais
        "synchronous" : `

         
        .pagina-tipo-texto--box-texto p{
         font-size: 1rem !important; 
        }

        .accordion section h2 {
        font-size: 1rem !important;
        }
        .carrosel--container {
        background-position-x: 50%;
        background-position-y: 50%;
        }

        #important-saber{
        position: absolute;
        width: 28%;
        left: -13%;
        z-index: 100;
        }

        #para-pensar{
        position: absolute;
        width: 20%;
        left: -7%;
        // top: -27%;
        z-index: 100;
        }

        .animated-text {
        font-size: 3vw;
        }

        #second-text {
        font-size: 2vw;
        }

        #animated-button {
            margin-top: 15px;
            font-size: 1.8vw;
        }

        .sidebar-menu {
        height: 21rem;
        top: 55%;
        width: 380px;
            }

        .sidebar-menu header p:nth-of-type(1) {
        font-size: 1.2rem;
                }

        .mola-encardernamento {
        margin-left: -2.1rem;
        height: 91%;}

        .sidebar-menu-Annotation {
        height: 21rem;        
        }

        .sidebar-menu-Annotation header {
        padding: 0rem;
        }

        .content-box-anotation p {
        font-size: 1rem;    
        }

        .resumo-menu {
        height: 21rem;
        }

        .dicionario-menu {
        height: 21rem;
        gap: .5rem;
        }

        .dicionario-menu header p:nth-of-type(1) {
        font-size: 1.2rem;}

        .dicionario-menu header {
        padding: 0.2rem;
        }

        .dicionario-adds {
        --wh: 30px;
        }

        .btn {
        padding: 3px 6px !important;
        font-size: 13px !important;
        }
        
        .col-md-4 {
        width: 28%;
         }

         .col-md-4-5 {
        width: 28%;
    }

    .flip-card-front, .flip-card-back {
        font-size: 1rem;
        }

        .flip-card {
        width: 300px;
        height: 259px;
        }

        li {
        text-align: left;
        font-size: 1rem;
        }
        



    
    `,



        // Atualização Forçada onde ele está aparecendo
        "variantes":`
            --tamanho-de-font-para-paragrafo-sidebar=[1rem];
            --tamanho-dos-icones-siderbar=[2rem];
            --tamanho-x-y-imagem=[7%];
            --width=[40px];
           --height=[40px];
        //    --tamanho-do-texto-do-paragrafo-header=[1.2rem];
            // --font-para-paragrafos=[1rem]
        `,
        "atualizacaoBrutaElementos":[
            // Exemplos de atualizações brutas de elementos
            // {
            //     "Elemento":"p",
            //     "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            //      "scriptAtualizacao":`
            //          [document.querySelectorAll(p)] => var[p] {
            //              p.fontSize = 2rem;
            //          }
            //      `
            // }
        ]
    },
    {   
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media" : "(max-width: 480px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous" : `
        .message-box {
        display: block !important;
        }

        .olcards--divisor {
        display: contents !important;
        }

        .olcards {
        align-items: flex-start !important;
        }

        .olcards li .content {
        text-align: justify !important;
        }

        #accordionApresentacao {
        display: block !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .marca-da-agua {
        display:none !important;

        }

        .glider-prev {
        left: 0px !important;
        }

        .glider-next {
        right: 0px !important;
        }

        .pagina-tipo-texto--box-texto p {
        font-size: 1.5rem !important;
        }

        .carrosel--container {

        background-size: 370% !important;
        background-position-x: 36% !important;
        }

        .container-img-lightbox-fluid {
        flex-direction: column !important;
        height: auto !important;
        padding: 4rem !important;

        }

        .transcritor--box-audio {
        display: none;

        }

        .container-audio-render-result {
        flex-direction: column;
        }

        #carrosel-audio {
        height: auto;
        }

        .plyr{
        min-width: 280px;
        }

        .container-toools-info-audio {
        width: 85% !important;
        }

        .pagina-tipo-video--box-video{
        height: 30%;
        width: 100%;
        flex-wrap: wrap;
        }

        .f-thumbs__track {
        flex-direction: row
        }

        .f-carousel__thumbs {
        width: 100%
        }

        #prancheta {
        width: 417px;
        height: 423px;
        }

        #pprancheta {
         font-size: 1.1rem !important; 
        }

        #textoprancheta{        
        width: 75%;
        }

        .h4, h4 {
        font-size: calc(1.275rem + 2.3vw);
        }

       li {
        font-size: 1.5rem !important;
        }    
        
        a.btn.btn-outline-secondary.d-inline-flex.align-items-center.gap-2 {
        font-size: 1.5rem !important;
        }

        pdestaque.destaque.animate__animated.animate__fadeInDown.animate__slow {
        font-size: 1.5rem !important;
        }

        pdestaque {
        font-size: 1.5rem !important;
        width: 95% !important;
        }

        #para-pensar {
        position: unset;
        width: 80%;
        left: auto;
        top: 0%;
        }

        .para-pensar-elemento--box {
        width: 100%;
        padding: 10px !important;
        text-align: justify;
        }

        pimportant {
        font-size: 1.5rem;
        }

        .contentMind {
        font-size: 1.5rem !important;
        }

        #important-saber {
        position: unset;
        width: 80%;
        left: auto;
        }

        .important-saber-elemento--box {
        width: 100%;
        padding: 10px;
        text-align: justify;
        }

        .objetivo-aprendizagem-elemento {
       justify-content: flex-start !important; 
        }

        .objetivo-aprendizagem-elemento--img-title {
        margin-top: 0;
        }

        .objetivo-aprendizagem-elemento img {
        top: 0px !important;
        }
        .col-12.col-md-4-5.text-center.position-absolute {
        top: 90%;
        }   

        .row {
        position: relative;
        // top: 6%;
        flex-direction: column;
        justify-content: center;
        }

        .pagina-tipo-texto--box-texto--grid{
        display: inline-table;    
        }

        .flip-card-front, .flip-card-back {
        font-size: 1.5rem;
        }

        .flip-card {
        
            width: 300px;
            height: 550px;
        }
            
        .container-button{
        flex-direction: column;
        }  

        .btn-modal {
        font-size: 1.5rem;
        }

        .card-text {
        font-size: 1.5rem;
        }

        .lista-referencias-bibliograficas {
        height: auto !important;
        }

        .container-referencia {
        height: auto !important;
        }

        
    `,

        // Atualização Forçada onde ele está aparecendo
        "variantes":`
            --tamanho-de-font-para-paragrafo-sidebar=[1rem];
            --tamanho-dos-icones-siderbar=[2rem];
            --tamanho-x-y-imagem=[7%];
            --width=[40px];
           --height=[40px];
        //    --tamanho-do-texto-do-paragrafo-header=[1.2rem];
            // --font-para-paragrafos=[1rem];
            
        `,
        "atualizacaoBrutaElementos":[
            // Exemplos de atualizações brutas de elementos
            // {
            //     "Elemento":"p",
            //     "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
            //      "scriptAtualizacao":`
            //          [document.querySelectorAll(p)] => var[p] {
            //              p.fontSize = 2rem;
            //          }
            //      `
            // }
        ]
    },
    {   
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media" : "(min-width: 481px) and (max-width: 980px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous" : `

        .message-box {
        display: block !important;
        }

        .olcards--divisor {
        display: contents !important;
        }

        .olcards {
        align-items: flex-start !important;
        }

        .olcards li .content {
        text-align: justify !important;
        }

        #accordionApresentacao {
        display: block !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .marca-da-agua {
        display:none !important;
        }

        .glider-prev {
        left: 0px !important;
        }

        .glider-next {
        right: 0px !important;
        }

        #accordionApresentacao {
        display: block !important;
        font-size: 2rem !important;
        }

        .accordion-flush .accordion-item {
        margin-top: 0.5rem !important;
        }

        .pagina-tipo-texto--box-texto p {
        font-size: 2rem !important;
        }

        .olcards li .content .text {
        font-size: 2rem !important;
        text-align: left !important;

        }

        .message-text {
        font-size: 2rem !important;
        }

        .accordion-button {
        font-size: 2rem !important;
        }

        .message-box--divisor {
        justify-content: center;
        }

        .container-img-lightbox-fluid {
        padding: 8rem;
        flex-direction: column;
        width: 80%;
        height: auto;
        }

        .modal-content-imagem {
        max-width: 700px !important;
        }

        .objetivo-aprendizagem-elemento img {
        width: 31% !important;
        top: 0 !important;
        }

        .h4, h4 {
        font-size: 2.2rem !important;
        }

        .col-md-8 {
        width: 100% !important;
        }

            .col-md-4 {
        width: 50%;
        }

        #prancheta {
        width: 600px;
        height: 600px;
        max-width: 180%;
        }

        #textoprancheta {
        width: 49%;
        }

        #pprancheta {
        font-size: 1.7rem !important;
       }

                .row {
        position: relative;
        // top: 6%;
        flex-direction: column;
        justify-content: center;
        }

        .list-group-numbered {
        font-size: 2rem;
        }

        #para-pensar {
        width: 80%;
        left: auto;
        top: -70%;
        }

        .para-pensar-elemento--box {
        width: 100%;
        padding: 10px;
        text-align: justify;
        }

        pimportant {
        font-size: 1.5rem;
        }

        .contentMind {
        font-size: 1.5rem !important;
        }

        #important-saber {
        width: 80%;
        left: auto;
        top: -33%;
        }

        .important-saber-elemento--box {
        width: 100%;
        padding: 10px;
        text-align: justify;
        }

        .col-12.col-md-4-5.text-center.position-absolute {
        top: 90%;
        }   

        .col-md-9-5 {
        width: 100%;
        }

        .col-md-4-5 {
        width: 100%;
        }

        .accordion section:target h2 {
        width: 50%;
        font-size: 2rem !important;
        } 
        
        .align-accordion { 
        height: 100% !important;
        
        }

        .accordion section .box {
        height: max-content !important;
        }

         .accordion section h2 {
            width: 20rem !important; 
            font-size: 2rem !important;
        }  

        pdestaque {
        font-size: 2rem !important;
        }

            .pagina-tipo-texto--box-texto {
            justify-content: center !important;
        }

        .pagina-tipo-video--box-video {
        width: 100% !important;
        }

        li {
        font-size: 2rem !important        
        }

        .col-md-6 {
        width: 100%;
        }

        .btn {
        font-size: 2rem !important;
        }

        .accordion-saibamais {
        font-size: 2rem;    
        }

        .continue-application {
        font-size: 2.5rem;
            width: 30%;
        
        }

         .pagina-tipo-texto--box-texto--grid{
         position: absolute;
        top: 1%;
        display: inline-table;    
        }

        .flip-card-front, .flip-card-back {
        font-size: 1.5rem;
    }

    .flip-card {
    
        width: 300px;
        height: 400px;
    }

        
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes":`
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        --width=[40px];
        --height=[40px];
        // --tamanho-do-texto-do-paragrafo-header=[1.2rem];
        // --font-para-paragrafos=[1rem];
        // --imgem-fundo-tamanho-x-y-imagem=[260%];
        --imgem-fundo-carrosel-posicao-x-imagem=[left 31.5%];

        `,
        "atualizacaoBrutaElementos":[
        // Exemplos de atualizações brutas de elementos
        // {
        // "Elemento":"p",
        // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
        // "scriptAtualizacao":`
        // [document.querySelectorAll(p)] => var[p] {
        // p.fontSize = 2rem;
        // }
        // `
        // }
        ]
    },
    {   
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media" : "(min-width: 1280px) and (max-width: 1516px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous" : `

        
        #pprancheta {
        margin-top: .5rem;
        font-size: 1.2rem !important;
    
        }

        
        #prancheta {
             width: 500px;
            height: 540px;
            max-width: 170%;
        }

        #important-saber{
        position: absolute;
        width: 32%;
        left: -17%;
        z-index: 100;
        }    

         #para-pensar{
                left: -10%; 
                         
        }

        a.btn.btn-outline-secondary.d-inline-flex.align-items-center.gap-2 {
        font-size: 2rem !important;
        }

        .accordion-saibamais {
        font-size: 2rem;
         }

         pdestaque {
         font-size: 1.5rem !important;
         width: 100% !important;
        }

        p.text-mute {
        font-size: 1rem;
            }

        div[vw] {
        top: 60% !important;
        }

            .pagina-tipo-texto--box-texto ol, ul, li {
        font-size: calc(var(--font-para-paragrafos) + .6rem) !important;
        width: 95%;
        }

            .pagina-tipo-texto--box-texto h1, h4, h3, h4, h5, h6 {
        font-size: calc(var(--font-para-paragrafos) + 1.5rem) !important;
        }

        li {
        text-align: left;
        }

         

        

         

        
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes":`
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        --width=[40px];
        --height=[40px];
        // --tamanho-do-texto-do-paragrafo-header=[1.2rem];
        // --font-para-paragrafos=[1rem];
        // --imgem-fundo-tamanho-x-y-imagem=[260%];
        --imgem-fundo-carrosel-posicao-x-imagem=[left 31.5%];

        `,
        "atualizacaoBrutaElementos":[
        // Exemplos de atualizações brutas de elementos
        // {
        // "Elemento":"p",
        // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
        // "scriptAtualizacao":`
        // [document.querySelectorAll(p)] => var[p] {
        // p.fontSize = 2rem;
        // }
        // `
        // }
        ]
    },

    {   
        //Onde o Estilo tem que aparecer
        "Tipo": "All", // Pode ser "All" para todas as páginas ou um número específico para uma página
        //Que tipo de quebra Tem que Fazer
        "media" : "(min-width: 1517px)", // Apenas a condição dentro dos parênteses
        //Estilos que podem vir adicionais
        "synchronous" : `

        #pprancheta {
        margin-top: .5rem;
        font-size: 1.8rem !important;    
        }

            p.text-mute {
        font-size: 1rem;
        }
        
        #prancheta {
        width: 700px;
        height: 700px;
        max-width: 170%;
    }

        #important-saber{
        position: absolute;
        width: 32%;
        left: -17%;
        z-index: 100;
        }    

         #para-pensar{
                left: -10%; 
                         
        }

        a.btn.btn-outline-secondary.d-inline-flex.align-items-center.gap-2 {
        font-size: 2rem !important;
        }

        .accordion-saibamais {
        font-size: 2rem;
         }

         .list-group-item {
        padding: 1rem;
        }

        pdestaque {
        font-size: 2.4rem !important;
        }

        .socialContainer {
        font-size: 2rem;
        }

        .btn-modal {
        font-size: 1.5rem;
        }

        .card-text {
        font-size: 1.5rem;
        }

        .border-dashed {
        margin-right: 3rem !important;
        }

        li {
        text-align: left;
        font-size: 2.2rem !important;
        }

        .lista-referencias-bibliograficas ul li {
        font-size: 1.5rem !important;
        }

            .pagina-tipo-texto--box-texto ol, ul, li {
        font-size: calc(var(--font-para-paragrafos) + .6rem) !important;
        }

        

        

         

        
        `,

        // Atualização Forçada onde ele está aparecendo
        "variantes":`
        --tamanho-de-font-para-paragrafo-sidebar=[1rem];
        --tamanho-dos-icones-siderbar=[2rem];
        --tamanho-x-y-imagem=[7%];
        --width=[40px];
        --height=[40px];
        // --tamanho-do-texto-do-paragrafo-header=[1.2rem];
        // --font-para-paragrafos=[1rem];
        // --imgem-fundo-tamanho-x-y-imagem=[260%];
        --imgem-fundo-carrosel-posicao-x-imagem=[left 31.5%];

        `,
        "atualizacaoBrutaElementos":[
        // Exemplos de atualizações brutas de elementos
        // {
        // "Elemento":"p",
        // "Ranger":[...10] // ranger 1 a 10 Ex: [1,2,3,4] ou [...10] ou all
        // "scriptAtualizacao":`
        // [document.querySelectorAll(p)] => var[p] {
        // p.fontSize = 2rem;
        // }
        // `
        // }
        ]
    }
];

// Função para aplicar variantes CSS dinamicamente
function aplicarVariantes(variantes, media) {
    // Verificar se a condição da media query é verdadeira
    if (window.matchMedia(media).matches) {
        // Dividir as variantes por ponto e vírgula
        const variaveis = variantes.split(';');
        
        variaveis.forEach(variavel => {
            if (variavel.trim()) {
                // Remover espaços em branco
                variavel = variavel.trim();
                
                // Encontrar o índice do símbolo '=' para separar o nome e o valor
                const index = variavel.indexOf('=');
                
                if (index !== -1) {
                    // Extrair o nome da variável
                    const nomeVariavel = variavel.substring(0, index).trim();
                    
                    // Extrair o valor da variável, removendo os colchetes
                    const valorVariavel = variavel.substring(index + 1).replace('[', '').replace(']', '').trim();
                    
                    // Aplicar a variável CSS dinamicamente
                    document.documentElement.style.setProperty(nomeVariavel, valorVariavel);
                }
            }
        });
    }
}

// Função para processar as configurações responsivas da página
function responsivePage(slideIndex){
    const pageData = api[slideIndex];

    // Página para Exibir Estilos
    const idPage = pageData.pagina;
    
    // Remove os estilos anteriores antes de aplicar novos
    removerEstilosAnteriores();

    // Verificar se é para todas as páginas ou uma página específica
    responsivo.forEach(config => {
        // Se for "All", aplica para todas as páginas
        if (config.Tipo === "All") {
            aplicarVariantes(config.variantes, config.media);
            adicionarEstilos(config.media, config.synchronous, slideIndex);
        } 
        // Senão, aplica apenas para a página especificada
        else if (config.Tipo === idPage) {
            aplicarVariantes(config.variantes, config.media);
            adicionarEstilos(config.media, config.synchronous, slideIndex);
        }
    });
}

// Função para adicionar estilos com base na media query
function adicionarEstilos(media, estilos, slideIndex) {
    // Gera um ID único para cada combinação de slideIndex e media query
    const styleId = `style-slide-${slideIndex}-${media.replace(/\W+/g, '-')}`;
    const existingStyle = document.querySelector(`#${styleId}`);

    if (!existingStyle) {
        // Cria um elemento de estilo com ID único
        const estilo = document.createElement('style');
        estilo.type = 'text/css';
        estilo.id = styleId; // Atribui um ID ao estilo

        // Adiciona os estilos dentro da media query especificada
        estilo.innerHTML = `@media screen and ${media} { ${estilos} }`;

        document.head.appendChild(estilo);
    }
}

// Chamada para a função responsiva
responsivePage(savedPosition);

// Função para remover os estilos anteriores ao mudar de slide
function removerEstilosAnteriores() {
    const oldStyles = document.querySelectorAll('style[id^="style-slide-"]');
    oldStyles.forEach(style => {
        style.remove();
    });
}

// Chama a função responsiva para o slide atual
responsivePage(savedPosition);

