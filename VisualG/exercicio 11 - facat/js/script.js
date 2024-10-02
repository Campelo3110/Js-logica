var salario = parseInt(prompt("Digite o preço do salario"))
var comissao = parseInt(prompt("Digite a comissão fixa"))
var vendas_total = parseInt(prompt("Quantos carros ele vendeu"))
var vendas = parseInt(prompt("Digite o total de vendas"))


var vendas_comissao = vendas * 0.05
var vendas_carro = vendas_total * comissao
var final = salario + vendas_comissao + vendas_carro

alert("O salário final será de R$" + final)