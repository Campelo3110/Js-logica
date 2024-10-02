let x
let y
let resposta
let z

function resolver() {
    for (let contador = 1; contador <= 5; contador++) {
        x = parseInt(document.getElementById("x" + contador).innerHTML)
        y = parseInt(document.getElementById("y" + contador).innerHTML)

        z = (x * y) + 5;

        document.getElementById("z" + contador).innerHTML = z

        if (z <= 0) {
           resposta = "A"
        } else if (z <= 100) {
            resposta = "B"
        } else {
            resposta = "C"
        }

        document.getElementById("resposta" + contador).innerHTML = resposta
    }
}

    function limpar(){
        for (let contador = 1; contador <= 5; contador++) {
            document.getElementById("z" + contador).innerHTML = "-"
    
            document.getElementById("resposta" + contador).innerHTML = "-"
        }
    }