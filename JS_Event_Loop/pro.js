//Understanding Closure, Async-Await, and Scope
function delay(i){
    return new Promise((resolve)=>{
     setTimeout(()=>{

        resolve(i);
     }, i * 1000);
    });
}

async function timer(n){
    console.log('Start fun!');

    //For loop Sync function 
for(let i = 0; i<=n; i++){

    const result = await delay(i);
    console.log(result);
}

    console.log('End fun!');
}

timer(3);