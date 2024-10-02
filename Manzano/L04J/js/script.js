function obter() {

    let divisor = Number(prompt("Digite o divisor"))
    let dividendo = Number(prompt("Digite o dividendo"))
    let quociente = 0

    do{
        dividendo -= divisor
        quociente++
    }while(dividendo >= divisor)
    
    alert("O resultado da divisão é " + quociente)
}
