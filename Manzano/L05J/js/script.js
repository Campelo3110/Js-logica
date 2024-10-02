function obter() {
    let fah = 0

    for (let cel = 10; cel <= 100; cel+=10){
        fah = ((9*cel)+ 160)/5

        console.log(`${cel}°C = ${fah}°F`)
    }
    alert("Resultado está no console")
}

