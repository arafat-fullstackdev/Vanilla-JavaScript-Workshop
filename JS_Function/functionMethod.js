// 4 types of fun methods
// apply() bind() call() toString()
var array = [3,6,8,2,9];
var max = Math.max.apply(null,array);
var min = Math.min.apply(this,array);

for(value of array){
    document.writeln(value);
}
document.writeln('The maximum number is: '+  max);
document.writeln('The minimum number is: '+  min);

// console.log(max);
// console.log(min);