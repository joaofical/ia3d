const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você ja ouviu falar sobre a Inteligencia Artificial (IA)?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você percebe a IA na sua vida cotidiana?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acha que ela faz diferença na sua vida?",
        alternativas:["Sim","Não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}