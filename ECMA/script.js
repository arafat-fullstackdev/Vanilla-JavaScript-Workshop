//? ECMA Script: European Computer Manufacturer Association 

//*Orginal array
const arr = [11,22,33,44,55];
//Mutaable way
// const arrayReverse = arr.reverse();

// console.log(arrayReverse);
// console.log(arr);

//? Immutable way
const arrayReverse = arr.toReversed();

console.log(arrayReverse);
console.log(arr);

//* Array Splice()
const arraySplice = [1,2,3,4,5,6];  
const removeElement = arraySplice.splice(2,2,200,300,400); //? take 3 param = 1 = start index, 2= deleted element , 3= add element
console.log(removeElement); //return deleted element
console.log(arraySplice); // return modified element