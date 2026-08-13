const frases = [
  "Cada passo pequeno te leva mais longe do que ficar parado.",
  "Você é mais forte do que imagina.",
  "O esforço de hoje é a vitória de amanhã.",
  "Não desista no meio do caminho, o melhor ainda está por vir.",
  "Sua dedicação de hoje constrói o seu amanhã.",
  "Erros fazem parte da jornada, não do fim dela.",
  "Acredite no processo, os resultados chegam.",
  "Grandes conquistas começam com pequenas decisões.",
  "Você já venceu dias difíceis antes, vai vencer este também.",
  "Foco no progresso, não na perfeição."
];

const fraseTexto = document.querySelector(".frase")
const btnFrase = document.querySelector(".btnFrase")

function mostrarFrase(){
    let indice = Math.floor(Math.random()* frases.length)
    fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function(){
    mostrarFrase();
})
