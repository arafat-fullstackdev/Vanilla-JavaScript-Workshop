// Common String Methods in JavaScript:

// length – Returns the number of characters in a string.

let a = 'geeks';
let b = '';
let c = '#478@';

let arr1=['js','cs','c']
arr1.length= 1;
// console.log(arr1)
let arr2 = 'Geeks'; // string is  immutable
arr2.length= 2;
// console.log(arr2)


// charAt(index) – Returns the character at the specified index.

let code = 'Hello Programmer';
let cutOff = code.charAt();
// console.log(cutOff)

// slice(start, end) – Extracts a section of a string and returns it as a new string.

// string.slice(startingIndex, endingIndex);

let A = 'Geeks for Geeks';
let a1= A.slice(0,15);
let a2= A.slice(2);

console.log(a1);
//console.log(a2);


// substring(start, end) – Similar to slice(), but does not accept negative indices.
// toUpperCase() / toLowerCase() – Converts the string to uppercase or lowercase.
// trim() – Removes whitespace from both ends of a string.
// replace(searchValue, newValue) – Replaces a specified value with another value in a string.
// split(separator) – Splits a string into an array based on a specified separator.
// includes(substring) – Checks if a string contains a given substring, returning true or false.
// concat(str1, str2, ...) – Joins two or more strings together.