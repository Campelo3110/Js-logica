let numeroConta = parseInt(prompt("Informe o número da conta"))
let saldo = parseFloat(prompt("Informe o saldo da conta"))
let debito = parseFloat(prompt("Informe o débito"))
let credito = parseFloat(prompt("Informe o crédito"))

let saldoAtual = saldo - debito + credito

if (saldoAtual >= 0){
    alert("A conta " + numeroConta)
    alert("Apresenta saldo positivo de R$" + saldoAtual)
}else{
    alert("A conta " + numeroConta)
    alert("Apresenta saldo negativo de R$" + saldoAtual)
}