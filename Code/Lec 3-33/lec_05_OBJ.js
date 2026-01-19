//Practice Set

let a = "pink";
let b = a + 10;
console.log(a);
console.log(b);

console.log(typeof b);

// an object is just an reference. Even though it has const variable then also we can add a key .

// But we can't store any number/object/string in that object

const ab = {
  name: "harry",
  section: 1,
  isPrincipal: false,
};

console.log(ab);
console.log(ab["section"]);
console.log(ab["name"]);
console.log(ab["isPrincipal"]);

ab["friend"] = "Sinha";
console.log(ab["friend"]);
console.log(ab);

aab = {};

console.log("New");
console.log(ab.name);
