function ProximoBG(fileName) {
    var BGSelecionado = fileName;
    document.getElementById('Fundo').src = fileName;
}
function toggleBotoesFundo() {
    var Fundos = document.getElementById("AtivaBotoesFundo");
    var display = window.getComputedStyle(Fundos).getPropertyValue("display");
    
    if (display === "block") {
        Fundos.style.transition = "opacity 0.5s ease"; // Adiciona uma transição suave de 0.5 segundos
        Fundos.style.opacity = "0"; // Define a opacidade para 0 para esconder suavemente os botões
        setTimeout(function() {
            Fundos.style.display = "none"; // Define a exibição como "none" após a transição terminar
        }, 500); // Tempo correspondente à duração da transição (em milissegundos)
    } else {
        Fundos.style.display = "block"; // Define a exibição como "block" para mostrar os botões
        setTimeout(function() {
            Fundos.style.transition = "opacity 0.5s ease"; // Adiciona uma transição suave de 0.5 segundos
            Fundos.style.opacity = "1"; // Define a opacidade para 1 para mostrar suavemente os botões
        }, 0); // Aguarda um pequeno intervalo antes de adicionar a transição para garantir que ela seja aplicada
    }
}