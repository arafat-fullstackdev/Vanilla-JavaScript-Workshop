//*
// W= word, D= digit, S= whiteSpace, C= character, 
//regex = /\w/g;
regex = /\D/g;
//regex = /\s/g;

var str= "Edit the Expression & Text to see matches. Roll over matches or the expression for details"

const result = str.match(regex);
console.log(result);