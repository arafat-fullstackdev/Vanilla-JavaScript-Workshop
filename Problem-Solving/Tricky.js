//* With Var 
function timer(n){
    console.log('Start Timer!');
    for(var i =0; i<=n; i++){

        //Asynchronous function
        setTimeout(()=>{
        console.log(i);
        },i * 1000);
    }

    console.log('End Timer!');
};
timer(3);

//? with Let

function cimex(n){
    console.log('Start Timer!');
    for(let i =0; i<=n; i++){

        //Asynchronous function
        setTimeout(()=>{
        console.log(i);
        },i * 1000);
    }

    console.log('End Timer!');
};
cimex(3);