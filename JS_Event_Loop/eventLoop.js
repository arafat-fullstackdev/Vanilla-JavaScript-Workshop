// Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.
// Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.
// Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.
// Microtask Queue: Promises and other microtasks go into the microtask queue, which is processed before the task queue.
// Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.


// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");

console.log('Start here');

setTimeout(()=> {
    console.log('Node Event Code!');
},4000)

//! promise
Promise.resolve().then(()=> {
    console.log('Promise Return')
})
console.log('Start end');