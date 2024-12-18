// Função para adicionar animação e alternar visibilidade de elementos
function adicionarAnimation(_elementoID, _classAnimation = [], OcultarElemento, itemsOcultar = []) {
    // Obter o botão de controle e o elemento alvo para mostrar/ocultar
    const elementoToggle = document.querySelector(_elementoID);
    const elementoParaMostrar = document.querySelector(OcultarElemento);

    // Verificar se os elementos existem
    if (elementoToggle && elementoParaMostrar) {
        // Ocultar o elemento inicialmente
        elementoParaMostrar.classList.add("d-none");

        // Adicionar evento de clique
        elementoToggle.addEventListener("click", () => {
            // Iterar sobre os itens a ocultar
            itemsOcultar.forEach(selector => {
                const elementoParaOcultar = document.querySelector(selector);
                if (elementoParaOcultar) {
                    elementoParaOcultar.classList.add("d-none");
                    elementoParaOcultar.classList.remove("d-block");
                }
            });

            // Alternar visibilidade do elemento atual
            elementoParaMostrar.classList.toggle("d-none");
            elementoParaMostrar.classList.toggle("d-block");

            // Adicionar classes de animação ao elemento atual
            _classAnimation.forEach(animation => {
                elementoParaMostrar.classList.add(...animation._class.split(" "));
            });
        });
    }
}

// Executa o código quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Chamar a função para cada botão e box, definindo os elementos a serem ocultados
    adicionarAnimation(".buttonsocialContainer1", [{"_class": "animate__animated animate__fadeInDown animate__slow"}], ".socialContainer1", [".socialContainer2", ".socialContainer3"]);
    adicionarAnimation(".buttonsocialContainer2", [{"_class": "animate__animated animate__fadeInDown animate__slow"}], ".socialContainer2", [".socialContainer1", ".socialContainer3"]);
    adicionarAnimation(".buttonsocialContainer3", [{"_class": "animate__animated animate__fadeInDown animate__slow"}], ".socialContainer3", [".socialContainer1", ".socialContainer2"]);
    // adicionarAnimation(".buttonsocialContainer4", [{"_class": "animate__animated animate__fadeInDown animate__slow"}], ".socialContainer4", [".socialContainer5"]);
    // adicionarAnimation(".buttonsocialContainer5", [{"_class": "animate__animated animate__fadeInDown animate__slow"}], ".socialContainer5", [".socialContainer4"]);
});
