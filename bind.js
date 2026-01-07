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

// |----- apply method_____

//how we pass arguments to a function
//apply method takes an array as an argument

printAddress.call(address10, ["India", "World"]);

//bind method : it binds to the obj and return a copy of the method

let f1 = printAddress.bind(address2, "A");

f1();

let f2 = printAddress.bind(address3, ["A", "B"]);

f2();
