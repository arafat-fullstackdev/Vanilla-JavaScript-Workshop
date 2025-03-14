let emoji = ['😀','😁','😁','🥰','🥰','🥰','😢','😊','😊','🥰'];
// console.log(emoji); 
function countDuplicates (data){
    const outPut ={};

    // logic here 
    data.map((d) =>{
     outPut[d] = (outPut[d] || 0) +1;
    });

    return  outPut;
}

console.log(countDuplicates(emoji));