let inicio = parseInt(prompt("O jogo começou em que horas?"))
let fim = parseInt(prompt("O jogo terminou em que hora?"))
let horas = 0

if (fim < inicio) {
    horas = (24-inicio) + fim
}else 
if (fim > inicio){
    horas = fim - inicio

}else{
    horas = 24
}

alert("O total de horas que o jogo durou foi: " + horas)




