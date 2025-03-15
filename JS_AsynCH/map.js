// //? Array map protype
// const Digits = [2,4,6,8,10];

// Digits.map((elements) =>{
//     //return elements * 2;
//     return elements * 3;
// });

// //? Store Data in Res;
// Res = Digits.map((elements) =>{
//     return elements * 4;
// });

// console.log(Digits);
// console.log(Res);  

//** Array Prototyp map.reduce() */
const numbers = [10,20,30,40];
// array Parameter: prevState = 0, currentState = 10, arrayIndex =0; numbers
const store = numbers.reduce((prevState, currentState) =>{
    return prevState + currentState;
},10);  //initial value
console.log(store);
