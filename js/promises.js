const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000)
});

promise.then(console.log)