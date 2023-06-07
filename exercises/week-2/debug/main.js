//greet() //works without a problem
//greetExpression() //throws an error

//function greet(){
//  console.log("Hello there, from the wild, wild West")
//}

//const greetExpression = function(){
//  console.log("Uh oh")
//}


/*const person = {
  name: "Julius",
  speak: function() {
    console.log("Et tu, Brutus?")
  }
}

console.log(person.name) //you know what this will do

person.speak() //and this? Try it out!

*/

const person = {
  name: "Julius",
  speak: function(food) {
    console.log("i like " + food)
  }
}

console.log(person.name) //you know what this will do

person.speak("cheese toast") //and this? Try it out!


//function isEven(number) {

  //if (number%2 == 0 ) {
 //        return true;
 // }
  //     else {
   //     return false;
    //  }
//}

function isEven(number) {
  return number%2 === 0;
  }

  
console.log(isEven(3))
console.log(isEven(4))
console.log(isEven(1))
console.log(isEven(2))

//ex1




//ex2
//Write a function that takes in an array of numbers.
//The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.

function printOddNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (!isEven(numbers[i])) {
      console.log(numbers[i]);
    }
  }
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);


//ex3

/*
Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. 
The function should return true or false depending on whether the number exists in the array.
Hint: You should loop through the array, and for each item in the array, check if it equals the number that was passed.
checkExists([1, 2, 3], 2) - should return true
checkExists([1, 2, 3], 5) - should return false
*/

function checkExists(numbers, number) {
  for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i])
    if (numbers[i] == number) {
      return true;
    }
  }
return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));



//ex4
/*Create an object called calculator.
It should have two methods: add and subtract
Both methods take two parameters, and should return the sum/difference of both numbers.
Use this to test your code:
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42 */

const calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },

  subtract: function(num1, num2) {
    return num1 - num2;
  }
}

const result1 = calculator.add(20, 1);
console.log(result1);
const result2 = calculator.subtract(30, 9);
console.log(result2);
console.log(calculator.add(result1, result2)) //should print 42 */


/* Exercise 5 (Extra Practice)
Complete the following code:
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
To complete the above you will need to create both the increaseByNameLength and makeRegal functions.
You should be able to write the body of both functions in one line; there’s no trick here - it’s just practice.*/

function makeRegal(name) {
  return "His Royal Highness, " + name; 
}

function increaseByNameLength(money, name) {
  return money*name.length; 
}


const turnToKing = function(name, money){
  name = name.toUpperCase()
  money = increaseByNameLength(money, name)
  name = makeRegal(name)

  console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100);


function foo(a,b,c){
    return a+b+c;
}

function boo(a,c){
    var d = c + 2;
    var x = foo(a,c,d);
    return x-d;
}

function goo(x){
    var y = boo(x, 3);
    return y + foo(y,y,y);
}

function moo(n, k){
    return goo(n) + too(k);
}

function too(j){
    return j * 2;
}

function zoo(z){
    return too(z);
}

function noo(a,b){
    if (boo(a,b) * 3.7 > 5887){
        return moo(4, koo(b));
    }
    return boo(a,b) + 4.66;
}

function koo(d){
    var f = zoo(d) * 5.3;
    return f * 1.2;
}

var r = goo(5);
var w = r + too(3) + zoo(r) + boo(r, too(712));
var q = foo(r, w, 4) + koo(34) + noo(w,r);
