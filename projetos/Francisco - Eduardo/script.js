let palavras = [
    "CASAS",
    "LOJAS",
    "CARRO",
    "MUNDO",
    "LIVRO",
    "CAMPO",
    "VERDE",
    "PEDRA",
    "TEMPO",
    "FESTA"
];

let palavraSecreta = "";
let tentativa = 0;
let terminou = false;

let input = document.getElementById("palavra");
let enviar = document.getElementById("enviar");
let tabuleiro = document.getElementById("tabuleiro");
let numero = document.getElementById("numero");

let resultado = document.getElementById("resultado");
let titulo = document.getElementById("titulo");

let fechar = document.getElementById("fechar");
let reiniciar = document.getElementById("reiniciar");


function escolherPalavra() {

    let numeroAleatorio =
        Math.floor(Math.random() * palavras.length);

    palavraSecreta =
        palavras[numeroAleatorio];
}


function criarTabuleiro() {

    tabuleiro.innerHTML = "";

    for (let i = 0; i < 6; i++) {

        let linha = document.createElement("div");

        linha.className = "linha";

        for (let j = 0; j < 5; j++) {

            let celula =
                document.createElement("div");

            celula.className = "celula";

            linha.appendChild(celula);
        }

        tabuleiro.appendChild(linha);
    }
}

function jogar() {

    if (terminou) {
        return;
    }

    let palavra =
        input.value.toUpperCase().trim();


    if (palavra.length != 5) {

        alert("Digite 5 letras!");

        return;
    }


    let linha =
        tabuleiro.children[tentativa];


    for (let i = 0; i < 5; i++) {

        let celula =
            linha.children[i];

        celula.innerText =
            palavra[i];


        if (
            palavra[i] ==
            palavraSecreta[i]
        ) {

            celula.classList.add("certa");

        } else if (
            palavraSecreta.includes(
                palavra[i]
            )
        ) {

            celula.classList.add("existe");

        } else {

            celula.classList.add("errada");
        }
    }

    if (palavra == palavraSecreta) {

        terminou = true;

        mostrarResultado(true);

        return;
    }


    tentativa++;

    input.value = "";

    if (tentativa == 6) {

        terminou = true;

        mostrarResultado(false);

        return;
    }


    numero.innerText = 
        tentativa + 1;
}

enviar.onclick = jogar;


input.onkeydown = function(event) {

    if (event.key == "Enter") {

        jogar();
    }
};


fechar.onclick = function() {

    resultado.style.display = "none";
};


reiniciar.onclick = function() {

    tentativa = 0;

    terminou = false;

    numero.innerText = "1";

    input.value = "";

    resultado.style.display = "none";

    criarTabuleiro();

    escolherPalavra();

    input.focus();
};


escolherPalavra();

criarTabuleiro();

input.focus();
