//define function
function sortArray(arr){
    let left = 0;
    let right = arr.length - 1;
    let result = new Array(arr.length);
    let index = arr.length - 1;

    while(left <= right){
        const leftSquare = arr[left] ** 2;
        const rightSquare = arr[right] ** 2;

        if(leftSquare > rightSquare){
            result[index] = leftSquare;
            left++; // move to left pointer 
        } else{
            result[index] =rightSquare;
            right--;
        }
        index--;
    }
    return result;
}