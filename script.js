const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const textoafirmacao = document.querySelector(".texto-afirmacao");
const perguntas = [
    {   
        
        enunciado: "Isso é muito bom! Está ajudando a expandir conhecimento e facilitando tarefas escolares.",
        alternativas: [
            {
                texto: "Não é bom! Dispersa os estudantes e não expande o conhecimento",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais desafios você enfrenta ao incorporar tecnologias em suas aulas?",
        alternativas: [
            {
                texto: "Curva de aprendizado das novas ferramentas e plataformas",
                afirmacao: "afirmação"
            },
            {
                texto: "Dificuldade de acesso à internet estável e dispositivos suficientes para todos os alunos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você utiliza as tecnologias para promover a colaboração entre os alunos?",
        alternativas: [
            {
                texto: "Através de plataformas online para trabalho em grupo e compartilhamento de documentos",
                afirmacao: "afirmação"
            },
            {
                texto: "Principalmente através de métodos tradicionais de interação em sala de aula.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em sua opinião, as tecnologias ajudam a motivar os alunos no processo de aprendizagem?",
        alternativas: [
            {
                texto: "Sim, as tecnologias oferecem recursos interativos e interessantes.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não necessariamente, a motivação dos alunos depende mais da metodologia de ensino do que das tecnologias.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como você vê o futuro da educação com o avanço contínuo das tecnologias? ",
        alternativas: [
            {
                texto: "Promissor, as tecnologias têm o potencial de transformar profundamente a forma como aprendemos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Incerto, há preocupações sobre como integrar as tecnologias de forma eficaz e equitativa na educação.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal=" creio que ja nao tera mais a presença de cadernos e papeis em sala de aula, pois creio que será substituido por tablets e tecnologias do genero "
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2055...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
