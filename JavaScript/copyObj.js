const obj1 = {
  name: "Aryan",
  age: 19,
  location: { city: "Delhi" },
};
console.log(obj1.location.city);
//deep
const obj2 = { ...obj1 };

//shallow copy
//i.e. a completely new copy which is independent
const obj3 = Object.assign({}, obj1);

obj3.location.city = "Dehradun";
console.log(obj3.location.city);

//structuredclon e - create a deep copy

const ok = structuredClone(obj1);
console.log(ok.age);
