let valor1 = Number(prompt("Escreva o primeiro valor"))
let valor2 = Number(prompt("Escreva o segundo valor"))
let valor3 = Number(prompt("Escreva o terceiro valor"))

if (valor1 > valor2 && valor1 > valor3) {
    alert("O mairo valor é o " + valor1)
} else
    if (valor2 > valor3 && valor2 > valor1) {
        alert("O mairo valor é o " + valor2)
    } else
        if (valor3 > valor1 && valor3 > valor2) {
            alert("O mairo valor é o " + valor3)
        }