//Promise all()

//create a promise 
// const promise1 = Promise.resolve('Success! You are Promise 1.');
// const promise2 = Promise.resolve('Success! You are Promise 2.');
// Promise.all([promise1, promise2]).then((res) =>{
//     console.log(res);
// });  
//Create a New Promise

// const Pm1 = Promise.resolve('Promise 1 success!');
// const Pm2 = Promise.resolve('Promise 2 success!');
// //Promise all()
// Promise.all([Pm1, Pm2]).then((result) =>{
//     console.log(result);
// })
// .catch((err) =>{
//     console.log(err);
// }); 


//create promise race
const Pm1 = Promise.resolve('Promise 1 success!');
const Pm2 = Promise.reject(new error('Promise 2 reject!'));
//Promise race()
Promise.race([Pm1, Pm2]).then((result) =>{
    console.log(result);
})
.catch((err) =>{
    console.log(err);
});