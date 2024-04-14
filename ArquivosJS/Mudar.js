function MudarFundo(fileName) {
    var elementosFundo = document.getElementsByClassName('Fundo');
    for (var i = 0; i < elementosFundo.length; i++) {
        elementosFundo[i].src = fileName;
    }
    FundoSelecionado = fileName;
    desenharCanvas();
}
function MudarPele(fileName) {
    var elementosPele = document.getElementsByClassName('ImgPele');
    for (var i = 0; i < elementosPele.length; i++) {
        elementosPele[i].src = fileName;
    }
    PeleSelecionada = fileName;
    desenharCanvas();
}
function MudarRoupa(fileName) {
    var elementosRoupa = document.getElementsByClassName('ImgRoupa');
    for (var i = 0; i < elementosRoupa.length; i++) {
        elementosRoupa[i].src = fileName;
    }
    RoupaSelecionada = fileName;
    desenharCanvas();
}
function MudarCabeloT(fileName) {
    var elementosCabeloT = document.getElementsByClassName('ImgCabeloTras');
    for (var i = 0; i < elementosCabeloT.length; i++) {
        elementosCabeloT[i].src = fileName;
    }
    CabeloTSelecionado = fileName;
    desenharCanvas();
}
function MudarCabeloF(fileName) {
    var elementosCabeloF = document.getElementsByClassName('ImgCabeloFrente');
    for (var i = 0; i < elementosCabeloF.length; i++) {
        elementosCabeloF[i].src = fileName;
    }
    CabeloFSelecionado = fileName;
    desenharCanvas();
}
function MudarTaki(fileName) {
    var elementosTaki = document.getElementsByClassName('ImgTaki');
    for (var i = 0; i < elementosTaki.length; i++) {
        elementosTaki[i].src = fileName;
    }
    TakiSelecionada = fileName;
    desenharCanvas();
}
function MudarAcc(fileName) {
    var elementosAcc = document.getElementsByClassName('ImgAcc');
    for (var i = 0; i < elementosAcc.length; i++) {
        elementosAcc[i].src = fileName;
    }
    AccSelecionado = fileName;
    desenharCanvas();
}