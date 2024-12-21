//! Components of HTTP Request //
// HTTP: Hyper Text Transfer Protocol
//? .Methods(HTTp Verb)
//GET- Retrieve data
//POST- sending data to server
//PUT- update
//DELETE- Deleting

//? URL-Uniform Resource Locator - https://example // API
//?Headers
//?Body


//HTTP
// Fetch
//Axios

//Making Request
fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>{
return response.json().then((posts) =>{
    console.log('Post fetched successfully!', posts);
});
}).catch((error)=>{
    console.log('Error fetching posts', error);
});
