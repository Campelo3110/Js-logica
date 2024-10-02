let etapa = 1

function logar() {
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let caixa = document.getElementsByClassName("password")

    if (etapa === 1) {

        if (user == "1234") {
            alert("Escreva sua senha")
            caixa[0].style.visibility = "visible"
            etapa = 2
        } else {
            alert("Usuario incorreto")
        }

    } else if (etapa === 2) {
        
        if (password == "9999") {
            alert("Acesso permitido")
        } else {
            alert("Senha incorreta")
        }
    }
}