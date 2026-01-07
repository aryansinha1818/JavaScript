//this s pointing to name
let name = {
  firstname: "aryan",
  lastname: "sinha",
  printName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.printName();

let list = {
  age: 19,
  luckyNum: 9,
  //function name
  printlist: function () {
    console.log(this.age + this.luckyNum, "this is the inside container");
  },
  phone: function () {
    console.log("1234");
  },
};

list.printlist();
list.phone();
