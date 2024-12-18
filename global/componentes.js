



async function openQuestionEva(elemento){
    
    const configuracaoData = await global__Config();
    const config = configuracaoData.ceumaAI
    // console.log(config)
    const { contexto } = config;
    const btn = document.querySelector(".resumo__eva_button____lista");

    const container = document.querySelector(elemento);
    // console.log(container.innerText)
    // Chama a função que gera o resumo
    resumoAI(container.innerText, contexto, "Explique cada item dessa lista de forma enumerada", "Estudante Leigo", 10, "2 linha",null,null,false).then(resumo => {
        
        container.innerHTML = ``;
        soundBipe();
        container.innerHTML = marked.parse(`${resumo}`);

    });

    container.innerHTML = `<div id="loading-resumo" style="display: block;"></div>`

}


async function openQuestionSingEva(elemento) {
    
    const configuracaoData = await global__Config();
    const config = configuracaoData.ceumaAI
    // console.log(config)
    const { contexto } = config;

    const btnVoltar = document.querySelector(".voltar__eva_button____lista");
    const texto = elemento.innerText;
    const container = elemento.parentElement.parentElement;
    const refContainerContentOld = container.innerHTML;
    

    container.innerHTML = texto;

    if (btnVoltar.classList.contains("d-none")) {
        btnVoltar.classList.remove("d-none");
        btnVoltar.classList.add("d-block");
    } 

    btnVoltar.addEventListener("click",function(event){

        container.innerHTML = refContainerContentOld;
        btnVoltar.classList.add("d-none");
    });

    container.innerHTML = `<div id="loading-resumo" style="display: block;"></div>`;

    resumoAI(texto, contexto, "Explique esse item de forma clara.", "Estudante Leigo", 10, "2 linha",null,null,false).then(resumo => {
        
        container.innerHTML = ``;
        soundBipe();
        container.innerHTML = `
                    <div class="row justify-content-center gap-3 animationTesseract ">

                            ${resumo ? 
                                    `
                                         ${marked.parse(resumo )}
                                        
                                    ` 
                                    : 
                                        
                                    `
                                            <div class="alert alert-warning" role="alert">
                                                <h4 class="alert-heading">Sobre ${reduzirTexto(texto,10,10)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="lucide lucide-sparkles">
                                                        <path
                                                            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                                        <path d="M20 3v4" />
                                                        <path d="M22 5h-4" />
                                                        <path d="M4 17v2" />
                                                        <path d="M5 18H3" /></svg>
                                                </h4>
                                                <p> Opa, aguarde alguns minutos. Se estiver tendo problemas, entre em contato com <a href='#'>@suporte.cead@ceuma.br </a> 😉. <code>Servidor Indisponível</code> </p>
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
        `


    });
    
}



// Configura os modais ao clicar nos botões específicos
document.addEventListener("DOMContentLoaded", function () {

    vizioonModal(
        `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Pirâmide <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método é caracterizado pelo aumento de peso e redução do número de repetições durante uma série (Método Crescente ou Leve-Pesado). Ou pode ser o inverso, ocorre a redução do peso e o aumento do número de repetições durante a série (Método Decrescente ou Pesado-Leve) (PRESTES et al., 2016; de SALLES, 2020) (FLECK; KRAEMER, 2017).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-piramide",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex  align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Circuito<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método é caracterizado pela execução de diferentes exercícios sem intervalo de descanso absoluto ou com pouco descanso (PRESTES et al., 2016; de SALLES, 2020).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-circuito",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Superset<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método pode ser realizado das seguintes formas: Método Agonista e antagonista e Método Alternado por segmento. No método Agonista e antagonista as séries devem ser realizados de maneira alternada para grupos musculares agonistas e antagonistas (mesa flexora x cadeira extensora).</p>
                    <p class="card-text">No Método Alternado por segmento, as séries devem ser realizadas de maneira alternada para grupos musculares de membros superiores e membros inferiores (supino reto x cadeira extensora), com pouco ou nenhum intervalo de recuperação entre ambos (PRESTES et al., 2016; FLECK; KRAEMER, 2017; de SALLES, 2020).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-superset",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Cluster Sets<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método pode ser realizado das seguintes formas: Método Agonista e antagonista e Método Alternado por segmento. No método Agonista e antagonista as séries devem ser realizados de maneira alternada para grupos musculares agonistas e antagonistas (mesa flexora x cadeira extensora).</p>
                    <p class="card-text">No Método Alternado por segmento, as séries devem ser realizadas de maneira alternada para grupos musculares de membros superiores e membros inferiores (supino reto x cadeira extensora), com pouco ou nenhum intervalo de recuperação entre ambos (PRESTES et al., 2016; FLECK; KRAEMER, 2017; de SALLES, 2020).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-Cluster-Sets",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método de Exaustão<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método pode ser realizado das seguintes formas: Método Agonista e antagonista e Método Alternado por segmento. No método Agonista e antagonista as séries devem ser realizados de maneira alternada para grupos musculares agonistas e antagonistas (mesa flexora x cadeira extensora).</p>
                    <p class="card-text">No Método Alternado por segmento, as séries devem ser realizadas de maneira alternada para grupos musculares de membros superiores e membros inferiores (supino reto x cadeira extensora), com pouco ou nenhum intervalo de recuperação entre ambos (PRESTES et al., 2016; FLECK; KRAEMER, 2017; de SALLES, 2020).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-exaustao",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método de Repetições Parciais<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método pode ser realizado das seguintes formas: Método Agonista e antagonista e Método Alternado por segmento. No método Agonista e antagonista as séries devem ser realizados de maneira alternada para grupos musculares agonistas e antagonistas (mesa flexora x cadeira extensora).</p>
                    <p class="card-text">No Método Alternado por segmento, as séries devem ser realizadas de maneira alternada para grupos musculares de membros superiores e membros inferiores (supino reto x cadeira extensora), com pouco ou nenhum intervalo de recuperação entre ambos (PRESTES et al., 2016; FLECK; KRAEMER, 2017; de SALLES, 2020).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-repeticoes-parciais",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Bi-Set<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método pode ser realizado das seguintes formas: Método Agonista e antagonista e Método Alternado por segmento. No método Agonista e antagonista as séries devem ser realizados de maneira alternada para grupos musculares agonistas e antagonistas (mesa flexora x cadeira extensora).</p>
                    <p class="card-text">No Método Alternado por segmento, as séries devem ser realizadas de maneira alternada para grupos musculares de membros superiores e membros inferiores (supino reto x cadeira extensora), com pouco ou nenhum intervalo de recuperação entre ambos (PRESTES et al., 2016; FLECK; KRAEMER, 2017; de SALLES, 2020).</p>
                </div>
            </div>
        `,
        null,
        ".btn-modal-Bi-set",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Rest-Pause<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Consiste na realização de séries com moderada a alta intensidade com intervalos de descanso curtos ( séries com 6 a 10 repetições máximas, com repouso de 30 segundos) (PRESTES <i>et al.</i>, 2016 de SALLES, 2020). </p>      </div>
            </div>
        `,
        null,
        ".btn-modal-Rest-Pause",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Métodos Dropset e Stripset<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                       <div style="display:flex">
                                 <div class="border-dashed" style="flex: 50%; padding: 10px; margin-right: 1rem; border-right-style: dashed;">
                                        <p class="card-text">Segundo Fleck e Kraemer, o Método Dropset pode ser realizado da seguinte maneira:</p>
                                        <ul class="card-text">
                                            <li>Passo 1 - Realização do exercício até a falha;</li>
                                            <li>Passo 2 - Redução da carga de 10 a 50 %;</li>
                                            <li>Passo 3 - Realização do exercício até a falha.</li>
                                        </ul>
                                    </div>
                                <div style="flex: 50%; padding: 10px;">                    
                                        <p class="card-text">Adicionalmente, segundo esses autores, o Método Stripsets deve ser realizado da seguinte
                                            maneira:</p>
                                        <ul class="card-text">
                                            <li>Passo 1 - Realização do exercício até a falha;</li>
                                            <li>Passo 2 - Redução da carga de 10 a 50 %;</li>
                                            <li>Passo 3 - Realização do exercício até a falha;</li>
                                            <li>Passo 4 - Segunda redução de carga;</li>
                                            <li>Passo 5 - Realização do exercício até a falha;</li>
                                            <li>Passo 6 - Terceira redução de carga, e possível continuidade do exercício.</li>
                                        </ul> 
                                </div>           
                        </div>
                </div>
            </div>
        `,
        null,
        ".btn-modal-Dropset-Stripset",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Métodos Tri-set e Série Gigante<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esses métodos consistem na realização de três ou quatro exercícios conjugados (sucessivos) para o mesmo grupo muscular. Normalmente envolvem a falha concêntrica no primeiro exercício, para depois seguir para outro exercício para o mesmo grupo muscular sem intervalo de descanso absoluto (de SALLES, 2020).</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-Tri-set",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método German Volume Training<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método envolve a realização de 10 séries de 10 repetições (intervalo entre as séries de 30 a 60 segundos), com intensidade de 60 % de uma repetição máxima,  em apenas um exercício por grupo muscular. Caso o indivíduo não consiga realizar as 10 repetições em algum momento, deve ser retirado entre 2,5 e 5 kg, para uma nova tentativa (PRESTES et al., 2016).</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-German",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método de Repetições Forçadas<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">É caracterizado quando durante a execução de uma série o indivíduo recebe um auxílio de um parceiro para fazer 2 ou 3 repetições a mais</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-forcadas",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Excêntrico ou Negativo<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">É caracterizado pela realização somente da fase excêntrica do exercício. O indivíduo deverá receber ajuda de uma pessoa com experiência na fase concêntrica e realizar a fase excêntrica com carga superior a 100% de uma repetição máxima (PRESTES <i>et al.</i>, 2016)</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-negativo",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método de Roubada<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Esse método é caracterizado pelo rompimento da técnica durante a execução do exercício resistido na fase concêntrica nas últimas repetições da série. Nesse caso, o indivíduo utiliza manobras com o corpo para auxiliar na execução do movimento (FLECK; KRAEMER, 2017).</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-Roubada",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método Superbomba<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Caracterizado pela realização de 15 a 18 séries para cada parte do corpo por sessão (FLECK; KRAEMER, 2017).</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-Superbomba",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Método de Pré-Exaustão<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Consiste na realização de um exercício monoarticular seguido por um exercício multiarticular para o mesmo grupo muscular (cadeira extensora + leg press) (PRESTES <i>et al.</i>, 2016; de SALLES, 2020).</p>      </div>
            </div>
        `,
        null,
        ".btn-modal-Pré-Exaustão",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    vizioonModal(
        `<div class="d-flex align-items-center gap-2"><p class="d-flex message-box-error rounded align-items-center p-2 gap-2 warnAnimation">Treinamento com Restrição do Fluxo Sanguíneo<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></p></div>`,
        `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Caracterizado pela realização de um exercício com uma pressão externa aplicada por manguitos ou bandas elásticas na porção proximal dos membros superiores ou inferiores (PRESTES <i>et al.</i>, 2016). As pressões variam entre 100 e 200 mmHg de acordo com o membro e a intensidade do exercício (20-50% de 1 RM). </p>
                <p class="card-text">É recomendado que a pressão de oclusão (mmHg) seja avaliada por meio do aparelho Doppler vascular. As repetições são realizadas até a falha concêntrica e podem variar entre 30 a 50 repetições. O intervalo de descanso deverá ser entre 30 e 90 segundos (PRESTES <i>et al.</i>, 2016).</p>
</div>
            </div>
        `,
        null,
        ".btn-modal-Fluxo-Sanguíneo",
        [],
        [
            {
                _class: ".warnAnimation",
                _animation: "animate__animated animate__fadeIn"
            }
        ],
        false
    );
    
    const cards = document.querySelectorAll('.flip-card');
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Remove a classe 'flipped' de todos os cards
        cards.forEach(c => c.classList.remove('flipped'));
        
        // Adiciona a classe 'flipped' apenas ao card clicado
        card.classList.add('flipped');
      });
    });
  
   
    // vizioonModal(
    //     `<div class="d-flex  align-items-center gap-2"><button type="button" class="d-none btn btn-success voltar__eva_button____lista " ><svg xmlns="http://www.w3.org/2000/svg" style="width:30px;height:30px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></button><p class="d-flex message-box-warn align-items-center p-2 gap-2 warnAnimation">Ingredientes <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></p></div>`,
    //     `   
    //     <div class="container d-flex flex-column justify-content-center align-items-center">
            
    //         <div class="row text-center justify-content-center gap-3 animationIngredientes">
            
    //             <div class="col-6 col-md-4 col-lg-2 info-item nome-imagem"  onclick="openQuestionSingEva(this)" data-tippy-content="Ferro heme" >ALBUMINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">MERENGUE</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOALBUMINA</div> 
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">CONALBUMINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">MAIONESE</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOTRANSFERRINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">GLOBULINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">SÓLIDOS DE OVOS</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">FLAVOPROTEÍNA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOMUCINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">FOSVITINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">OVOGLOBULINA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">LIPOPROTEÍNA DE BAIXA DENSIDADE</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">PLASMA</div>
    //             <div class="col-6 col-md-4 col-lg-2 info-item" onclick="openQuestionSingEva(this)">LISOZIMA</div>
    //         </div>
    //     </div>
    //     `,
    //     ``, // <button type="button" class="btn btn-success text-light resumo__eva_button____lista d-flex align-items-center" onclick="openQuestionEva('.animationIngredientes')">Gera Resumo da Lista com Eva <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></button>
    //     ".buttonIngredientes",
    //     ["modal-xl"],
    //     [
    //         {
    //             _class: ".animationIngredientes",
    //             _animation: "animate__animated animate__backInDown"
    //         },
    //         {
    //             _class: ".warnAnimation",
    //             _animation: "animate__animated animate__flash animate__infinite animate__slow"
    //         },
    //     ],
    //     false
    // );


  



    
    


});


