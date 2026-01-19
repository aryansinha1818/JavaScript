let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 4000);
  });
};

// One way with async await
// let f = async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// };

// f();

//IIFE

(async () => {
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})();
