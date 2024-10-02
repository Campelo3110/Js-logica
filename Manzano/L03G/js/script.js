function obter() {
    let contador = 0
    let resultado = 0
    let soma = 1

    while (contador <= 7){

        soma += resultado
        resultado += soma

        contador++
    }

    alert("Décimo quinto termo é "+ soma)
}