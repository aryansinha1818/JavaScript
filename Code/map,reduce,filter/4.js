const users = [
  { name: "Aryan", lastname: "ancn", age: 21 },
  { name: "SInha", lastname: "hello", age: 21 },
  { name: "SInha1", lastname: "car", age: 212 },
  { name: "SInha2", lastname: "royal-card", age: 121 },
  { name: "SInha3", lastname: "tv", age: 321 },
  { name: "SInha4", lastname: "instagram", age: 6721 },
];

const op = users.map((x) => {
  return x.name + " " + x.lastname;
});

console.log(op);

// const op1 = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
// }, {});

//one way when we want the first name with x.age < 30
// let age = users.filter((x) => {
//   if (x.age < 30) return x.name;
// });
// console.log(age);

let age = users.filter((x) => x.age > 30).map((x) => x.name);
console.log(age);
