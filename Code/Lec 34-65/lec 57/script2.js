let p1 = new Promise((resolve, reject) => {
  console.log("Hey I am not resolved");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

p1.then(() => {
  console.log("Congratulations this promise is now resolved");
});

p1.then(() => {
  console.log("Hello");
  return new promise = ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (4)
        }, 6000)
    })

    }).then((value)=>{
    console.log(value);
})
