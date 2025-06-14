// event loop in Node js
let a = 'planet';
let b ='earth'

console.log(a+b);

function addV(){


    setInterval(()=>{
        console.log('Async fun!')
    },4000);
}

addV();