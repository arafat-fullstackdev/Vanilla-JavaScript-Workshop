//? Implementing the Median Calculation:

//*  To find the median of an array in JavaScript, we need to follow these steps:

// 1. Sort the array in ascending order.
// 2. Calculate the index of the middle element (or elements).
// 3. Determine if the array length is even or odd.
// 4. Return the median based on the array’s characteristics.
function findMedian(arr){
    // sort array
    arr.sort((a,b) => a - b);
    //even array
    const middleIndex = Math.floor(arr.length / 2 );
    if(arr.length % 2 === 0){
       return (arr[middleIndex -1] + arr[middleIndex]) / 2;
    }else{
        return arr[middleIndex];
    }
}
console.log(findMedian([1,2,3,4,5]));
console.log(findMedian([10,22,4,5]));
console.log("Array two");
function arrSort(N){
    N.sort((a,b) => a - b);
    const ArrMiddle= Math.floor(N.length/2);
   if(N.length % 2 === 0){
    return (N[ArrMiddle -1] + N[ArrMiddle]) /2;
   }else{
    return N[ArrMiddle];
   }
}

console.log(arrSort([1,2,3]));
console.log(arrSort([10,24]));
console.log(arrSort([1,2,3,5,6,7]));
