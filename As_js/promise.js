function fetchData(){
    return new Promise((resolve, reject) => {
        //network request
        setTimeout(() => {
            resolve("Data received!");
        }, 6000);
    });
}

fetchData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);

});