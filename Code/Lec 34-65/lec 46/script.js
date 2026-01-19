// alert("Hello");

// let a = setTimeout(function () {
//   alert("I am inside of settimeout");
// }, 2000);

// console.log(a);

const sum = (a, b) => {
  console.log("Running " + (a + b));
  a + b;
};

setTimeout(sum, 1000, 1, 2);
