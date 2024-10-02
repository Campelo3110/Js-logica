let macas = parseFloat(prompt("Escreva a quantidade de maçãs em Kg"))
let morango = parseFloat(prompt("Escreva a quantidade de morangos em Kg"))
let valorFinal = 0
let desconto = 0


if (macas <= 5) {
    valorFinal += macas * 1.80
} else {
    valorFinal += macas * 1.50
}

if (morango <= 5) {
    valorFinal += morango * 2.50
} else {
    valorFinal += morango * 2.20
}

let quantidadeTotal = macas + morango

if (quantidadeTotal > 8 || valorFinal > 25) {
    desconto = valorFinal * 0.10;
    valorFinal = valorFinal - desconto
}

alert("O valor final ficou em R$ " + valorFinal.toFixed(2))
