// Resolve
// let p = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("Fulfilled");
//     resolve(true);
//   }, 5000);
// });

//Reject
// let p = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("Fulfilling failed");
//     reject(new Error("Errrrrrrrroooofoorrrrrrr!"));
//   }, 5000);
// });

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("Fulfilled");
    resolve(true);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("Fulfilling Failed");
    reject(new Error("Error Found"));
  }, 5000);
});

//Separate catch and result
// p1.then((value) => {
//   console.log(value);
// });

// p2.catch((error) => {
//   console.log("some error occurred in p2");
// });

// single catch and result
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
