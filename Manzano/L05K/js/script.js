function obter() {

    for (let numero = 1; numero <= 10; numero++){
        if (numero % 2 === 1){
            let resultado = 1
            
            for (let contador = numero; contador >= 1; contador--){
                resultado *= contador
            }
            
            console.log("Fatorial de " + numero + " é: " + resultado)
        }
    }

    alert("Resultado está no console")
}

