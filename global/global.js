// Fumção para Reduzi o Texto colocando o ... ou qualquer cript
function reduzirTexto(texto, tamanhoMaximo, cript = '...') {
  if (texto.length > tamanhoMaximo) {
    return texto.substring(0, tamanhoMaximo) + cript;
  } else {
    return texto;
  }
}

// Função para deixar a primeira letra maiúscula e o restante minúsculo
function primeiraLetraMaiusculaRestoMinuscula(text) {
  // Remove espaços em branco no início e no final e transforma o texto
  return text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase();
}


function parseConf(conteudo) {
  const linhas = conteudo.split('\n');
  const config = {};
  let secaoAtual = null;

  linhas.forEach(linha => {
    // Remove espaços e ignora linhas em branco ou comentários
    linha = linha.trim();

    if (linha.startsWith('[') && linha.endsWith(']')) {
      // Identifica uma nova seção
      secaoAtual = linha.slice(1, -1);
      config[secaoAtual] = {};  // Cria um objeto para a seção
    } else if (linha && !linha.startsWith('#') && secaoAtual) {
      // Processa chave=valor dentro da seção atual
      const [chave, valor] = linha.split('=');
      if (chave && valor !== undefined) {
        config[secaoAtual][chave.trim()] = parseValor(valor.trim());
      }
    }
  });

  return config;
}

function parseValor(valor) {
  // Verifica se é um booleano
  if (valor.toLowerCase() === 'true') return true;
  if (valor.toLowerCase() === 'false') return false;

  // Verifica se é um número
  if (!isNaN(valor) && !isNaN(parseFloat(valor))) return parseFloat(valor);

  // Se não for booleano ou número, retorna como string
  return valor;
}

// // Exemplo de uso
// const conteudo = `
// [disciplina]
// text = Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - Unidade I
// conv = false
// numero = 42
// `;

// const config = parseConf(conteudo);
// console.log("Configurações:", config);

function fazerRequisicaoParaServer(url) {
  // Cria o objeto de requisição
  var xhr = new XMLHttpRequest();

  // Abre a conexão de forma síncrona (terceiro parâmetro "false" torna a requisição síncrona)
  xhr.open("GET", url, false);

  // Envia a requisição
  xhr.send();

  // Verifica o status da resposta
  if (xhr.status === 200) {
    // console.log("Resposta:", xhr.responseText);
    return parseConf(xhr.responseText);
  } else {
    console.error("Erro na requisição:", xhr.status);
    return null;
  }
}


function efeitoDigitacao(tempoPiscar, elemento = "", quantidadeElementos = 3, tipoEfeito = "digitacao", container = "", logsAtividade = []) {

  if (container === "") alert("Definir Container para Digitacão...");

  const logTextContainer = document.querySelector(container);
  let index = 0;

  // Adiciona a transição de opacidade para a animação de entrada e saída
  logTextContainer.style.transition = "opacity 0.5s";

  function aplicarEfeito() {
    if (elemento === "") {
      // Anima a saída do log atual
      logTextContainer.style.opacity = 0;

      // Troca o texto após a animação de saída e anima a entrada
      setTimeout(() => {
        logTextContainer.innerHTML = logsAtividade[index];
        logTextContainer.style.opacity = 1;
      }, 500); // Tempo igual ao da transição de opacidade
    } else {
      if (tipoEfeito === "digitacao") {
        logTextContainer.innerHTML = `${logsAtividade[index]} ${elemento.repeat((Date.now() / 200 % quantidadeElementos) + 1)}`;
      } else if (tipoEfeito === "piscar") {
        logTextContainer.innerHTML = `${logsAtividade[index]} ${elemento.repeat(quantidadeElementos)}`;
        logTextContainer.style.opacity = (Date.now() / tempoPiscar % 2) < 1 ? 1 : 0.3;
      }
    }
  }

  // Troca para o próximo log em intervalos regulares
  setInterval(() => {
    index = (index + 1) % logsAtividade.length;
    aplicarEfeito();
  }, tempoPiscar * logsAtividade.length);

  // Aplica o efeito no intervalo de exibição se `elemento` não estiver vazio
  if (elemento !== "") {
    setInterval(aplicarEfeito, tempoPiscar);
  }
}


