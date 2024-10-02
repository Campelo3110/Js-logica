var salario = parseFloat(prompt("Digite o salário"))
var reajuste = parseFloat(prompt("Digite o percentual de reajuste"))

var novo = salario * (reajuste/100)
var final = novo + salario
var cen = final.toFixed(2)

alert("O salário com reajuste é " + cen )