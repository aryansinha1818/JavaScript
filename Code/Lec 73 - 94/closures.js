message = "GM";
function hello1() {
  let message = "Good Morning";
  console.log("Hello1: " + message);
  function msg() {
    message = "Good evening";
    console.log(message);
  }
  return msg;
}

let a = hello1();
a();
