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



// Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.
// Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.
// Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.
// Microtask Queue: Promises and other microtasks go into the microtask queue, which is processed before the task queue.
// Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.
  
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