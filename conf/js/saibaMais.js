// Função para deixar a primeira letra maiúscula e o restante minúsculo
function primeiraLetraMaiusculaRestoMinuscula(text) {
    // Remove espaços em branco no início e no final e transforma o texto
    return text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase();
}

const accordionsaibamais = document.querySelectorAll('.accordion-saibamais');

if (accordionsaibamais.length > 0) {
    accordionsaibamais.forEach((accordion) => {
        // Seleciona o texto puro, ignorando os elementos SVG e ícones
        let textoSomente = accordion.childNodes;
        textoSomente.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                // Aplica a capitalização ao texto puro
                node.textContent = primeiraLetraMaiusculaRestoMinuscula(node.textContent);
            }
        });

        // Adiciona o evento de clique
        accordion.addEventListener('click', function () {
            accordionsaibamais.forEach((item) => {
                const panel = item.nextElementSibling;
                if (item !== this) {
                    item.classList.remove('active');
                    if (panel) {
                        panel.classList.remove('active-panel');
                    }
                }
            });

            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel) {
                panel.classList.toggle('active-panel');
            }
        });
    });
} else {
    console.log('Nenhum elemento .accordion-saibamais encontrado.');
}