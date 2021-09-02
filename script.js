var palavras = []
var vezes = []

var palavrasFinal = []
var vezesFinal = []

function acharPalavraIgual(palavraAtual) {
    for (let x = 0; x < palavras.length; x++) {
        if (palavraAtual == palavras[x]) {
            substituir(palavraAtual, x)
            return true
        }
    }
}

function substituir(palavraAtual, x) {
    palavras[x] = palavraAtual
    vezes[x] += 1
}

function acharNan(palavraAtual) {
    for (let x = 0; x < 2000; x++) {
        if (isNaN(vezes[x])) {
            vezes[x] = 0
            substituir(palavraAtual, x)
            return true
        }
    }
    return false
}

function contar() {
    var texto = document.getElementById("campoDeTexto").value + " "
    var palavraAtual = ""
    var i = 0
    do {
        if (texto[i] != " " && texto[i] != "," && texto[i] != "." && texto[i] != "?" && texto[i] != "!" && texto[i] != "") {
            palavraAtual = palavraAtual + texto[i]
        }
        else if (palavraAtual!="" && acharPalavraIgual(palavraAtual)) {
            palavraAtual = ""
        }
        else {
            if (acharNan(palavraAtual)) {
                palavraAtual = ""
            }
        }
        i++
    } while (i <= texto.length)

    ordenar()
    imprimir()
}

function acharPlavraQueMaisAparece() {
    let maior = 0
    let posicaoMaior = 0
    for (x = 0; x < vezes.length; x++) {
        if (vezes[x] > maior) {
            maior = vezes[x]
            posicaoMaior = x
        }
    }
    vezes[posicaoMaior] = 0
    palavrasFinal.push(palavras[posicaoMaior])
    vezesFinal.push(maior)
}

function ordenar() {
    let y = 0
    do {
        acharPlavraQueMaisAparece()
        y++
    } while (y < 10)

}

function imprimir() {
    let res =document.getElementById("res")
    let i=0
    do{
        res.innerHTML+=`${vezesFinal[i]}    ${palavrasFinal[i]} <br>`
        i++
    }while(i<10)
}

//  window.alert(palavras[vezes.indexOf(Math.min(vezes))])

/*else {
    window.alert("ola")
    var posicaoMenorAtual
    posicaoMenorAtual = vezes.indexOf(Math.min(vezes))
    substituir(palavraAtual,posicaoMenorAtual)
    palavraAtual = ""
}*/