function obter() {
  let i = 1

  do {
      if (i % 4 === 0) {
          console.log(i)
      }
      i++
  } while (i <= 200)

  alert("O resultado está no console")
}
