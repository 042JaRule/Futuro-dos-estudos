const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1) Qual área você vai estudar? ",
        alternativas: [
            {
                texto: "Artes e criatividade ",
                afirmacao: "Você escolheu estudar artes,explorando a criatividade, design, música e putras formas de expressão. "
            },
            {
                texto: "Ciências e pesquisas ",
                afirmacao: "Você decidiu estudar ciências, focando em pesquisas e descobertas que ajudam a entender melhor o mundo. "
            }
        ]
    },
    {
        enunciado: "2) Onde fica sua faculdade?",
        alternativas: [
            {
                texto: "Em um campus moderno dentro de um parque tecnológico. ",
                afirmacao: "Sua faculdade está localizada dentro de um parque tecnológico, cercada por empresas de inovação e espaços colaborativos. "
            },
            {
                texto: "Em um centro de pesquisas com laboratório. ",
                afirmacao: "Sua faculdade funciona com um centro de pesquisas, com acesso a laboratórios de ponta. "
            }
        ]
    },
    {
        enunciado: "3) Como você estuda? ",
        alternativas: [
            {
                texto: "No modelo híbrido, com aulas presencias e online. ",
                afirmacao: "Você estuda no modelo híbrido, alternado entre aulas online e atividades práticas presenciais. "
            },
            {
                texto: "100% presenciais, em laboratórios e ambientes práticos. ",
                afirmacao: "Sua rotina é totalmente presencial, com aulas prática, atendimentos reais e treinamentos intensivos. "
            }
        ]
    },
    {
        enunciado: "4) Como são as avaliações? ",
        alternativas: [
            {
                texto: "Projetos em grupo conectados com empresas reais. ",
                afirmacao: "Suas avaliações são projetos em grupo, muitas vezes desenvolvidos em parceria com empresas que analisam as soluções. "
            },
            {
                texto: "Casos práticos simulando situações reais da profissão. ",
                afirmacao: "Você é avaliado por meio de casos práticos que simulam situações reais, exigindo aplicação imediata do conhecimento. "
            }
        ]
    },
    {
        enunciado: "5) Qual o seu objetivo depois da graduação? ",
        alternativas: [
            {
                texto: "Trabalhar remoto ou em qualquer lugar do mundo. ",
                afirmacao: "Depois de formado, seu objetivo é trabalhar de forma remota, atendendo empresas ou clientes de qualquer lugar do mundo. "
            },
            {
                texto: "Atuar presencialmente e abrir seu próprio negócio ou projeto. ",
                afirmacao: "Após se formar, você quer atuar presencialmente e abrir seu próprio negócio ou projeto, oferecendo serviços especializados. "
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
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
