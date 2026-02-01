let arr = [1, 20, 30];

console.log(arr[2]);
console.log(arr.length);

arr.push(1000);

console.log(arr);
console.log(arr[3]);
console.log("accesing invalid index", arr[4]);

arr.pop();
console.log("Removed from last", arr);

arr.unshift(100);
console.log("Added from first", arr);

arr.shift();
console.log("Removed from first", arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("using for each loop");
arr.forEach((v) => {
  console.log(v + 10);
});
