//* Call recursive function own block
// function myFun (){
// myFun();
// } 
function addSum(n){
    if(n === 0){
        return 0;
    }else{
    return addSum(n - 1 ) + n;
    }
}
console.log(addSum(3));
console.log(addSum(5));
console.log(addSum(10));