const a = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }),
      2000;
  }); 
};

(
    ()=>{
        await a("Hello1")
        await a("Hello2")
    }
)()