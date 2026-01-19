// |------------ Call method -------------------|

//this s pointing to name
let name = {
  firstname: "aryan",
  lastname: "sinha",
  num: 10,
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

//function borrowing

// syntax :
//which function is to be called, each nand every functions in js has access to call

//arg = reference what thtis should point to?
let address = {
  city: "chennai",
  state: "tamil nadu",
  printAddress: function () {
    console.log(this.city + " " + this.state);
  },
};

let address2 = {
  city: "delhi",
  state: "UT",
};

let address3 = {
  city: "bangalore",
  state: "karnataka",
};

address.printAddress.call(address2);

//we borrowed
address.printAddress.call(address3);

//parameter
let address10 = {
  city: "chennai",
  state: "tamil nadu",
  printAddress: function () {
    console.log(this.city + " " + this.state);
  },
};

let printAddress = function (country) {
  console.log(this.city + " " + this.state + " " + country);
};

printAddress.call(address10, "India");
