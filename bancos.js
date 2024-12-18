
// Inicializando bancos de Dados;

/*
 ____    ______  ______  ______  ____     ____    ____        ____    __       ____     ____    __  __           ______     
/\  _`\ /\  _  \/\__  _\/\  _  \/\  _`\  /\  _`\ /\  _`\     /\  _`\ /\ \     /\  _`\  /\  _`\ /\ \/\ \  /'\_/`\/\  _  \    
\ \ \/\ \ \ \L\ \/_/\ \/\ \ \L\ \ \ \L\ \\ \,\L\_\ \ \L\_\   \ \,\L\_\ \ \    \ \ \/\_\\ \ \L\_\ \ \ \ \/\      \ \ \L\ \   
 \ \ \ \ \ \  __ \ \ \ \ \ \  __ \ \  _ <'\/_\__ \\ \  _\L    \/_\__ \\ \ \  __\ \ \/_/_\ \  _\L\ \ \ \ \ \ \__\ \ \  __ \  
  \ \ \_\ \ \ \/\ \ \ \ \ \ \ \/\ \ \ \L\ \ /\ \L\ \ \ \L\ \    /\ \L\ \ \ \L\ \\ \ \L\ \\ \ \L\ \ \ \_\ \ \ \_/\ \ \ \/\ \ 
   \ \____/\ \_\ \_\ \ \_\ \ \_\ \_\ \____/ \ `\____\ \____/    \ `\____\ \____/ \ \____/ \ \____/\ \_____\ \_\\ \_\ \_\ \_\
    \/___/  \/_/\/_/  \/_/  \/_/\/_/\/___/   \/_____/\/___/      \/_____/\/___/   \/___/   \/___/  \/_____/\/_/ \/_/\/_/\/_/
                                                                                                                            
    -- Banco da Dados v - 0.1  ----------------- + ---------------- Script Gerador            
    -- Author: Daniel Estevão Martins Mendes
    -- Plugin / sharGPCR: kjsdkue203djsd2302lkams                                                                                             
*/

var sha256 = function sha256(ascii) {
    function rightRotate(value, amount) {
        return (value >>> amount) | (value << (32 - amount));
    };

    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length'
    var i, j; // Used as a counter across the whole file
    var result = ''

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = sha256.h = sha256.h || [];
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = sha256.k = sha256.k || [];
    var primeCounter = k[lengthProperty];
    /*/
    var hash = [], k = [];
    var primeCounter = 0;
    //*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
            for (i = 0; i < 313; i += candidate) {
                isComposite[i] = candidate;
            }
            hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
            k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
        }
    }

    ascii += '\x80' // Append Ƈ' bit (plus zero padding)
    while (ascii[lengthProperty] % 64 - 56) ascii += '\x00' // More zero padding
    for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j >> 8) return; // ASCII check: only accept characters in range 0-255
        words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
    words[words[lengthProperty]] = (asciiBitLength)

    // process each chunk
    for (j = 0; j < words[lengthProperty];) {
        var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
        var oldHash = hash;
        // This is now the undefinedworking hash", often labelled as variables a...g
        // (we have to truncate as well, otherwise extra entries at the end accumulate
        hash = hash.slice(0, 8);

        for (i = 0; i < 64; i++) {
            var i2 = i + j;
            // Expand the message into 64 words
            // Used below if 
            var w15 = w[i - 15], w2 = w[i - 2];

            // Iterate
            var a = hash[0], e = hash[4];
            var temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                + ((e & hash[5]) ^ ((~e) & hash[6])) // ch
                + k[i]
                // Expand the message schedule if needed
                + (w[i] = (i < 16) ? w[i] : (
                    w[i - 16]
                    + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) // s0
                    + w[i - 7]
                    + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10)) // s1
                ) | 0
                );
            // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
            var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
                + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

            hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
            hash[4] = (hash[4] + temp1) | 0;
        }

        for (i = 0; i < 8; i++) {
            hash[i] = (hash[i] + oldHash[i]) | 0;
        }
    }

    for (i = 0; i < 8; i++) {
        for (j = 3; j + 1; j--) {
            var b = (hash[i] >> (j * 8)) & 255;
            result += ((b < 16) ? 0 : '') + b.toString(16);
        }
    }
    return result;
};




function fazerRequisicaoSincrona(url) {
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

// Chama a função com a URL desejada
var resultadoServidor = fazerRequisicaoSincrona("./server.conf");
// console.log("Resultado da requisição:", resultadoServidor);
// console.log(resultadoServidor.disciplina)

/**
    Pegar as configurações da disciplina
    sha256 () -> typeOf função não sincrona
*/
const configuracaoDisciplina = resultadoServidor.disciplina;
const { text, conv, bitlock } = configuracaoDisciplina;

var configuracaoServeDisciplina = function () {


    if (conv) {
        return conv === "up" ? text.toUpperCase() : text.toLowerCase();
    } else if (conv === true) {
        return text
    }

    // console.log(text);

    return text
}

// console.log(configuracaoServeDisciplina())
// Texto Criptografado
const cryptoHash = configuracaoServeDisciplina();
// Criando Criptografia
const criarHash = sha256(cryptoHash);


if (bitlock) {


    // Simulação dos logs gerados
    const logsGerados = [
        "Verificação de integridade concluída",
        "Recurso protegido"
    ];


    document.body.innerHTML = `

      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #2d2d2d;
        }
        
        .lock-screen {
          text-align: center;
          max-width: 500px;

          padding: 20px;
          border-radius: 10px;

        }

        .lock-icon {
          font-size: 100px;
          color: #00d1b2;
          margin-bottom: 20px;
        }

        .message {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .logs-list {
          margin-top: 20px;
          color: #ffffff;
          font-size: 18px;
          list-style: none;
          padding: 0;
        }

        .logs-list li {
          padding: 10px;
          background-color: #4a4a4a;
          margin-bottom: 10px;
          border-radius: 5px;
        }
      </style>

      <div class="lock-screen">
        <div class="lock-icon">🔒</div>
        <div class="message">BitLocker Ativado</div>
        <div class="logs-list">
          ${logsGerados.map(log => `<li>${log}</li>`).join('')}
        </div>
      </div>
    `
};


/* Variavel do Arquivo Annotation.js */
var annotation = bitlock ? console.warn(`BitLock => ${true} Tetando Reconnectar para ${criarHash}`) : new LDB.Collection(
    `${criarHash}_annotation`
);

/* Variavel do Arquivo Marcacao.js */
var destaquesDB = bitlock ? console.warn(`BitLock => ${true} Tetando Reconnectar para ${criarHash}`) : new LDB.Collection(
    `${criarHash}_destaques`
);

/* Variavel do Arquivo toolbar.js */
var databaseDestaques = bitlock ? console.warn(`BitLock => ${true} Tetando Reconnectar para ${criarHash}`) : new LDB.Collection(
    `${criarHash}_toolbar`
);

// Variavel do Arquivo Ferramentas.js
var historicoResumos = bitlock ? console.warn(`BitLock => ${true} Tetando Reconnectar para ${criarHash}`) : new LDB.Collection(
    `${criarHash}_historicoResumos`
)

// Variavel do Arquivo Slider.js
var sliderPositionDB = bitlock ? console.warn(`BitLock => ${true} Tetando Reconnectar para ${criarHash}`) : new LDB.Collection(
    `${criarHash}_sliderConf`
);
