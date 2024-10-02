let macas = parseInt(prompt("Quantas maças você comprou"))
let preco = 0

if (macas < 12){
    preco = 1.30 * macas
}else{
    preco = 1 * macas
}

alert("Você comprou " + macas + " o preço total foi " + preco)