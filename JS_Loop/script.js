
/* for(Initial,Condition,Increment)
*/
// for(let i =0; i<6;i++){
//     console.log(i);
// }
// let i =0
// for(; i<6;i=i+2){
//     console.log(i);
// }

//  for(let i =0; i<6;i++) console.log(i);

// let i =0
//  for(; ;){
//     console.log(i)
//     i++;
//     if(i==6) break;
// } 

// for(let i =0, j=0; console.log('check',i), i<6 && j<16; i++, j++){
//     console.log(i,j);
// } 

let sum=0;
for(let i =0; i<=100; sum= sum+i, i++){
    //console.log(sum);
}

//? Random Number
console.log(Math.floor(Math.random()*10))

//? OTP
let otp='';
for(let  i =0; i<4; otp=otp+ Math.floor(Math.random()*10), i++);
console.log(otp);
<<<<<<< HEAD

//? Ai Loop
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
  }

  let arr = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


console.log("Final merged version");

//* For each loop

function process(num){
  console.log(num);
}

[1,2,3,4].forEach((i)=>{
  process(i);
});