class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}




const dog = new Animal("Fido", 0)


console.log(dog.name + " has " + dog.numLegs + " legs")