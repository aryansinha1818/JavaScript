const prompt = require("prompt-sync")();

//startswith
//endswith

let str1 = "this is 1000";
console.log(str1.slice("this is ".length));

str1[4] = "k";
console.log(str1); //string is immutable
