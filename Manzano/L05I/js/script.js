function obter() {
    let resultado = 0
    let soma = 1

    for (let i = 0; i <= 7; i++){
        soma += resultado
        resultado += soma
    }
    alert(soma)
}

