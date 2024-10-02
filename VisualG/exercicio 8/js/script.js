var total = parseInt(prompt("Digite o total de eleitores:"))
var vt_brancos = parseInt(prompt("Digite o número de votos brancos:"))
var vt_nulos = parseInt(prompt("Digite o número de votos nulos:"))
var vt_validos = parseInt(prompt("Digite o número de votos válidos:"))

var porce_brancos = vt_brancos / total * 100
var porce_nulos = vt_nulos / total * 100
var porce_validos = vt_validos / total * 100

alert("A porcetagem de votos " + vt_brancos + " é " + porce_brancos)
alert("A porcetagem de votos " + vt_nulos + " é " + porce_nulos)
alert("A porcetagem de votos " + vt_validos + " é " + porce_validos)