function fetchData(call){
  setTimeout(() => {
   call('Call Fetch Data!');
  }, 2000);
}

fetchData((data) =>{
    console.log('Data call');
});
