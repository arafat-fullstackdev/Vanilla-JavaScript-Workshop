// function foo(b){
//     let a = 11;
//     return a + b + 22;
// }

// foo();

// function goo(y){
//     const x = 33;
//     return (x * y);
// }

// goo();

// const bak = goo(44);
// console.log(goo());
// console.log(foo());  

// //? MDN
// function foo(b) {
//     const a = 10;
//     return a + b + 11;
//   }
  
//   function bar(x) {
//     const y = 3;
//     return foo(x * y);
//   }
  
//   const baz = bar(7); // assigns 42 to baz
  
console.log('Start!');


//Call back fun start
setTimeout(() =>{
  console.log('Async test moments!');
},2000);
//Call back fun end


Promise.resolve().then(()=>{
  console.log('resolve call!');
})
console.log('Start!');