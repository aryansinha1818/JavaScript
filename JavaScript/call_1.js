// call is used to invoke a function immediately and decide what this should refer to while passing arguments one by one
let person = {
  name: "Aryan",
  lastname: "Sinha",
};

function printName(city) {
  console.log(this.name + " " + this.lastname + " is from " + city);
}

printName.call(person, "Delhi");
