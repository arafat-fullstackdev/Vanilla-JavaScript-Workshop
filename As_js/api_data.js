async function fetchData() {
    try{
        console.log('Data fetch ongoing...');

        //API
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        //Data formate to JSON.
        let data = await response.json();

        //data display
        console.log('Data Fetch Success:', data);
    } catch(error){
        //if error
        console.log('Data error:', error);
    }
}

///call fetchData

fetchData();
console.log('Show first, because this not ASYN!');