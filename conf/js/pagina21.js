// Inicia o Tippy.js nos elementos com a classe nome-imagem
tippy('.nome-imagem', {
    placement: 'auto',
    arrow: true, // Adiciona seta no tooltip
    theme: 'laranjado', // Tema claro para o tooltip
    interactive: true, // Torna o tooltip interativo
    delay: [200, 0], // Pequeno atraso para mostrar
    duration: [300, 200], // Duração da animação
    offset: [0, -30],
    allowHTML: true // Permite HTML no conteúdo do tooltip
});
