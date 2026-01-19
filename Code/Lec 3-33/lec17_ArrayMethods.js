const prompt = require("prompt-sync")();

let arr1 = [12, 11, 13, 14, 15, false, "Not given"];

// to string method
let ans = arr1.toString();
console.log(ans);

//join method => :,and,_ can be used to join.
let c = arr1.join("_");
console.log(c);

//pop - removes the array element.

arr1.push(188);
//add element  in the end

//shift method
//removes first element and returns it.

//Unshift = Adds an element in the start of the element
let a = [1, 2, 4];
let net = a.unshift(9);
console.log(net, a);
console.log(a);
