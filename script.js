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
    palavras = []
    vezes = []
    palavrasFinal = []
    vezesFinal = []
    var texto = document.getElementById("campoDeTexto").value + " "
    texto = texto.toLowerCase()
    texto = texto.replace(/(\r\n|\n|\r)/gm, "") //remove quebras de linha
    var palavraAtual = ""
    var i = 0
    do {
        if (texto[i] != " " && texto[i] != "," && texto[i] != "." && texto[i] != "?" && texto[i] != "!" && texto[i] != "" && texto[i] != "-" && texto[i] != "–") {
        palavraAtual = palavraAtual + texto[i]
    }
        else if (palavraAtual != "" && acharPalavraIgual(palavraAtual)) {
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
    if (palavras[posicaoMaior].length > 0) {
        palavrasFinal.push(palavras[posicaoMaior])
        vezesFinal.push(maior)
        return true
    }
    else {
        return false
    }
}

function ordenar() {
    let y = 0
    do {
        if (acharPlavraQueMaisAparece()) {
            y++
        }
    } while (y < 20)

}

function imprimir() {
    let res = document.getElementById("res")
    let montagem
    montagem =
        `<table>
        <tr>
            <th>Vezes</th>
            <th>Palavra</th>
        </tr>
        <br>`
    let i = 0
    do {
        if (vezesFinal[i] == 0) {
            break
        }
        montagem +=
            `<tr>
          <td>${vezesFinal[i]}</td>

          <td>${palavrasFinal[i]}</td>

          <td><button id="x_btn" onclick="apagar(${i})"><img id="x_icon" src="media/x_icon.png" alt="X"></button></td>
        </tr>
        <br>`
        i++
    } while (i < 20)
    montagem += `</table>`
    console.log(montagem)
    res.innerHTML = montagem
}

function apagar(posicaoApagar){
    let palavrasNova=[]
    let vezesNova=[]
    let i
    for(i=0;i<palavrasFinal.length;i++){
        if(i!=posicaoApagar){
            palavrasNova.push(palavrasFinal[i])
            vezesNova.push(vezesFinal[i])
        }
    }
    palavrasFinal=palavrasNova
    vezesFinal=vezesNova
    acharPlavraQueMaisAparece()
    imprimir()
}

//  window.alert(palavras[vezes.indexOf(Math.min(vezes))])

/*else {
    window.alert("ola")
    var posicaoMenorAtual
    posicaoMenorAtual = vezes.indexOf(Math.min(vezes))
    substituir(palavraAtual,posicaoMenorAtual)
    palavraAtual = ""
}*/