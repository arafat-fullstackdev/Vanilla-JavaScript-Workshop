//IIF Immediately Invoked Function
// (function (){
//     console.log('Hello Fungo!');
// })()

// (function(m,n){
//   let count= m +n;
//   console.log(count)
// })(4,8)

// Arrow
// ((a,b)=>{
//     let res = a +b;
//     console.log(res)
// })(5,5)

//Default multifly
// const multifly= function(a,b){
//   const result = a *b;
//   console.log(`Multifly: ${result}`);
// }
// multifly(7,6)

//? Simple Calculate

// const add = (a,b)=>{
//    let result = a + b;
//    return result;
   
// }
// console.log(add(4,6));

// const sub = (a,b)=>{
//    let result = a - b;
//    return result;
   
// }
// console.log(sub(40,6));

// const multi = (a,b)=>{
//    let result = a * b;
//    return result;
   
// }
// console.log(multi(4,6)); 

// const div = (a,b)=>{
//    let result = a + b;
//    return result;
   
// }
// console.log(div(40,6));

//** car */

// function characterCount(text){
//   let countText= text.length;
//   return countText;

// }
//  const textChar= characterCount("JavaScript")
//  console.log(textChar)
 

//  function charLowerCase(text){
//   let lowerText =text.toLowerCase();
//   return lowerText;
//  }

//  console.log(charLowerCase('JAVASCRIPT'))

//  function charUpperCase(text){
//   let upperCase= text.toUpperCase();
//   return upperCase;
//  }
//  console.log(charUpperCase('nodejs'))

//  const slicedText= function(txt,start,end){
//   let sliced = txt.slice(start,end);
//   return sliced;
//  }

//   let slicedCode= slicedText('MongoDB', 0,6);
//   console.log(slicedCode)

//?String formate

function formatString(str1,str2){
  let upperString= str1.toUpperCase();
  let lowerString= str2.toLowerCase();
  let combined= upperString + " " + lowerString;
  return combined;
}
let modify = formatString("Express", "JS");
console.log(modify)