// var Person1 = {
//   firstName: "Thushar",
//   secondName: "Malhothra",
//   age: 25,
// };

// console.log(Person1);

// //dot notation

// console.log("The age of the Person1 is ", Person1.age);

//Bracket notation

// console.log(
//   "The name of the Person1 is",
//   Person1["firstName"],
//   "and the second name is",
//   Person1.secondName,
//   "."
// );

var profile1 = {
  firstName: "Soman",
  secondName: "Mesthri",
  age: 25,
  address: {
    city: "Kannur",
    PostOffice: "Kappad",
    LandMark: "KappadTemple",
  },
};

console.log(profile1.address.LandMark);
console.log(profile1["address"]);

profile1.Skills = ["HTML", "CSS", "JS"];

console.log(profile1);
