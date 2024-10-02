function obter(){
    let contador = 50
    let soma = 0
    let media = 0
    let pares = 0

    while (contador <= 70) {
         
        soma += contador
        pares++

        contador += 2
    }

    media = soma/pares

    alert("A soma de 50 a 70 é " + soma + " a média aritmética é " + media)
}