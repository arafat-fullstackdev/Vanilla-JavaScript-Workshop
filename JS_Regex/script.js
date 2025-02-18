//*
// W= word, D= digit, S= whiteSpace, C= character, 
//regex = /\w/g;
//regex = /\D/g;
regex = /color?r{2,4}/g;
//regex = /[^a-lG-M]/g;

var str= "Edit the Expression colorr colorrrr & Text torrr see matches.Clorerrr Rolrrl  colorr overu Coloreerrrr matches or the expression for details"

const result = str.match(regex);
console.log(result);