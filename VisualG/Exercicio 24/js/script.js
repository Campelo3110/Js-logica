let salarioFixo = parseInt(prompt("Qual é o salário fico"))
let valorVendas = parseInt(prompt("Quanto você vendeu"))
let comissao

if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03
}else{
    comissao = valorVendas * 0.05
}

alert("O salário total foi de: " + (salarioFixo + comissao))