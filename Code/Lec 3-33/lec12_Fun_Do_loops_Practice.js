const prompt = require("prompt-sync")();

const marks = {
  A: 10,
  B: 20,
  C: 30,
};

// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log(
//     Object.keys(marks)[i] + " Marks got " + marks[Object.keys(marks)[i]]
//   );
// }

// Problem 2
// for (let i in marks) {
//   console.log(i + " has got " + marks[i] + " marks ");
// }

//problem 3
// let num = 10;
// let i;
// while (i != num) {
//   i = prompt("Enter the correct number ");
// }
// console.log("Good job!!");

//problem 5
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(4, 5, 6, 7));
