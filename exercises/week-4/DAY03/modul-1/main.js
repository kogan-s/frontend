const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
}
}

const m = mathOperations()
console.log(m.add(3, 4)); // Output: 7
console.log(m.sub(7, 2)); // Output: 5
console.log(m.mult(5, 2)); // Output: 10
console.log(m.div(10, 2)); // Output: 5


console.log(m.add(13, 29));
console.log(m.mult(1.75, 24));
console.log(m.mult(7, m.div(36, 6)));