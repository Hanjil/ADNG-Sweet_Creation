function toggleBotoes(classe) {
    var variaveis = document.querySelectorAll('.Cabeca, .Peles, .AvisoD, .AvisoE, .Cabelos, .Roupa, .Fundos, .Taki, .CabelosTras, .CabelosFrente, .CabeloT1, .CabeloT2, .CabeloT3, .CabeloT4, .CabeloT5, .CabeloT6, .CabeloT7, .CabeloT8, .CabeloT9, .CabeloT10, .CabeloF1, .CabeloF2, .CabeloF3, .CabeloF4, .CabeloF5, .CabeloF6, .CabeloF7, .CabeloF8, .CabeloF9, .CabeloF10, .CabeloF11, .CabeloF12, .Chapeus, .Nome');
    for (var i = 0; i < variaveis.length; i++) {
        var variavel = variaveis[i];
        if (variavel.classList.contains(classe)) {
            if (variavel.style.display === "block") {
                variavel.style.display = "none";
            } else {
                variavel.style.display = "block";
            }
        } else {
            variavel.style.display = "none";
        }
    }
}