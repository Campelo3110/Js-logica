function obter() {
  let soma = 0
  let i = 2

  do {
      soma += i
      i += 2
  } while (i <= 500)

  alert("A soma dos valores pares entre 1 até 500 é " + soma)
}
