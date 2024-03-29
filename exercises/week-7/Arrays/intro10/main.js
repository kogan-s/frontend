let countries = [
    { name: "Greece", population: 500 },
    { name: "Namibia", population: 1200 },
    { name: "Finland", population: 100 },
    { name: "Switzerland", population: 300 },
    { name: "Peru", population: 200 }
]

let smallCountries1 = countries.filter(c => c.population < 500).map(c => c.name)
console.log(smallCountries1);

let smallCountries2 =
    countries
        .filter(c => c.population < 500)
        .map(c => c.name)
console.log(smallCountries2);