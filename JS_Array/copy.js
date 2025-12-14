let books = ["Hobbit","Node JS","Express"];
//books.pop();

//books.shift()
books.unshift("MERN stack")
//console.log(books)

//? Concat

const color1 = ["red","blue"];
const color2 = ["green","yellow"];

const allColor = color1.concat(color2);
//console.log(allColor)

//* Acces obj prop
let person ={
    name: "TinTin",
    role: "Developer",
    salary: '5k'
}
person["hobby"] = "Coding";

const personBio = person.name;
const personHobby = person["Walking"];
// console.log(person)
// console.log(personBio)
//? Object keys
const personKeys = Object.keys(person);
//console.log(personKeys.length);

//* object values

const car={
    name: "Honda",
    brand: "Accord",
    year: 2025,
}
const carObject = Object.values(car);
console.log(carObject);

//! Property check
const hasProperty = car.hasOwnProperty("brand");
//console.log(hasProperty)

//? Object assign

const targetObj = {name: "Captain Bon"};
const sourceObj = {country: "marse23"};
const result = Object.assign(targetObj,sourceObj);
console.log(result)
// Object.assign(EventTarget, source)

//! Delete
//delete car.brand;

//! Object freeze
//Object.freeze(car);
//console.log(car)

// modify
car.make="Nissian";
console.log(car)
