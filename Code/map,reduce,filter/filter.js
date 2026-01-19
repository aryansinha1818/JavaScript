let arr1 = [1, 2, 3, 4, 5];

function isOdd(x) {
  return x % 2;
}

const output = arr1.filter(isOdd);

// const evenOp = arr1.filter((x) => {
//   return x % 2 === 0;
// });

//Another way
// const evenOp = arr1.filter((x) => x % 2 === 0);

//when mentioning function then the arrows are not needed
const evenOp = arr1.filter(function isGreater(num) {
  return num >= 3;
});

console.log(output);
console.log(evenOp);
