async function letDelayGreeting() {
    let greetingPromise = new Promise(function(resolve, reject){

        let success = true // boolean

        setTimeout(function(){
            if(success){
                resolve('Greeting from MetaVerse!');
            }else{
                reject('Stay connected us!');
            }
        }, 4000);
    });

    try{
        let welcome = await greetingPromise;
        console.log(welcome);
    } catch (error) {
        console.log(error);
    }
    
}

letDelayGreeting();