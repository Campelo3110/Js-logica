let mes = parseInt(prompt("Insira o mês do ano"))
let forma = prompt("Você quer usar o if ou switch")

if (forma = "switch") {

    switch (mes) {
        case 1:
            alert("Janeiro")
            break
        case 2:
            alert("Fevereiro")
            break
        case 3:
            alert("Março")
            break
        case 4:
            alert("Abril")
            break
        case 5:
            alert("Maio")
            break
        case 6:
            alert("Junho")
            break
        case 7:
            alert("Julho")
            break
        case 8:
            alert("Agosto")
            break
        case 9:
            alert("Stembro")
            break
        case 10:
            alert("Outubro")
            break
        case 11:
            alert("Novembro")
            break
        case 12:
            alert("Dezembro")
            break
    }
} else if ("if") {
    if (mes === 1) {
        alert("Janeiro");
    } else if (mes === 2) {
        alert("Fevereiro");
    } else if (mes === 3) {
        alert("Março");
    } else if (mes === 4) {
        alert("Abril");
    } else if (mes === 5) {
        alert("Maio");
    } else if (mes === 6) {
        alert("Junho");
    } else if (mes === 7) {
        alert("Julho");
    } else if (mes === 8) {
        alert("Agosto");
    } else if (mes === 9) {
        alert("Setembro");
    } else if (mes === 10) {
        alert("Outubro");
    } else if (mes === 11) {
        alert("Novembro");
    } else if (mes === 12) {
        alert("Dezembro");
    } else {
        alert("Mês inválido");
    }
} else {
    alert("Não reconhecido")
}