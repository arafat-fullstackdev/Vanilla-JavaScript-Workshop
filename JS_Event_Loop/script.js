// Event loop
// for(let i =0; i<=10; i++){
//     console.log(i);
// }
//? HEAP for Memory Allocation
//? LIPO(Last IN First Out) = Stack
const second = () => console.log(" I am Second");
const third = () => console.log(" I am Third");

const first = () => {
  console.log("I am First");

  second();
  setTimeout(second,3000); // Async fun
  third();
};

first();
