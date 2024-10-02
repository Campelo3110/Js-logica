function obter() {
    let valor = Number(prompt("Escreva um valor"))

    for(let i = 0; i < 11; i++){
        let resultado = valor * i
        console.log(`${valor} * ${i} = ${resultado}`)
    }

    alert("Resultado se encontra no console")
}
