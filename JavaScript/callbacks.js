function call1() {
  console.log("this is call from call1");
}
function base(name, callback) {
  console.log("Hi, " + name);

  callback();
}

base("Aryan", call1);
