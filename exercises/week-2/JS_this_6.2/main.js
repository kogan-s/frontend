  //6.1


  const coffeeShop = {
    beans: 40,
    money: 110, 
  
    drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 4 },
    frenchPress: { beanRequirement: 12, price: 7 }
    },
  
    makeDrink: function (drinkType) {
      
     const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
     const hasEnoughBeans = requiredBeans <= this.beans;
      
     console.log(`Now we have ${this.beans} beans. ${drinkType} needs ${requiredBeans} beans.`);

      if (hasEnoughBeans) {
        
        
         this.beans -= requiredBeans;
        console.log(`Here is your ${drinkType}!`);
        
      } else  {
        console.log(`Sorry, we're all out of beans!`);
      }

    },

    buyDrink: function (drinkType) {
      const hasDrink = drinkType in this.drinkRequirements; //!!!!
      if (hasDrink) {
        const price = this.drinkRequirements[drinkType].price;
        this.money += price;
        this.makeDrink(drinkType);
      } else {
        console.log(`Sorry, we don't make ${drinkType}.`);
      }
    },

  buyBeans: function(numBeans) {
    const beanCost = 5; // Cost per bean 
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

 
  
coffeeShop.buyDrink("latte"); 
console.log(`Now we have $${coffeeShop.money}`);
coffeeShop.buyDrink("americano");
console.log(`Now we have $${coffeeShop.money}`);
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
console.log(`Now we have $${coffeeShop.money}`);
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
console.log(`Now we have $${coffeeShop.money}`);

coffeeShop.buyBeans(20); // Output: Successfully purchased 20 beans.

console.log(`Now we have ${coffeeShop.beans} beans.`); 
console.log(`Now we have $${coffeeShop.money}`); 

coffeeShop.buyDrink("frenchPress");
                	