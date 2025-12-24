// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

let checkNumber = ((resolve,reject)=>{
  let number = 6;
  if(number % 2 === 0) resolve("The value is even");
  else reject("the value is odd")
});

checkNumber.then((message)=> console.log(message))
.catch((error)=> console.log(error));

checkNumber();