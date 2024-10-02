function obter(){
    let nome
    let afirmativa = prompt("Deseja iniciar o calculo de comodos?").toLowerCase()

    let area = 0
    let largura = 0
    let comprimento = 0
    let total = 0
    let contador = 0

    while ( afirmativa === "sim"){

        nome = prompt("Digite o nome do cômodo")
        largura = Number(prompt("Digite a largura do cômodo"))
        comprimento = Number(prompt("Digite o comprimento do cômodo"))

        area = largura * comprimento

        alert("O comprimento desse cômodo é " + area + "m²")

        total += area

        contador++

        afirmativa = prompt("Continuar o calculo").toLowerCase()
    }

    alert("O numero de comodos contados foram "+ contador + " e o total de area é "+ total + "m²")
}