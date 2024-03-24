document.getElementById("formNome").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    console.log("Nome inserido: " + nome);
});

let FundoSelecionado = 'Imagens/Background/background-01.png';
let CabeloTrasSelecionado = 'Imagens/blank.png';
let PeleSelecionado = 'Imagens/Peles/skin-05.png';
let RoupaSelecionada = 'Imagens/blank.png';
let CabeloFrenteSelecionado = 'Imagens/blank.png';
let AccSelecionado = 'Imagens/blank.png';
let TakiSelecionado = 'Imagens/blank.png';

const canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 1550;
desenharCanvas();

function desenharCanvas() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const carregarImagem = function(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = reject;
            img.src = src;
        });
    };

    Promise.all([
        carregarImagem(FundoSelecionado),
        carregarImagem(CabeloTrasSelecionado),
        carregarImagem(PeleSelecionado),
        carregarImagem(RoupaSelecionada),
        carregarImagem(CabeloFrenteSelecionado),
        carregarImagem(AccSelecionado),
        carregarImagem(TakiSelecionado)
    ]).then((imagens) => {
        imagens.forEach((img) => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        });
    });
}

function BaixarCanvas() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/png");
    const nome = document.getElementById('nome').value;
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = nome + '.png';
    link.click();
}