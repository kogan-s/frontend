const getHypotenuse = (a, b) => {
  const aSquared = a * a
  const bSquared = b * b
  const cSquared = aSquared + bSquared
  return Math.sqrt(cSquared)
}

const hypoteneuese = getHypotenuse(3, 4) 
console.log(hypoteneuese ) //prints 5