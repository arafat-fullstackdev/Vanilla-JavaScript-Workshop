// git protype find()
var numbers = [1,2,3,4,5,6];

var res= numbers.find(function(currentValue,currentIndex,arr){
    return currentValue > 4;
});

console.log(numbers);
console.log(res);