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
   //assending Order
    //return a - b;
    // Decending Order
    return  b - a;
 }
 const sortArrayNumeric = maiArray.sort(verrient);


 //console.log(sortedArrayStr);
 //console.log(sortedArray);
 //console.log(sortArrayNumeric);

 //* Array of Object 
 const arryObj = [
   {
      name: 'Volvo',
      year: 1990,
      type: 'FordMotor',

   },
   {
      name: 'Suzkio',
      year: 1890,
      type: 'Yahama',

   },
   {
      name: 'BMW',
      year: 1987,
      type: 'Mercedes-Benz',

   },
   {
      name: 'Iten',
      year: 2000,
      type: 'Muritie',

   },
 ]

 const redyCars = arryObj.sort((a,b) =>{
   //assending order
   //return a.year - b.year
   //return a.name - b.name

   //? Alphabetically Sort

   const x = a.name.toLowerCase();
   const y = b.name.toLowerCase();

   if(x<y){
      return -1;
   }else if(x>y){
      return 1;
   }else{
      return 0;
   }
 });

 console.log(redyCars);
