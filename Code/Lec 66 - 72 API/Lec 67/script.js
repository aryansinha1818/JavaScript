//let promise = fetch(url, [options])

const createToDo = async (toDo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify(toDo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getToDo = async (id) => {
  let p = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  let r = await p.json();
  return r;
};

const mainFunc = async () => {
  let toDo = {
    title: "Harry",
    body: "Potter",
    userId: 1100,
  };
  let toDor = await createToDo(toDo);
  console.log(toDor);
  console.log(await getToDo(5));
};

mainFunc();
