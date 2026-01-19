let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("VALUE 2");
    reject("Error found");
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("VALUE 3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value);
// });

//promiser_all - If any one rejected then none is printed
// let promise_all = Promise.all([p1, p2, p3]);
// promise_all.then((value) => {
//   console.log(value);
// });

//Promise : even if one of them fails the other will produce the results
let promise_all = Promise.allSettled([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});
