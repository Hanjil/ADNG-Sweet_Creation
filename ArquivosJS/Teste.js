const Teste = document.querySelectorAll('.Teste');

let GrupoAtual = 0;

function EscondeGrupo() {
    Teste.forEach(item => item.classList.add('Escondido'));
}

function MostraGrupo() {
    Teste[GrupoAtual].classList.remove('Escondido');
}

function ProxGrupo() {
    EscondeGrupo()
    if (GrupoAtual === Teste.length - 1) {
        GrupoAtual = 0
    } else {
        GrupoAtual++
    }
    MostraGrupo()
}

function VoltaGrupo() {
    EscondeGrupo()
    if (GrupoAtual === 0) {
        GrupoAtual = Teste.length - 1
    } else {
        GrupoAtual--
    }
    MostraGrupo()
}

EscondeGrupo(); // Esconde todos os grupos no início
MostraGrupo(); // Mostra o grupo inicial
