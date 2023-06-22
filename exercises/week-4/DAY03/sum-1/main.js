const add = (() => {
  let sum = 0;

  return (num) => {
    sum += num;
    return sum;
  };
})();

console.log(add(3)); // 3
console.log(add(1)); // 4
console.log(add(2)); // 6
console.log(add(2)); // 8
console.log(add(8)); // 16



