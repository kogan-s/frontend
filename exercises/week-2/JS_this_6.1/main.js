  //6.1


  const coffeeShop = {
    beans: 40,
    money: 110, 
  
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
        //console.log(`${drinkType} needs ${this.drinkRequirements[drinkType]} beans. Now we have ${this.beans} beans.`);
        console.log(`${drinkType} needs ${requiredBeans} beans. Now we have ${this.beans} beans.`);
         this.beans -= requiredBeans;
        console.log(`Here is your ${drinkType}!`);
      } else if (hasDrink && !hasEnoughBeans) {
        console.log(`${drinkType} needs ${requiredBeans} beans. Now we have ${this.beans} beans.`);
        console.log("Sorry, we're all out of beans!");
      } else {
        console.log(`Sorry, we don't make ${drinkType}.`);
      }

    },

  buyBeans: function(numBeans) {
    const beanCost = 5; // Cost per bean (adjust as needed)
    const totalCost = numBeans * beanCost;

    if (totalCost <= this.money) {
      this.money -= totalCost;
      this.beans += numBeans;
      console.log(`Successfully purchased ${numBeans} beans.`);
    } else {
      console.log("Insufficient funds to buy beans.");
    }
  }
}

 
  
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyBeans(20); // Output: Successfully purchased 20 beans.

console.log(`Now we have ${coffeeShop.beans} beans.`); // Output: 30 (10 + 20)
console.log(`Still  have $${coffeeShop.money}`); // Output: 10 (100 - 5*20)

coffeeShop.makeDrink("frenchPress");
                	