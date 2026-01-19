const prompt = require("prompt-sync")();

let num = [3, 54, 1, 2, 4];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//for-each loop : Does not work in html collection
// num.forEach((element) => {
//   console.log(element * element);
// });

//Array.from loop
let name = "Aryan";
let arr = Array.from(name);
console.log(arr);

//for..of loop
for (let i of num) {
  console.log(i);
}

//for-in loop : Displays the keys of the array.
for (let j in num) {
  console.log(j);
}
