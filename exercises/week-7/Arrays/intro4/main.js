let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

const isGreaterThan16 = (a) => a > 16
let olderThan16 = ages.filter(isGreaterThan16)

console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]