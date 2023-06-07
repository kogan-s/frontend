 console.log("Hello, world!")

// let userResponse

//console.log(userResponse) // prints undefined
//console.log(userName) // throws an error

let a = 6
let b = a

console.log(a) //prints 6
console.log(b) //prints 6

b = 2

console.log(a) //prints 6
console.log(b) //prints 2


const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString

console.log(bothStrings)

console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false

console.log(1 == "1")// prints true
console.log(1 === "1")// prints false

let num
console.log(3 + num)

console.log(14 % 5) // will print 4

let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10

//let username = prompt("What is your username?")


a = 3
c = 0
b = a
b = a
c = a
b = c
a = b



let boughtTesla = false
const yearOfTeslaPurchase = 2015
let isUSCitizen = false
let currentYear = 2018




if (boughtTesla == false){
    console.log("Would you like to buy one?")
  } else if  (isUSCitizen == false) {
  console.log("Would you like to move to US?") 
} else if  (yearOfTeslaPurchase <= currentYear - 4) {
    console.log("Would you like to upgrade?")
  } else {
    console.log("Are you satisfyed?")
  }


  let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
  const firstCompany = companies[0]
console.log(firstCompany) // prints "Tesla"

companies.push("Blizzard Entertainment");
console.log(companies[4])


const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
numbers.splice (2-1, 2);
console.log(numbers);
numbers[4-1] = 1;
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.splice (0, 0, 0);
console.log(numbers);




const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");


console.log(fruits)


let person = {
    name: "Mariah",
    occupation: "Gangster"
  }



  console.log(person.occupation) // prints "Gangster"

  const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4
  }
  console.log(animalCounts)
  //Suddenly the zoo acquired two dozen eagles
  
  animalCounts.eagle = 24
  console.log(animalCounts)





  const p1 = {
    name: "Iosy",
    age: 31,
    city: "Haifa"
  }
  console.log(p1)
  
  const p2 = {
    name: "Jane",
    age: 31,
    city: "Nesher"
  }
  console.log(p1)
  
  if (p1.age == p2.age && p1.city == p2.city) {
    console.log(p1.name, "wanted to date", p2.name)
  } 
  if (p1.age == p2.age && p1.city != p2.city) {
    console.log(p1.name, "wanted to date", p2.name, ",but couldn't")
  } 


 /* let book1 = {
    title: "Book 1",
    author: "Author 1"
  };
  
  let book2 = {
    title: "Book 2",
    author: "Author 2"
  };
  
  // Create the library object
  const library = {
    books: [book1, book2]
  };*/
  
  const library = [
    {
      books: [
        { title: "Book 1", author: "Author 1" },
        { title: "Book 2", author: "Author 2" },
        { title: "Book 3", author: "Author 3" },
        { title: "Book 4", author: "Author 4" },
        { title: "Book 5", author: "Author 5" }
      ]
    }
  ];



  console.log(library)


  const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
  const name = prompt('Please enter the name for your reservation');
  
  if (reservations.hasOwnProperty(name)) {
    if (!reservations[name].claimed) {
      console.log('Welcome, ' + name);
    } else {
      console.log('Hmm, someone already claimed this reservation');
    }
  } else {
    reservations[name] = { claimed: true };
    console.log('Your reservation has been added, ' + name);
  }


  const date = 3;

  const kitchen = {
    owner: "Geraldine",
    hasOven: false, // or false
    fridge: {
      price: 500,
      works: true, // or false
      items: [
        { name: "cheese", expiryDate: 7 },
        { name: "raddish", expiryDate: 2 },
        { name: "bread", expiryDate: 1 }
      ]
    }
  };
  
  const hasOven = kitchen.hasOven;
  const works = kitchen.fridge.works;
  const itemName = kitchen.fridge.items[1].name; // raddish
  const expiryDate = kitchen.fridge.items[1].expiryDate;
  
  if (hasOven && works) {
    console.log(
      `${kitchen.owner}'s ${itemName} expired ${date - expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${itemName} in.`
    );
  } else if (!hasOven && works) {
    console.log(
      `${kitchen.owner}'s ${itemName} expired ${date - expiryDate} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${itemName} in.`
    );
  } else if (hasOven && !works) {
    const fridgeFixPrice = kitchen.fridge.price / 2;
    console.log(
      `${kitchen.owner}'s ${itemName} expired ${date - expiryDate} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${itemName} in. And she'll have to pay ${fridgeFixPrice} to fix the fridge.`
    );
  } else {
    const fridgeFixPrice = kitchen.fridge.price / 2;
    console.log(
      `${kitchen.owner}'s ${itemName} expired ${date - expiryDate} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${itemName} in. And she'll have to pay ${fridgeFixPrice} to fix the fridge.`
    );
  }
  

  let companies1 = ["Tesla", "Amazon", "Google", "Microsoft"]

for(let companyIndex in companies1){
  console.log(companies1[companyIndex])
}

for(let company of companies1){
    console.log(company)
  }

  for(let i = 0; i < 10; i++){
    console.log(i)
  }



  const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  const person = {
    name: names[i],
    age: ages[i]
  };
  people.push(person);
}

console.log(people);

for (const person of people) {
    console.log(`${person.name} is ${person.age} years old`);
  }



  const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
  ];
  
  const indexToRemove = posts.findIndex(post => post.id === 2);
  if (indexToRemove !== -1) {
    posts.splice(indexToRemove, 1);
  }
  
  console.log(posts);


  const posts1 = [
    {
      id: 1,
      text: "Love this product",
      comments: []
    },
    {
      id: 2,
      text: "This is the worst. DON'T BUY!",
      comments: [
        { id: 1, text: "Idiot has no idea" },
        { id: 2, text: "Fool!" },
        { id: 3, text: "I agree!" }
      ]
    },
    {
      id: 3,
      text: "So glad I found this. Bought four already!",
      comments: []
    }
  ];
  
  const postIdToRemoveComment = 2;
  const commentIdToRemove = 3;
  
  const postIndex = posts1.findIndex(post => post.id === postIdToRemoveComment);
  if (postIndex !== -1) {
    const commentIndex = posts1[postIndex].comments.findIndex(comment => comment.id === commentIdToRemove);
    if (commentIndex !== -1) {
      posts1[postIndex].comments.splice(commentIndex, 1);
    }
  }
  
  console.log(posts1);
  

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  };
  
  const keys = Object.keys(dictionary);
  
  for (const key of keys) {
    console.log(`Words that begin with ${key}:`);
    const words = dictionary[key];
    for (const word of words) {
      console.log(`    ${word}`);
    }
  }