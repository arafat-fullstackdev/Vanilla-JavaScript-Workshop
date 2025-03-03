//* Lexical scope
var num1 = 10;
var num2 = 20;

var sum =function(){
    return function(){
        return num1 + num2;
    } ;
} ;

var myFunc = sum();
//console.log(sum());
//console.dir(sum);  // console.log update version
console.dir(sum);
