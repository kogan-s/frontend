
const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}

sum = mathOperations();
console.log(sum(11,12));