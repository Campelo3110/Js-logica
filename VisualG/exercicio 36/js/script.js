let homem1 = Number(prompt("Digite a idade do primeiro homem"))
let homem2 = Number(prompt("Digite a idade do segundo homem"))
let mulher1 = Number(prompt("Digite a idade da primeira mulher"))
let mulher2 = Number(prompt("Digite a idade da segunda mulher"))
let velho, novo, velha, nova


if (homem1 > homem2){
    velho = homem1
    novo = homem2
    
    if (mulher1 > mulher2){
        velha = mulher1
        nova = mulher2
    }else{
        velha = mulher2
        nova = mulher1
    }
}else{
    velho = homem2
    novo = nomem1
}

alert("O cálculo do homem mais velho com a mulher mais nova é " + (velho + nova))
alert("O cálculo do homem mais novo com a mulher mais velha é " + (velha + novo))