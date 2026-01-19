const prompt = require("prompt-sync")();

// let arr = [1, 2, 3, 4, 5, 6];
// let a = prompt("Enter a number ");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let num;
// do {
//   num = prompt("Enter the number to be added in the array");
//   num = Number.parseInt(num);
//   arr.push(num);
// } while (num != 0);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 10, 15, 18];
// let n = arr.filter((x) => {
//   return x % 2 == 0;
// });
// console.log(n);

// let arr = [1, 2, 3, 4, 5, 6, 10, 15, 18];
// let n = arr.map((x) => {
//   return x * x;
// });
// console.log(n);

let arr = [1, 2, 3];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
