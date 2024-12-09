// Aguardando que o conteúdo da página seja carregado
// Aguarda 3 segundos e depois remove a tela de carregamento
setTimeout(function() {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "none";
}, 3000); // 3000 milissegundos = 3 segundos

