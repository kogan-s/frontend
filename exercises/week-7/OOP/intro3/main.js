class Vehicle{
    constructor (x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      Vehicle.carsSold++;
   }

   static getInfo(){
           console.log("We've sold " + Vehicle.carsSold + " vehicles.");
   }
}

Vehicle.carsSold = 0;


const car1 = new Vehicle(1, 24, 56)
const car2 = new Vehicle(2, 15, 40)


Vehicle.getInfo()