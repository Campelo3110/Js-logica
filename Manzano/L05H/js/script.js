function obter() {
    let base = Number(prompt("Digite um número"))
    let expoente = Number(prompt("Digite um expoente"))

    let resultado = 1

        for (let i = 1; i <= expoente; i++) {
            resultado *= base
        }
    alert(`${base} elevado a ${expoente} = ${resultado}`)
}

