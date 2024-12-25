//creating new Promise
const myPromise = new Promise((resolve, reject) =>{
    const  success = true;

    if(success){
        resolve("The Code was true.");
    }else{
        reject("The code was false.");
    }
}); 

//consuming 
myPromise
  .then((message) => {
    console.log('Success:' + message);
  })
  .catch((error) => {
    console.log("Error;" + error);
  });