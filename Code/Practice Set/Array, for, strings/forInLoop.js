let obj = {
  a: "1",
  b: "2",
  c: "3",
};

//for in loop -- which will display the objects
for (let t in obj) {
  console.log("the value is ", t);
}

let val = ["abc", "def", "ghi"];

//for-of loop -- it will be applicable only on array
console.log("the indexes can be displayed using for-in in array");
for (let t1 in val) {
  console.log(t1);
}
for (let t2 of val) {
  console.log(t2);
}
