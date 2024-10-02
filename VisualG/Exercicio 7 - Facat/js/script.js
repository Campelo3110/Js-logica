var anos = parseInt(prompt("Quantos anos a pessoa tem:"))
var meses = parseInt(prompt("Quantos meses a pessoa tem"))
var dias = parseInt(prompt("Quantos dias a pessoa tem:"))

anos = anos * 365
meses = meses * 30

var resultado = anos + meses + dias

alert("Você tem " + resultado + " de dias")

