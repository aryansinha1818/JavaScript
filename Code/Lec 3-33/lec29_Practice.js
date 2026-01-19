const prompt = require("prompt-sync")();

let age = prompt("Enter your age");
age = Number.parseInt(age);

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

if (canDrive(age)) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}
