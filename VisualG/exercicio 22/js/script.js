let horasTrabalhadas = parseInt(prompt("Quantas horas foram trabalhadas"))
let salario = parseInt(prompt("Salário por hora"))

let total
let horasExtras
let acrescimo

let horasRegular = 40 * 4

if (horasTrabalhadas >= horasRegular) {
    horasExtras = horasTrabalhadas - horasRegular
    acrescimo = horasExtras * (salario * 1.5)
    total = (horasRegular * salario) + acrescimo
} else {
    total = horasRegular * salario
}

alert("Seu salário é: R$" + total)
