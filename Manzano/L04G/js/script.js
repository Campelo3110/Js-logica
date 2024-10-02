function obter() {
  let numero = 1

  do {
      if (numero % 2 === 1) { 
          let resultado = 1
          let contador = numero

          do {
              resultado *= contador
              contador--
          } while (contador >= 1)

          console.log("Fatorial de " + numero + " é: " + resultado)
      }
      numero++
  } while (numero <= 10)

  alert("O resultado se encontra no console")
}
