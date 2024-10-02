function obter(){
    let numero = Number(prompt("Digite o primero número"))
    let maior = numero
    let menor = numero

    while (numero >= 0){
        numero = Number(prompt("Digite outro número (negativo para sair)"))

        if (numero >= 0){
            if (numero > maior){
                maior = numero
            }else if(numero < menor){
                menor = numero
            }
        }
    }

    alert("O maior valor digitado foi: " + maior)
    alert("O menor valor digitado foi: " + menor)
}
