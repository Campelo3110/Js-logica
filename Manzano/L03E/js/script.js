function obter() {
    let base = 3
    let expoente = 0

    while (expoente <= 15){
        let resultado = 1
        let contador = 1

        if (expoente > 0){
            while (contador <= expoente){
                resultado *= base
                contador++
            }
        }
        console.log(`3 elevado a ${expoente} = ${resultado}`)

        expoente++
    }
    
    alert("Resultado está no console")
}