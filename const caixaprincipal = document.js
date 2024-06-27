const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultados = document.querySelector(".texto-resultado");

const pergunta=[
    {
        enunciado:"perguntas1",
        alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]
},
{
    enunciado: "pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
}
];
let atual = o;
let perguntaAtual;

function mostraPergunta() { 
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa() 
}
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas){

  }   
}
  function mostraAlternativas() { 
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
    }
  }
  function mostraAlternativas() {
    for ( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
    }    
}
 function mostraAlternativas() { 
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa;appendchild(botaoAlternativas);
    }
 }