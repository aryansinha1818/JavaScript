const prompt = require("prompt-sync")();

// let name = "Aryan";
// console.log(name);
// console.log(name.length);

// console.log(`${boy2} ${boy1}`);

// let ab = `aryan's game"s`;
// console.log(ab);

//Escape Sequence Characters
let fruit = "Bana'n\"a";
console.log(fruit);

let a = `Bana\'na`;
console.log(a);

//  Notes

//      \n = new line
//      \r = carriage space
//      `aryan\'s`

// template literals
// let boy1 = `sinha`;
// let boy2 = `aryan`;
// let a = `${boy2} ${boy1}`;
// console.log(a);

//interpolation - inserting variables in the template literals is called interpolation .
let boy1 = "console";
let boy2 = "log";
let sentence = `this is how we print in JS ${boy1} ${boy2}`;
console.log(sentence);
