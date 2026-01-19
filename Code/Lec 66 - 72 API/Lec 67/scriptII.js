//post request then we use options
let options = {
  method: "POST",
  headers: {
    "Content-type": "application/JSON",
  },
  body: JSON.stringify({
    title: "Aryan",
    body: "Sinha",
    userId: 1,
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((value) => console.log(value));
