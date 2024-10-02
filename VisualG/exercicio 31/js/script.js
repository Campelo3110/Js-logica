let a = Number(prompt("Escreva o valor do lado A de um triângulo"))
let b = Number(prompt("Escreva o valor do lado B de um triângulo"))
let c = Number(prompt("Escreva o valor do lado C de um triângulo"))
let soma

if (((a + b) > c) && ((b + c) > a) && ((c + a) > b) ){
    alert("É um triângulo")
}else{
    alert("Não é um triângulo")
}