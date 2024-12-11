//* SetTimeout & setInterval

// const showMessage=()=>{
//     console.log('Set Time OUt Function after 5  seconds!');
// }
// //? schedule a function to run after a delay

// setTimeout(showMessage, 5000) ;
// //* another way of using setTimeout

// setTimeout(function (){
//   console.log('Set time out function 7 seconds!');
// }, 7000);

// console.log('Set time out 7 sec.'); 
//! settime out clear

// const timeoutID = setTimeout(() =>{
//     console.log('Set timeout function clear');
// },3000);
// console.log('time out scheduled!');
// clearTimeout(timeoutID);

// console.log('time out canceled!')

//* Setinterval
// const interVal = setInterval(() =>{
//     console.log('Set interval!');
// }, 2000); 
let counter =0;
 const interValId= setInterval(() =>{
   
counter ++;
console.log('Counter value increase!');
// apply condition
if(counter >=4){
    clearInterval(interValId);
}
 },2000);