let ages = [31, 28, 23, 27, 25, 16, 24]
 //returns false
console.log(ages.every(a => a > 18))


let menu = [
    { name: "Beef stew", vegetarian: false },
    { name: "Beef sandwhich", vegetarian: false },
    { name: "Carrot on a stick", vegetarian: true },
    { name: "Beef eggroll", vegetarian: false },
]

console.log(menu.some(m => m.vegetarian)) //returns true



let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]



if (movies.some(m => m.studio === "Marvel")) {
    console.log("Let's go watch some movies")
}
else {
    console.log("Let's stay home")
}

if (movies.every(m => m.year > 2020)) {
    console.log("Futuristic stuff")
}
else {
    console.log("Yawn")
}


