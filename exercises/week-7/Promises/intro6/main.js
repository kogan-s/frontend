const performAsyncOperation = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        // Operation succeeded
        resolve(randomNumber);
      } else {
        // Operation failed
        reject(new Error("Operation failed."));
      }
    }, 2000); // Simulating a 2-second delay
  });
};

// Using the promise
performAsyncOperation()
  .then((result) => {
    console.log("Operation succeeded. Result:", result);
  })
  .catch((error) => {
    console.log("Operation failed. Error:", error);
  });
