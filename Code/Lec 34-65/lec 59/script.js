// async function fun() {
//     return 9;
// }

// fun().then((x) => {
//     console.log(x);
// });

//const prompt = require("prompt-sync")();

async function fun() {
  let weather1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  });

  let weather2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("20 Deg");
    }, 3000);
  });
  // weather1.then(alert);
  // weather2.then(alert);

  //Jab takk yeh promise resolve nai ho jaati
  //till then wait
  console.log("Fetching the weather of Delhi...");
  let w1 = await weather1;
  console.log("Fetching the weather of Delhi..." + w1);
  console.log("Fetching the weather of Pune...");
  let w2 = await weather2;
  console.log("Fetching the weather of Pune..." + w2);
  return [w1, w2];
}

console.log("Welcome to weather console");
let a = fun();
//If we do a.then() instead of console.log(a), then we get the values in array format
a.then((value) => {
  console.log(value);
});
// console.log(a);
