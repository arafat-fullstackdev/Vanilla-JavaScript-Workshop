// @param {Array<number>}
// @param {number}
// @return{number}

function binarySearch(arr, target){
    let left =0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);

        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid]<target){
            left = mid +1;
        }else{
            right = mid -1;
        }
    }
    return -1
}

// --- Example Usage ---

const sortedNumbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(`Searching for 12 in [${sortedNumbers}]`);
let index1 = binarySearch(sortedNumbers, 12);
console.log(`Index of 12: ${index1} (Expected: 3)`); // Expected output: 3

console.log(`\nSearching for 23 in [${sortedNumbers}]`);
let index2 = binarySearch(sortedNumbers, 23);
console.log(`Index of 23: ${index2} (Expected: 5)`); // Expected output: 5

console.log(`\nSearching for 7 in [${sortedNumbers}]`);
let index3 = binarySearch(sortedNumbers, 7);
console.log(`Index of 7: ${index3} (Expected: -1)`); // Expected output: -1 (not found)

console.log(`\nSearching for 91 in [${sortedNumbers}]`);
let index4 = binarySearch(sortedNumbers, 91);
console.log(`Index of 91: ${index4} (Expected: 9)`); // Expected output: 9

console.log(`\nSearching for 2 in [${sortedNumbers}]`);
let index5 = binarySearch(sortedNumbers, 2);
console.log(`Index of 2: ${index5} (Expected: 0)`); // Expected output: 0
// gemni
// A function that returns a Promise which resolves after a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Hello...");
  await delay(2000); // Wait for 2 seconds
  console.log("...World!");
}

greet();
console.log("This will print first, demonstrating non-blocking behavior.");