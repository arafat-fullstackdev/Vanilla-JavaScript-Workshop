// Remove falsy value from the array
let miscellaneous = ['🍎','false','🍑',undefined,'🥦','NaN','🍒',0,
    null,'🌶','','🍎'];
//Passing Boolean value to array.filter() for remove falsy value
 let fruits = miscellaneous.filter(Boolean);
 
 console.log(fruits);