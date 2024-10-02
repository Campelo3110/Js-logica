let time1 = prompt("Qual o nome do time")
let gols1 = Number(prompt("Quantos gols esse time marcou"))

let time2 = prompt("Qual o nome do time")
let gols2 = Number(prompt("Quantos gols esse time marcou"))

if (gols1 > gols2) {
    alert("O time ganhador foi " + time1 + " por " + gols1 + " x " + gols2)
} else 
if (gols2 > gols1) {
    alert("O time ganhador foi " + time2 + " por " + gols2 + " x " + gols1)

} else{
    alert("O jogo ficou empatado")
}