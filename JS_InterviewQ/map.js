let emoji = ['😀','😁','😁','🥰','🥰','🥰','😢','😊','😊','🥰'];
// console.log(emoji); 
function countDuplicates (data){
    const outPut ={};

    // logic here 
    // data.map((d) =>{
    //  outPut[d] = (outPut[d] || 0) +1;
    // });
// For Each Loop
    data.forEach((d) =>{
        outPut[d] = (outPut[d] || 0) +1;
       });

    return  outPut;
}

//console.log(countDuplicates(emoji)); 

//? Reverse Word

const str = ' I like Mountain';

function reverseWords(value){

    const dataArray = value.split(' ');
    const result = dataArray.map(v => {
        return v.split('').reverse().join('');
    });

    return result.join(' ');
}

console.log(reverseWords(str));