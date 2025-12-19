const multiply =(a,b) => a *b;
const result = multiply(4,6);
//console.log(result);
const greet = (name) => `Hello ${name}`
const greetFn= greet('Dimitri paskob');

//console.log(greetFn)

const square = (n) => n *n;
const value = square(4);
const randomNum = ()=> Math.random();
//console.log(randomNum())

//? Destructure
const numbers= [1,2,3,4];
const [one,two,three,four]=numbers;

//console.log(three);
//console.log(numbers[2]);

const arrayObj = {
    name: 'js',
    framework: 'react',
    relese: '19'
};

console.log(arrayObj.name)

//! destructure
function arrayFun(userObj){
    console.log(`Programming language: ${userObj.name} and framework${userObj.framework} `)
}

//arrayFun();

const myUser={
  name: 'JS Electron',
  framework: 'Angular'
}
arrayFun(myUser)