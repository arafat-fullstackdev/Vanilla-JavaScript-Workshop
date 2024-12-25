function fetchData(callback){
   setTimeout(() => {
    //simulate network req
    callback("Data received!");
   },4000);
}

function handleSource(data) {
    console.log(data);
}

fetchData(handleSource);