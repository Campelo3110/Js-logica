function obter(){
    let contadora = 1
    let soma = 0

    while (contadora <= 100){
        soma = contadora + soma

        contadora++
    }

    alert("O resultado da soma dos 100 primeiros números são: " + soma)
}