// const prompt = require("prompt-sync")();

// let arr = [12, 14, 18];

// arr.map((value) => {
//   console.log(value);
// });

let arr1 = [1, 2, 3, 4, 5];
let func_perform = arr1.map(function (item) {
  return item + 1;
});

console.log(func_perform);

// map makes a new array whereas for each loop performs operation on array
// let a = arr.map((value) => {
//   console.log(value);
//   return value;
// });
// console.log(a);

//Array filter method
// let arr2 = [3, 4, 23, 45, 24];
// let a2 = arr2.filter((a) => {
//   return a < 10;
// });
// console.log(a2);

// Array Reduce
let arr3 = [1, 2, 3, 5, 2, 1];
const reduce_func = (h1, h2) => {
  return h1 + h2;
};
let newark3 = arr3.reduce(reduce_func);
console.log(newark3);
