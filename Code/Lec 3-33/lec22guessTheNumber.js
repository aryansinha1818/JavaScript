const prompt = require("prompt-sync")();

let num = Math.random();
let unum;
while (unum != num) {
  unum = prompt("Enter a number of your choice(1-100)! ");
  unum = Number.parseInt(unum);
  if (unum == num) {
    console.log("Booyeah Correct! ");
  }
}
