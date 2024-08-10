async function letDelayGreetings(){
   let greetingPromise = new Promise(function(resolve, reject){
    let success = true;

    setTimeout(function(){
        if(success){
            console.log("Hello, MeteVerse!");
        }else{
            console.log('Greeting failed!');
        }
    }, 3000); // 3 seconds delay
   });

   try{
    let greeting = await greetingPromise;
    console.log(greeting);
   } catch (error){
     console.log(error);
   }
}

letDelayGreetings();