let quantidadeAtual = parseInt(prompt("Insira a quantidade atual em estoque"))
let quantidadeMax = parseInt(prompt("Insira a quantidade máxima"))
let quantidadeMin = parseInt(prompt("Insira a quantidade mínima"))

let quantidadeMed = (quantidadeMax + quantidadeMin) / 2



if (quantidadeAtual >= quantidadeMed){
    alert("Não efetuar compra")
}else{
    alert("Efetuar compra de mais " + (quantidadeMed - quantidadeAtual) + " unidades")
}