let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]



const isGreaterThan16 = function (age) {
    return age > 16
}

let olderThan16 = ages.filter(isGreaterThan16) //notice that passing in the function will implicitly pass it the `a` parameter that the function expects

console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]