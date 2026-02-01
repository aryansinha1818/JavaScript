// function add (a, b, c)  {
//   return a + b + c;
// };

// let a = add(10, 10, 100);
// console.log(a);

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const ans = add(2)(3)(5);
console.log(ans);
