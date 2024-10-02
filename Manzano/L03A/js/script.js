let numero = Number(prompt("Escreva um numero"))
let contador = 1
let tabuada = 0

alert("Resultado da tabuada está no console")

while (contador <= 10){
    tabuada = numero * contador

    console.log(`${numero} * ${contador} = ${tabuada}`)

    contador++
}