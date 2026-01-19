// for (let i = 0; i < 34; i++) {
//   console.log(i * 2);
// }

//
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

//For-in loop

let obj = {
  a: 12,
  b: 13,
  c: 14,
  d: 15,
};

//For in loop
//below will print the keys in key-value pair
for (let p in obj) {
  console.log(p); //a,b,c,d
}

//when we do obj.keys then the indexes are printed.
for (let indx in Object.keys(obj)) {
  console.log(indx);
}

//below will print the value
for (let i in obj) {
  console.log(obj[i]);
}
// obj["aryan"] = "sinha";

// console.log(obj);

//For of loop
for (let i of "Aryan") {
  console.log(i);
}

let items = ["chair", "car", "pen", "ball", "cat"];
for (let i of items) {
  console.log(i);
}
console.log("Some variations");
for (let i of Object.keys(obj)) {
  console.log(i);
}
for (let i of Object.values(obj)) {
  console.log(i);
}

console.log("object entries");
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} : ${value}`);
}
