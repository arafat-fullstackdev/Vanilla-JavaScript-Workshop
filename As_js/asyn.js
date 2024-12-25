 async function fetchData(){
    return new Promise((resolve, reject) => {
        //network request
        setTimeout(() => {
            resolve("Data received! ডেটা পাওয়া গেছে!");
        }, 1000);
    });
}

async function coverData() {
   try {
    const data = await fetchData();
    console.log(data);
   } catch (error) {
    console.log(error);
   }


}
coverData();