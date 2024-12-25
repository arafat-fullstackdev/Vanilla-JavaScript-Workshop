function fetchData(callback){
    //operation API(mimic)
    console.log('Fetching weather data...');
    //API -Simulating Async operation(http)
    setTimeout(() =>{
        console.log('Weather data fetched Successfully!');
        callback();
    }, 2000);
}

function processData(){
    console.log('Processing the weather data to display temperature and condition');
}

// invoke the function
fetchData(processData);
