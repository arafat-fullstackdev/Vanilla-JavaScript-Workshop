let promise = new Promise(function(res, rej) {
    setTimeout(function(){
        const a = 'GreeksForGreeks';
        const b = 'GreeksForGreeks';
    
        if(a == b){
            res();
        }else{
            rej();
        }
    }, 5000);
 
});

promise.then(function() {
    console.log('Success! You are Greek!');
}).catch(function(){
    console.log('Try again! Some error has occurred!');
});