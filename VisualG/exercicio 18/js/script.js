let ano = parseInt(prompt("Em que ano a pessoa nasceu"))
let atual = new Date()

let pode = (atual.getFullYear()) - ano

console.log(pode)

if (pode < 16){
    alert("Não pode votar")

}else  if(pode >= 18){
    alert("Tem que votar")

}else{
    alert("Voto opcional")
}