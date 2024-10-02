function obter() {
  let valor = 0
  let contador = 2
  let armazena = 0

  valor = Number(prompt("Digite o 1° valor"))

  if (valor === 0) {
    alert("Programa encerrado")
  } else {
    armazena += valor

      do {
        valor = Number(prompt("Digite o " + contador + "° valor"))
        if(valor > 0){
          armazena += valor
          contador++
        }else{
          valor = -1
          contador--
        }
      } while (valor > 0)

  }

  let media = armazena / contador

  alert("A soma dos " + contador + " valores digitados é " + armazena + " a média aritmética é " + media)
}
