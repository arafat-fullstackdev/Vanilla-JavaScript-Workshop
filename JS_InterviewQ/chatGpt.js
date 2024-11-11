//? Reverse string
// split(''): Splits the string into an array of characters.
// reverse(): Reverses the array in place.
// join(''): Joins the array back into a string.

function stringReverse(str){
         return str.split('').reverse('').join('');
} 
console.log(stringReverse('Hello Programmer!'));

function codeReverse(btr){
    return btr.split('').reverse('').join('');
}
console.log(codeReverse('Hey!'));

// Problem: Write a function that returns 
//the first non-repeating character 
//in a string. If none exists, return null.

function firstNonRepeat(str){
     const charCount = {};


for(let char of str){
    charCount[char] = (charCount[char] || 0) +1;
}

// find 1st char with  count 1
for(let char of str){
    if(charCount[char] === 1){
        return char;
    }
}

return null;
}

console.log(firstNonRepeat('swiss'));
console.log(firstNonRepeat('aabbcc'));
console.log(firstNonRepeat('sggghh'));