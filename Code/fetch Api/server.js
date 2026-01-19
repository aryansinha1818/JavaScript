//this is the format
fetch("https://www.google.com")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("there is a problem", error);
  });
