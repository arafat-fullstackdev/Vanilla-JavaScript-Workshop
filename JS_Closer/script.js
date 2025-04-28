var num1 = 11;
var num2 = 21;

var sum =function add(){
    return num1 * num2;
}
console.log(sum());

function int(){
    var name = 'JS Closer';

// <<<<<<< Map
    
// =======
// >>>>>>> main
    function displayName(){
        console.log(name);
    }
    displayName();
}

int();

console.log(int());
//console.log(displayName());
var x;
if(Math.random() > 0.5){
    var x = 2;
}else{
    var x = 4;
}

console.log(x);