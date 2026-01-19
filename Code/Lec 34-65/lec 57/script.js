let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //alert("Hey I am resolved")
    resolve(1);
  }, 2000);
});

p1.then(() => {
  console.log("Congratulations it is resolved");
});

p1.then(() => {
  console.log("Well Done again!!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 3000);
  });
}).then((value) => {
  console.log(value);
});
