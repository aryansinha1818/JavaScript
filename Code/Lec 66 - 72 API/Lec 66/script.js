//AJAX = Asynchronous JS and Xml

let p = fetch("https://www.google.com"); //fetch("website link")

//p.then = when p is solved or some action is performed in p then it needs to pass in response

p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers);
  return response.json();
}).then((value2) => {
  return value2;
});

//practice
// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
// }).then((value2) => {
//   return value2;
// });
