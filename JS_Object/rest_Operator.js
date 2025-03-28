//? Rest Operator 
// Classical Function 
// function myFun(){
//     console.log(arguments);
// }
// myFun(1,2,3,4); 

//** Reast Operator use in Function Parameter(param)one function use  only One.
function myFun(a,...params){
    console.log(a,params);
}
myFun(1,2,3,4);