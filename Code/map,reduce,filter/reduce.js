let arr = [1, 1, 1, 1, 1];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

let op = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

let max = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(max);

console.log(op);
