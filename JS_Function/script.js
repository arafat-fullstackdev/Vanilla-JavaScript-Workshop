// function default parameter
function myFun(x =10){  //? x = 10 default value
return x;
}
console.log(myFun());
console.log(myFun(5));
console.log(myFun(undefined)); // not define
console.log(myFun(null));