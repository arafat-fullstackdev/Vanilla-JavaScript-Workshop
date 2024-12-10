//* You are trying to debug a variable but it doesn't print the expected value in the console.
let a= 10;
//! Problem
console.log('The value of a is ' + a +5);
//? Solution
// use temple literal
console.log(`The value of a is : ${a+5}`)
//* add parenthesis in the console log
console.log('The solution with parenthesis:' +(a +5))