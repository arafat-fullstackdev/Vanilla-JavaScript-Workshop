let promise = new Promise(function(res, rej) {
    const a = 'GreeksForGreeks';
    const b = 'GreeksForGreeks';

    if(a == b){
        res();
    }else{
        rej();
    }
});

promise.then(function() {
    console.log('Success! You are Greek!');
}).catch(function(){
    console.log('Try again! Some error has occurred!');
});