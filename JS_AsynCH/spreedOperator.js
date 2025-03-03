//? Spreed Operator
var container = [11,22,33,44];
//class methods
//var newContainer = [[0],[1],[2],[55,66,77]];
//! Imutable way Spreed OPerator
var A = [...container] // exact copy from container
container.push(99);

// ES6 JS
var newContainer = [...container,55,66,77];
//console.log(newContainer);
console.log(A);
console.log(container);
//** Array Concat()  with Spreed Operator*/
var box1 = [10,20,30,40];
var box2 = [50,60,70,80];

var box = [...box1,...box2];
console.log(box);
//? Object Operator

var obj1 ={
    a:12,
    b:21
};
var obj2 ={
    c:31,
    d:41
}

//Object merge with Spreed Operator
console.log(
    {
    ...obj1,
    ...obj2}
);