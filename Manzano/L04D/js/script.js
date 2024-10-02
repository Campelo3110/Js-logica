function obter() {
  let acumuladores = BigInt(0)
  let graosNoQuadro = BigInt(1)
  let i = 1

  do {
      acumuladores += graosNoQuadro
      graosNoQuadro *= BigInt(2)
      i++
  } while (i <= 64)

  console.log("O total de grãos de trigo no tabuleiro é: " + acumuladores)
}
