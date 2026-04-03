// clousr IIFF
function myCounter(){
    let counter =0;
    
    function plus(){
        counter ++;
        return counter;
    };

}

const addValue = myCounter();
addValue();
addValue();
addValue();

console.log(addValue)