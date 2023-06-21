const myObject = {
  numbers: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
  *[Symbol.iterator]() {
    for (const number of this.numbers) {
      if (number % 2 === 0) {
        yield number;
      }
    }
  }
};

for (let x of myObject) {
  console.log(x);
}