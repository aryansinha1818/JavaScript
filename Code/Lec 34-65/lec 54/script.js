let promise = new Promise(function (resolve, reject) {
  resolve(54);
});

console.log("Hello");

setTimeout(function () {
  console.log("My name is John");
}, 2000);

console.log(promise);
