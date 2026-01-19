const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

//x.toString(2)

const op = arr.map(double);
console.log(op);

//or this can be done
const arr1 = [1, 2, 3, 4, 5];

let op1 = arr1.map(function add(x) {
  return x + 10;
});

console.log(op1);

//one way
// let op2 = arr1.map((x) => {
//   return x + 100;
// });

//another way
let op2 = arr1.map((x) => x + 100);

console.log(op2);
