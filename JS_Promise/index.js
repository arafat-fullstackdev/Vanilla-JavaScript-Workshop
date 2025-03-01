// // create promise
// const fetchDataPromise = fetch('https://jsonplaceholder.typicode.com/posts');
       
//      //consume fetchDataPromise
//        fetchDataPromise.then((response) =>{
//        return response.json();
//       }).then((myResponse) =>{ 
//         console.log(myResponse);
//       })
//      .catch((error) => {
//         console.error('An error occurred:', error);
//      });
 
//?   Practice

const fetchDataServer = fetch('https://jsonplaceholder.typicode.com/posts');

//* consume fetchDataServer
  fetchDataServer.then((response) => {
    return response.json();
  }).then((myChain) =>{
    console.log(myChain);
  }).catch((error) =>{
    console.error("An Error from Server!");
  });
  
