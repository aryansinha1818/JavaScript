let arr = [1, 2, 3, 4, 5];
// let [a, b, c, d, e] = arr;
// console.log(a, b, c, d, e);

// let [a,  ...r] = arr;

// console.log(a, r);

// let obj = { a: 1, b: 2 };
// let { a, b } = obj;
// console.log(a, b);

// let num = [3, 2, 4];

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log("the value is", sum(...num));

let obj = {
  name: "Aryan Singa",
  age: 24,
  language: "JS",
};
console.log({ ...obj, name: "Aryan Sinha" });
console.log({ ...obj, name: "XYZdf" });
