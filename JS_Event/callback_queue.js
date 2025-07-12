console.log('Hi-1');

function hello(){
    console.log('Hello Programmer!');
}

//? Async code using callback function

setTimeout(function() {

    console.log('Hi-3');
    
},3000);

for(let i =0; i<=4; i++){
    console.log(i);
}
debugger

hello();

console.log('Hi-2');