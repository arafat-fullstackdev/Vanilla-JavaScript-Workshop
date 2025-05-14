// array map

function doubleNum(numbers){
  const doubleValue = [];
   for(const num of numbers){
    const value = num * 3;
     doubleValue.push(value);
   }

   return doubleValue;

}

const numbersV = [2,3,4,5,6,7];
console.log(doubleNum(numbersV))