function obter(){
    let soma = 0
    let resultado = 0
    let contador = 1

    while (contador <= 10) {
        soma = Number(prompt("Digite o " + contador))
        resultado += soma
        contador++
    }

    alert("A soma dos 10 numeros digitador é " + resultado + " e a média aritmética " + (resultado/10))
}