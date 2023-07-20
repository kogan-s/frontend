class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
  
 }

    giveBirth(name){
        this.children = name
        console.log("Boom. Birthed " + name)
    }
}

const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly") // prints "Boom. Birthed Dolly"

cat.giveBirth("Molly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]