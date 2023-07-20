class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel;
    }

     set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

set fuel(fuel) {                                             
if (fuel < 0) {
  return console.log("Fuel must be positive") //  block of code to be executed if condition1 is true
} else if (fuel > 150) {
  return console.log("Tank capacity is 150") //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  this._fuel = fuel //  block of code to be executed if the condition1 is false and condition2 is false
}
      
}


}

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10
console.log(c.speed)


c.fuel = -1
c.fuel = 160
c.fuel = 100