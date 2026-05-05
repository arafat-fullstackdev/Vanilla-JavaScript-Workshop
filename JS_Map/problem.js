//find max value

function frequentEle(arr){
    let n = arr.length, maxCount =0;

    let res =0;

    for(let i =0; i<n; i++){
        let count =0;

        for(let j =0; j<n; j++){
         if(arr[i] === arr[j]){
            count ++;
         }

        }

        if(count> maxCount || (count === maxCount && arr[i]> res)){
            maxCount = count;
            res = arr[i];
        }
    }

return res;
}

//result

let arrValue= [2,3,4,6,4,7,3,4];
console.log(frequentEle(arrValue))