const bitlockerTemplate = (_cf = []) => {

  // console.log(_cf)
  const logsGerados = ["Recurso protegido ✅", "Recurso não Editável ❌"];

  document.body.innerHTML = `
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #2d2d2d;
          margin: 0;
        }
  
        .lock-screen {
          text-align: center;
          max-width: 500px;
          padding: 20px;
          border-radius: 10px;
        }
  
        .lock-icon {
          font-size: 5rem;
          color: #00d1b2;
        }
  
        .message {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 20px;
        }
  
        .logs-list {
          color: #ffffff;
          font-size: 18px;
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          flex-direction: column;
          width: 100%;
        }
  
        .logs-list li {
          padding: 10px;
          background-color: #4a4a4a;
          border-radius: 5px;
          width: 100%;
        }
  
        button {
          background-color: #4a4a4a;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          transition: transform 0.3s;
          width: 100%;
        }
  
        button:hover {
          transform: scale(1.05);
        }

        /* Modal Styling */
        .modal-body {
          display: flex;
          gap: 1rem;
        }

        .button-list {
          flex: 1;
          width: 100%;
          max-height: 200px;
          overflow: hidden;
          overflow-y: scroll;
          padding:1rem;
        }

         .button-list button {

          width: 100%;
        }

        .animation-box {
          flex: 1;
          background: #4a4a4a;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #fff;
          font-size: 1.5rem;
          overflow:hidden;
        }

         .animation-box img {
          width:200px;
        }
      </style>
  
      <div class="lock-screen">
        <div class="lock-icon">🔒</div>
        <div class="message">BitLocker Ativado</div>
        <ul class="logs-list">
          ${Array.isArray(_cf).length !== 0 ? ` <button id="showModalButton">Ver Animações</button>` : ``}
          ${logsGerados.map(log => `<li>${log}</li>`).join('')}
        </ul>
      </div>


      ${Array.isArray(_cf).length !== 0 ? ` 
      <!-- Modal Bootstrap -->
      <div class="modal fade" id="animationModal" tabindex="-1" aria-labelledby="animationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="animationModalLabel">Animações Mapeadas 🗺 </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="button-list">
                ${[..._cf].map(
    (_, i) => `<button class="btn btn-secondary ${_._class} animation-button" data-animation="${_._animation}">${_._class.replace(".", "")}</button>`
  ).join('')}
              </div>
              
              <div class="animation-box" ><img src='https://www.extranet.ceuma.br/assets/images/grupo-ceuma/ceuma.png' id="animationBox" /></div>
            </div>
          </div>
        </div>
      </div> ` : ``}
  
    `;

  const showModalButton = document.getElementById("showModalButton");
  const animationModal = new bootstrap.Modal(document.getElementById("animationModal"));
  const animationBox = document.getElementById("animationBox");

  // Exibe o modal
  showModalButton.addEventListener("click", () => {
    animationModal.show();
  });




  document.querySelectorAll(".animation-button").forEach(button => {
    button.addEventListener("click", () => {
      const animation = button.getAttribute("data-animation");
      if (!animation) return;

      // Remove as classes atuais de animação (mantém animation-box)
      [...animationBox.classList].forEach(className => {
        if (className !== 'animation-box') {
          animationBox.classList.remove(className);
        }
      });

      // Força um reflow para reiniciar a animação
      void animationBox.offsetWidth;

      // Adiciona as classes novamente
      requestAnimationFrame(() => {
        animation.split(' ').forEach(className => {
          if (className.trim()) {
            animationBox.classList.add(className.trim());
          }
        });
      });
    });
  });


};


const global__Config = async (url = "./modules/config.json") => {
  try {
    const response = await fetch(url); // Faz a requisição do arquivo JSON
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
    }
    const data = await response.json(); // Parseia o arquivo JSON
    return data; // Retorna os dados carregados
  } catch (error) {
    console.error("Erro ao carregar a configuração da toolbar:", error);
    return null;
  }
}


