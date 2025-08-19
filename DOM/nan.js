// The Secret of NaN
// TypeCasting = convert data type
const result = 'Dimitri' / 5 ;
console.log(result);

let weired = NaN;
console.log(weired === weired);

//? Interview Problem
const array = [NaN];
const resultOne = array.includes(NaN);
console.log(resultOne);

// JS Same Value Equality Comparison

// Same value Zero Algorithm
const sameValueZero = (a,b)=>{
     if(a === b || (Number.isNaN(a) && Number.isNaN(b)) ){
        return true;
     }
      return false;
}

sameValueZero();
console.log(sameValueZero);