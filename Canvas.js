document.getElementById("formNome").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
});

let FundoSelecionado = 'Imagens/Background/background-01.png';
let CabeloTSelecionado = 'Imagens/blank.png';
let PeleSelecionada = 'Imagens/Peles/skin-05.png';
let RoupaSelecionada = 'Imagens/blank.png';
let CabeloFSelecionado = 'Imagens/blank.png';
let AccSelecionado = 'Imagens/blank.png';
let TakiSelecionada = 'Imagens/blank.png';

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
        carregarImagem(CabeloTSelecionado),
        carregarImagem(PeleSelecionada),
        carregarImagem(RoupaSelecionada),
        carregarImagem(CabeloFSelecionado),
        carregarImagem(AccSelecionado),
        carregarImagem(TakiSelecionada)
    ]).then((imagens) => {
        imagens.forEach((img, index) => {
            if (index === 0) {
                const proporcao = img.width / img.height;
                const novaAltura = canvas.height;
                const novaLargura = novaAltura * proporcao;
                ctx.drawImage(img, 0, 0, novaLargura, novaAltura);
            } else if (index === 6) {
                const proporcao = img.width / img.height;
                const novaAltura = 900;
                const novaLargura = novaAltura * proporcao;
                ctx.drawImage(img, 110, 150, novaLargura, novaAltura);
            } else {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
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