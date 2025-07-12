function fetchData(dataBack){
    setTimeout(()=>{
        const data= 'Git Branch Hi!';
        dataBack(null,data);
    }, 4000);

    // dataBack()
}

fetchData((error,data)=>{
  if(error){
    console.log('Error:', Error);
  }else{
    console.log(data);
  }

});