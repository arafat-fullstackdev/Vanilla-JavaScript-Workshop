//? Array concat() methods
let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9];
let arr2 = [11, 22, 33, 44, 55];
console.log(arr.concat(arr1));
console.log(arr.concat(arr2));

//array filter(callback) and find(callback)
let arr3 = [12, 13, 14, 15];
console.log(arr3.filter((arr3) => arr3 > 10));
console.log(arr3.find((arr3) => arr3 > 11));
console.log(arr3.find((arr3) => arr3 > 10));
//! Array map(*) methods

let val = [22, 33, 44];
console.log(val.map((num) => num * 2));
