// //*  creating a blocking code
// console.log('Starting a blocking code!');
// for(let i =0; i<1e9; i++){
//     //simulate some operations
// // console.log(i);
// }
// //*  creating a non-blocking code
// console.log('Finished non-blocking code!');

//* Create a non-blocking code  using set timeout

console.log('Starting a non-blocking code!');
setTimeout(() =>{
    console.log('Create a Non-Blocking code!');
}, 4000)
console.log('Finished a non-blocking code!');