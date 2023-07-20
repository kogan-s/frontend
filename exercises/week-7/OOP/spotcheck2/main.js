class Human {
    constructor(name, age, friendly ) {
        this.name = name
        this.age = age
        this.friendly = friendly
    }
}




const person1 = new Human("Peter", 35, true)


console.log(person1.name + " is " + person1.age + " and " + person1.name + " is ")
if(person1.friendly) 
{console.log("friendly")} 
else
{console.log("unfriendly")}