function obter() {
    let contadora = 2
    let soma = 0

    while (contadora <= 500) {

        soma += contadora

        contadora += 2
    }

    alert("O resultado da soma dos 500 números pares são: " + soma)
}