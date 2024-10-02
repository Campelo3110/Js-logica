function resultado() {

    let tipo = document.getElementById("combustivel").value
    let quant = parseFloat(document.getElementById("quant").value)

    let preco, desconto

    if (tipo === "G") {
        if (quant <= 20) {
            preco = quant * 3.30
            desconto = preco * 0.04
        } else {
            preco = quant * 3, 30
            desconto = preco * 0.06
            
        }
    } else
        if (tipo === "A") {
            if (quant <= 20) {
                preco = quant * 2.90
                desconto = preco * 0.03
                
            } else {
                preco = quant * 2.90
                desconto = preco * 0.05
            
            }

        }

         alert(" Você escolheu " + tipo +  " e abasteceu " + quant + " pagará R$ " + (preco + desconto).toFixed(2))

}