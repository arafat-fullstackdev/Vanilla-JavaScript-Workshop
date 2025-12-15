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
//console.log(carObject);

//! Property check
const hasProperty = car.hasOwnProperty("brand");
//console.log(hasProperty)

//? Object assign

const targetObj = {name: "Captain Bon"};
const sourceObj = {country: "marse23"};
const result = Object.assign(targetObj,sourceObj);
//console.log(result)
// Object.assign(EventTarget, source)

//! Delete
//delete car.brand;

//! Object freeze
//Object.freeze(car);
//console.log(car)

// modify
car.make="Nissian";
//console.log(car)

//? Nesting Obj

const developer={
    role: "FullStack",
    stack: 'MERN',
    learningP: "Udemy",
    engineering:{
        role: 'Logic Building',
        stack: "Fullstack",
        learningP: 'Techno'
    }
}

//console.log(developer);

//? Access nested element
const userRole = developer.engineering;
//console.log(userRole)

//* Object an Array
const userProfile= [
    {
        name: "Bob",
        stack: 'MERN',
        role: 'Developer'
        
    },
    {
        name: 'Alison',
        stack: 'Lamp',
        role: 'engineer'
    },
    {
        name: 'Hololo',
        stack: 'QE',
        role: 'Q'
    }]
//console.log(userProfile)
let firstProfile = userProfile[0];
//console.log(firstProfile)
//!Add object by push method
userProfile.push({name: "Deny", stack: "Python", role: 'Backend'});

//! modify 
const modifyData= userProfile[0].name= 'Bon';
//console.log(userProfile)

//? Array transformation
const arrayL = ['1','2','3','4'];
arrayL.forEach(function(n){
    let double = n *2;
  //console.log(double);
})

const products = [
    {name: 'laptop', stock: 4, price: 2000},
    {name: 'desktop', stock: 14,  price:2300},
    {name: 'tablet', stock: 10,  price: 2200},
];

// product.forEach((seperateP)=>{
//    // console.log(`Product Update: ${seperateP.name} and ${seperateP.stock}`);
// })
 const discountprice= products.map((product)=>{
    return{
       name: product.name,
       stock: product.stock,
       price: product.price * 0.9
    }
})

//console.log(discountprice)

//! Array with map()
let coder =['JS','C','C++','Java','Python'];

coder.map( function (code){
//console.log(code);
})

const numberArray = [2,4,6,8];

const doubleElements = numberArray.map(function (num){
  //console.log(num)
  return num *3;
})

//console.log(doubleElements)

//! reduce function

let number1 = [1,2,3,4,5,6];

const totalNum= number1.reduce(function(accumulator, currentValue){
//   console.log('acc',accumulator);
//   console.log('value', currentValue)

return accumulator +currentValue;
},0)

//console.log(totalNum)

const products2 = [
    {name: 'laptop', stock: 4, price: 2000, isStock: false},
    {name: 'desktop', stock: 14,  price:2300, sStock:true},
    {name: 'tablet', stock: 10,  price: 2200, sStock:true},
];

 const totalValue= products2.reduce(function(acc, product){
    // console.log(acc);
    // console.log(curr);

    return acc + product.stock + product.price

},0)

//console.log(totalValue)

//? find()
let number3 =  [5,10,20,25];
const findValue = number3.find(function (num){
    return num> 10;
})

console.log(findValue)
