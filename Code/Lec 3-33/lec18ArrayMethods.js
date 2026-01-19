const prompt = require("prompt-sync")();

// let num = [12, 1, 2, 3, 4, 9, 5, 6];
// console.log(num);

// delete num[0];
// console.log(num.length);
// console.log(num);
let compare = (a, b) => {
  return a - b;
};

let num = [12, 1, 2, 3, 4, 9, 5, 6];
// let num2 = [1.2, 4.9, 9.9];
// let num3 = num.concat(num2);
// console.log(num3);
// console.log(num);
// console.log(num2);

// num.sort(compare);
// num.reverse();
// console.log(num);

// num.splice(3, 4, 8383, 73737, 2022, 3733);
// console.log(num);

//slice
let a = num.slice(3);
console.log(a);
