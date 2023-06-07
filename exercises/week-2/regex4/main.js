const url01 = "www.elevation.com"
const url02 = "www.elevation.ac.il"
const url03 = "elevation.com"


const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"


const urlValidator = function(str){
    const regex =/^www\.[a-zA-Z0-9-]+\.com$/;
    return regex.test(str);
}

console.log(urlValidator(url01)) // will return True
console.log(urlValidator(url02)) // will return false
console.log(urlValidator(url03)) // will return false

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return true
console.log(urlValidator(thirdURL)) //return false


