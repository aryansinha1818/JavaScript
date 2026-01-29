const promise = new Promise(function (resolve, reject) {
  let success = 10;

  if (success) {
    resolve("True");
  } else {
    reject("Something went wrong!");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
