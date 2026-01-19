const prompt = require("prompt-sync")();

let marks_scored = [12, 11, 13, 14, 15, false, "Not given"];
console.log(marks_scored[4]);
console.log(marks_scored);

//Array's are mutable unlike strings which are immutable.
marks_scored[1] = 18;
console.log(marks_scored);
