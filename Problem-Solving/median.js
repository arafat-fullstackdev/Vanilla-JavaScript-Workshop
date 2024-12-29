//? Implementing the Median Calculation:

// 1. To find the median of an array in JavaScript, we need to follow these steps:

// 2. Sort the array in ascending order.
// 3. Calculate the index of the middle element (or elements).
// 4. Determine if the array length is even or odd.
// 5. Return the median based on the array’s characteristics.
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
console.log(findMedian([2,4,6]));
console.log(findMedian([10,22]));
