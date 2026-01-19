let b = document.body;

//the first child will be displayed
console.log(b.firstChild);
//the element will be displayed
console.log(b.firstElementChild);

console.log("THe change", document.head);
console.log("doc-ele", document.documentElement);

console.log("all child Nodes", b.childNodes);

//the array conversion from list to array
let arr = Array.from(document.body.childNodes);
console.log(arr);

console.log("New");
console.log(document.firstElementChild);

const changeBodyRed = () => {
  document.body.firstElementChild.firstElementChild.style.background = "red";
};
