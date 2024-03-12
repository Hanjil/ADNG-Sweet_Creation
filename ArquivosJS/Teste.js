function ProximoBG(fileName) {
    var BGSelecionado = fileName;
    document.getElementById('Fundo').src = fileName;
}
function toggleBotoesFundo() {
    var Fundos = document.getElementById("AtivaBotoesFundo");
    Fundos.style.display = (Fundos.style.display === "block") ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", function () {
    var Fundos = document.getElementById("AtivaBotoesFundo");
    Fundos.style.display = "none";
});