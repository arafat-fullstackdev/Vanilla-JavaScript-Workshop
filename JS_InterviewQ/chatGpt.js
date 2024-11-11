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