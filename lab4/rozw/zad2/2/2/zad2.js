fetch("cities.js").then(response => {
    return response.text()
}).then (txt => {
    return eval(txt)
}).then( asdf => {
    let num_cities = cities.length
    console.log(`Miasta w polsce: ${num_cities}`)
    let people = cities.reduce((accumulator, elem) => {
        return accumulator + elem.people;
    }, 0)
    console.log(`Ludzie w miastach: ${people}`)
    let first_city = cities
        .find(city => city.people > 10000)
    console.log(`Pierwsze miasto ponad 10k: ${first_city.name}`)
    let average = people / num_cities
    console.log(`Średnia: ${average}`)
    let above_average = cities
        .filter(city => city.people > average)
        .map(city => city.name)
    console.log(`Ponad średnią: ${above_average}`)
    let above_10k = cities
        .filter(city => city.people > 10000)
        .map(city => city.name)
    console.log(`Ponad 10k: ${above_10k}`)
    let num_above_10k = above_10k.length
    let num_below_10k = cities
        .filter(city => city.people <= 10000)
        .length
    if (num_above_10k > num_below_10k) {
        console.log(`Jest więcej miast powyżej 10k (${num_above_10k} vs ${num_below_10k})`)
    } else if (num_below_10k > num_above_10k) {
        console.log(`Jest więcej miast co najwyżej 10k (${num_below_10k} vs ${num_above_10k})`)
    } else {
        console.log(`Jest tyle samo miast powyżej 10k i mniejszych (${num_below_10k})`)
    }
})
