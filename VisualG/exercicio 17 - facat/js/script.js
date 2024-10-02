let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))

let nota = (nota1 + nota2) / 2

if (nota >= 6){
    alert("O aluno com a nota " + nota + " foi aprovado")
}else{
    alert("O aluno com a nota " + nota + " foi reprovado")
}