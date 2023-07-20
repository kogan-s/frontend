class Vehicle {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
	this.speed = speed
  
 }

    getInfo(){
        console.log("CArs are great")
    }
}

const car = new Vehicle(1, 24, 56)

car.getInfo()

console.log("x=" + car.x + " y=" + car.y + " speed=" + car.speed )
