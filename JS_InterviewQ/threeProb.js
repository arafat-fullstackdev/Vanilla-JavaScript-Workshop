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

//console.log(reverseWords(str));

//? Problem 3
// Sorting word by length in a sentence by as ase order 

const language = 'JS is functional language!';
function sortWords(data){
const dataArr= data.split(' ');
//compare function

dataArr.sort((a,b) =>{
    return a.length - b.length;
    //Decending
    //return b.length - a.length;
});

return dataArr.join(' ');
}
console.log(sortWords(language));
