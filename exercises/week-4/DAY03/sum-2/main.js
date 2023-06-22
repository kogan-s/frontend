const add = (() => {
  let sum = 0;

  return (num) => {
    sum += num;
    return sum - num;
  };
})();

console.log(add(3)); // 3
console.log(add(1)); // 4
console.log(add(2)); // 3
console.log(add(2)); // 4
console.log(add(8)); // 10

