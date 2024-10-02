function obter() {
    let base = Number(prompt("Digite um número"))
    let expoente = Number(prompt("Digite um expoente"))

    let resultado = 1
    let contador = 1

    while (contador <= expoente){
        resultado *= base
        console.log(resultado)
        contador++
    }
    
    alert(base + " elevado a " + expoente + " = " + resultado)
}