//1

const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  //person.feed() //should alert "I'm no longer hungry"

  // 2

  const pump = function (amount) {
    this.liters += amount; //*
    console.log('You put ' + this.amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  //garage.car1.fillTank(2);
  //console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
 // garage.car2.fillTank(30);
 // console.log('Mercedes should have 31 liters: ', garage.car2.liters);


  //3


  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel: 0, //*
    fly: function () {
              if (this.fuel < 2) { //*
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

  //4


  const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function (number){
        this.coinCount -= number;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//5

const revealSecret = function () {
    return this.secret; //*
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi", //*
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis", //*
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);


  //6


  const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
  
      const requiredBeans = this.drinkRequirements[drinkType];
      const hasDrink = drinkType in this.drinkRequirements; //!!!!
      const hasEnoughBeans = requiredBeans <= this.beans;
  
      if (hasDrink && hasEnoughBeans) {
        this.beans -= requiredBeans;
        console.log(`Here is your ${drinkType}!`);
      } else if (hasDrink && !hasEnoughBeans) {
        console.log("Sorry, we're all out of beans!");
      } else {
        console.log(`Sorry, we don't make ${drinkType}.`);
      }


 //if (this.drinkRequirements[drinkType] != undefined) {
 //console.log(drinkType + " needs " + this.drinkRequirements[drinkType] + " beans. Now we have " + this.beans + " beans.");
 //console.log();

    //    if (this.beans >= this.drinkRequirements[drinkType]) {
      //      this.beans -= this.drinkRequirements[drinkType];

       // } else {
        // console.log("Sorry, we're all out of beans");
                }

//} else {
  //  console.log("Sorry, we don't make " + drinkType); 
//}


}
            
  }
  
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"