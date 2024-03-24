document.getElementById("formNome").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    console.log("Nome inserido: " + nome);
});

let FundoSelecionado = 'https://www.amordoce-newgen.com/assets/disconnected/customization/background-01.webp';
let CabeloTrasSelecionado = 'blank.png';
let PeleSelecionado = 'https://www.amordoce-newgen.com/assets/disconnected/customization/avatars/skin-05.webp';
let RoupaSelecionada = 'blank.png';
let CabeloFrenteSelecionado = 'blank.png';
let AccSelecionado = 'blank.png';
let TakiSelecionado = 'blank.png';

const canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 1550;
desenharCanvas();

function desenharCanvas() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgFundo = new Image();
    imgFundo.src = FundoSelecionado;
    imgFundo.onload = function() {
        ctx.drawImage(imgFundo, 0, 0, canvas.width, canvas.height);
    };

    const imgCabeloTras = new Image();
    imgCabeloTras.src = CabeloTrasSelecionado;
    imgCabeloTras.onload = function() {
        ctx.drawImage(imgCabeloTras, 0, 0, canvas.width, canvas.height);
    };

    const imgPele = new Image();
    imgPele.src = PeleSelecionado;
    imgPele.onload = function() {
        ctx.drawImage(imgPele, 0, 0, canvas.width, canvas.height);
    };

    const imgRoupa = new Image();
    imgRoupa.src = RoupaSelecionada;
    imgRoupa.onload = function() {
        ctx.drawImage(imgRoupa, 0, 0, canvas.width, canvas.height);
    };

    const imgCabeloFrente = new Image();
    imgCabeloFrente.src = CabeloFrenteSelecionado;
    imgCabeloFrente.onload = function() {
        ctx.drawImage(imgCabeloFrente, 0, 0, canvas.width, canvas.height);
    };

    const imgTaki = new Image();
    imgTaki.src = TakiSelecionado;
    imgTaki.onload = function() {
        ctx.drawImage(imgTaki, 0, 0, canvas.width, canvas.height);
    };

    if (AccSelecionado !== 'blank.png') {
        const imgAcc = new Image();
        imgAcc.src = AccSelecionado;
        imgAcc.onload = function() {
            ctx.drawImage(imgAcc, 0, 0, canvas.width, canvas.height);
        };
    }
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