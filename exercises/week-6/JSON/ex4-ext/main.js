let COW =

{
  "name": "COW",
  "weight": {
    "kilograms": "500"
  },
  "habitat": "FIELD",
  "endangered": "false",
  "diet": [
    {"food": "grass", "amount": "80%"},
    {"food": "water", "amount": "20%"}
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
    {"food": "banana", "amount": "60%"},
{"food": "grass", "amount": "10%"},
{"food": "leafs", "amount": "10%"},
{"food": "water", "amount": "20%"}
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
{"food": "Human", "amount": "1%"},
{"food": "Elephant", "amount": "1%"},
{"food": "Squirrel", "amount": "10%"},
{"food": "Cow", "amount": "68%"},
{"food": "Water", "amount": "20%"}
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
    {"food": "Nuts", "amount": "80%"},
    {"food": "Water", "amount": "20%"}
  ],
  "predators": [
    "Human",
    "Gray Wolf"
  ],
  "deliciousness": "2"
}


console.log(COW.diet)
