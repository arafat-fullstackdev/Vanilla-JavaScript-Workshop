// var let const  function
//! Var make new Variable
//"use strict"
//var x = 10;
var x;
//console.log(x);
// Parent Area
function myFun(){
    //Child area
x =20;
//console.log(`${x} from var myFun()`);
};
myFun();

//console.log(x);
//console.log(myFun());

//? let
let m =22;
function myFun2(){
    // modify part
    m =44;
    console.log(m);
}
myFun2();
//? const
const n =33;
function myFun3(){
        // modify part
        //n=55;

    console.log(n);
}
myFun3();