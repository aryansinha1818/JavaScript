function outer() {
  let count = 0;
  function inner() {
    count = count + 2;
    console.log(count);
  }
  return inner;
}

let counter = outer();
counter();
counter();
counter();
