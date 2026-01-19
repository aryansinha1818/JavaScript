const prompt = require("prompt-sync")();

//method 1 to call a function
// function func(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// console.log(func(10, 90));

//method 2
// let anyname = function (num1, num2) {
//   let res = num1 * num2;
//   return res;
// };

// console.log(anyname(10, 9));

//method 3
// let fun = (num1, num2) => {
//   let ans = num1 - num2;
//   return ans;
// };
// console.log(fun(190, 100));

const sum = () => {
  console.log("Hello I am going to be an awesome SDE");
  return sum;
};
sum();
let a = sum();
console.log(a);
