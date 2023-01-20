
function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log("Valor invalido")
    }

    if (numeroForMaiorOuMenorQueOValorPermitido()) {
        console.log(`Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}`)

    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido() {
    return numero > maiorValor || numero < menorValor;
}
