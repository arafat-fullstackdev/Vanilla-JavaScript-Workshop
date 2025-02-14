// Debounce function
 const debounce = (mainFunction, delay)=>{
    //declare variables
    let timer;

    return function(...args){
        clearTimeout(timer);
    

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);

 };
};