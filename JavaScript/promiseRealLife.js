function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    },
  );
}

fetchData()
  //data is like a pointer or reference to the response that we got from the API.
  // It holds everything the API sent back.
  // Using this data variable, we can access any part of the response, like data.body, data.title, etc.
  .then((val) => {
    let oldTitle = val.title;
    val.title = "Aryan";
    console.log(val.title);
    console.log(oldTitle);
  })
  .catch(function (err) {
    console.log(err);
  });
