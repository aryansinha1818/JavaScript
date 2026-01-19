let marks = {
  harry: 90,
  s: 10,
  a: 100,
  b: 99,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

let a1 = Object.keys(marks)[2];
console.log(a1);
console.log("The marks of a is " + marks[Object.keys(marks)[2]]);
for (let i in marks) {
  console.log(i);
  console.log("the marks of " + Object.keys(marks)[i]);
}
