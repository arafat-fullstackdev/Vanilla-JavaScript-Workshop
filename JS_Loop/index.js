//* For Loop
// Initialization; Condition; Increment.Decrement
// for(let i = 0; i<=6; i++){ // let is block scope  // var function scope // const is block scope

//     console.log(i);
// }
console.log('With Var');

var j = 0;
for(;j <= 4; j++){
    console.log(j);
}
console.log('With Let');

let i = 0;
for(;i <= 4; i++){
    console.log(i);
}
console.log('With Conditional');
let g = 0;
for(; ; g++){
    if(g<=5){
        console.log(g);
    }else{
        break;
    }
}