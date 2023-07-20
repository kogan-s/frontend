let COW =

{
  "name": "COW",
  "weight": {
    "kilograms": "500"
  },
  "habitat": "FIELD",
  "endangered": "false",
  "diet": [
    "grass",
    "water"
  ],
  "predators": [
    "Human",
    "Gray Wolf"
  ],
  "deliciousness": "5"
}


let ELEPHANT =

{
  "name": "ELEPHANT",
  "weight": {
    "kilograms": "1500"
  },
  "habitat": "JUNGLE",
  "endangered": "true",
  "diet": [
    "banana",
"grass",
"leafs",
    "water"
  ],
  "predators": [
    "Human",
    "Gray Wolf"
  ],
  "deliciousness": "4"
}


let GRAY_WOLF =

{
  "name": "GRAY WOLF",
  "weight": {
    "kilograms": "50"
  },
  "habitat": "FOREST",
  "endangered": "true",
  "diet": [
    "Human",
"Elephant",
"Squirrel",
    "water"
  ],
  "predators": [
    "Human",
    "Gray Wolf"
  ],
  "deliciousness": "3"
}


let SQUIRREL =

{
  "name": "SQUIRREL",
  "weight": {
    "kilograms": "0,4"
  },
  "habitat": "FOREST",
  "endangered": "false",
  "diet": [
    "Nuts",
    "Water"
  ],
  "predators": [
    "Human",
    "Gray Wolf"
  ],
  "deliciousness": "2"
}


console.log(SQUIRREL.weight)
console.log(SQUIRREL.habitat)
console.log(SQUIRREL.endangered)
console.log(SQUIRREL.diet)