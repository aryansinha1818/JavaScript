// It's a convenient way to convert objects that are not true arrays (like NodeList, arguments object, or strings) into arrays.

let str = "hello";
let q = Array.from(str);
console.log(q);
