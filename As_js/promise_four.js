// let promise = new Promise(function(res, rej) {
//     setTimeout(function(){
//         const a = 'GreeksForGreeks';
//         const b = 'GreeksForGreeks';
    
//         if(a == b){
//             res();
//         }else{
//             rej();
//         }
//     }, 5000);
 
// });

// promise.then(function() {
//     console.log('Success! You are Greek!');
// }).catch(function(){
//     console.log('Try again! Some error has occurred!');
// }); 

//Example One

let myPromise = new Promise(function(rest, fest){
    rest('Hey! Lets take Coffee! ');
})
myPromise.then(function (successMsg){
    console.log(successMsg);
}), (function (errorMsg){
    console.log(errorMsg);
})