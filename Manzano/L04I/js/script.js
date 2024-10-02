function obter() {
    let valor = Number(prompt("Digite um valor"))
    let maior = valor
    let menor = valor

    do{
        valor = Number(prompt("Digite outro valor"))
        if (valor > maior){
            maior = valor
        }else if (valor < 0){
            valor = -1
        }else{
            menor = valor
        }

    }while(valor > 0)

    alert("O maior valor é " + maior)
    alert("O menor valor é " + menor)
}
