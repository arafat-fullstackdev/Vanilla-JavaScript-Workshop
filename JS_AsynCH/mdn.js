//await
function resolveFun(a){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(a);
        },2000)
    })
}

async function f1(){
    const b = await resolveFun(10)
    console.log(b)
}

f1()
