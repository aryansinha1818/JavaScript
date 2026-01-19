const prompt = require("prompt-sync")();

//Escape sequence3 character is not counted.
let str = "ThisIsSample'sString";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Slice
// syntax - start index, end index
console.log(str.slice(4, 12));
// Slicing it from 4 th index
console.log(str.slice(4));

//replace
//console.log(str.replace(name, nametobechanged));

//concat
//console.log(str.concat("nametobeadded" , str, "ifanothorname tobeadded"));

//trim

// Stack overflow and MDN Page

//Strings are immutable - strings cannot be changed the original strings cannot be changed.
//One can slice, concatenate and all but the original string remains the same.

let str1 = "HiMyNameisAryan";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}
