//? ECMA Script: European Computer Manufacturer Association 

//*Orginal array
const arr = [11,22,33,44,55];
//Mutable way
// const arrayReverse = arr.reverse();

// console.log(arrayReverse);
// console.log(arr);

//? Immutable way
const arrayReverse = arr.toReversed();

//console.log(arrayReverse);
//console.log(arr);

//* Array Splice()
const arraySplice = [1,2,3,4,5,6];  
//const removeElement = arraySplice.splice(2,2,200,300,400); //? take 3 param = 1 = start index, 2= deleted element , 3= add element
// reverse splice()
//const removeSplice = arraySplice.splice(-2,2,200,700,800); //? take 3 param = 1 = start index, 2= deleted element , 3= add element
//? Immutable way
const splicedArray = arraySplice.toSpliced(-2,2,700,800); //? ES14
//console.log(removeElement); //return deleted element
//console.log(splicedArray); //return deleted element
//console.log(arraySplice); // return modified element

//**  Array with()
const arrWith=[11,22,33,44];
//? Immutable way
const res = arrWith.with(1,55) // 1 = position; 55= add element
//console.log(res);
//console.log(arrWith); 
 //* Array sort()
 const sortArrStr = [11,44,60,22,9,2,5];

 const sortArr = [4,6,9,2,5];
 // sort Assending order
 const sortedArray = sortArr.sort(); // sort() IT is change Alphabeticaly and follow string 

 const sortedArrayStr = sortArrStr.sort();

 //?? sort array Numeric way
 const maiArray = [11,2,1,22,42,50,44];
 const verrient = function(a,b){
    return a - b;
 }
 const sortArrayNumeric = maiArray.sort(verrient);


 //console.log(sortedArrayStr);
 //console.log(sortedArray);
 console.log(sortArrayNumeric);