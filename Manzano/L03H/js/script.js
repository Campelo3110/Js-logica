function obter() {
    let cel = 10
    let fah = 0

    while (cel <= 100){
        (cel * 9/5) + 32
        fah = ((9*cel) + 160)/5

        console.log(`${cel}°C = ${fah}°F`)

        cel += 10
    }

    alert("Resultado está no console")
}