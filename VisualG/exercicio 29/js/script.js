let valor1 = Number(prompt("Escreva o primeiro valor"))
let valor2 = Number(prompt("Escreva o segundo valor"))
let valor3 = Number(prompt("Escreva o terceiro valor"))
let maior
let segundo

if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1

    if (valor2 > valor3) {
        segundo = valor2
    } else {
        segundo = valor3
    }
} else
    if (valor2 > valor3 && valor2 > valor1) {
        maior = valor2

        if (valor1 > valor3) {
            segundo = valor1
        } else {
            segundo = valor3
        }
    } else
        if (valor3 > valor1 && valor3 > valor2) {
            maior = valor3

            if (valor2 > valor1) {
                segundo = valor2
            } else {
                segundo = valor1
            }
        }

alert("A soma dos dois primeiros número maiores é " + (maior + segundo))