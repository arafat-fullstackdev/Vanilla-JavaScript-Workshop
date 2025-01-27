//? Array map protype
const Digits = [2,4,6,8,10];

Digits.map((elements) =>{
    //return elements * 2;
    return elements * 3;
});

//? Store Data in Res;
Res = Digits.map((elements) =>{
    return elements * 4;
});

console.log(Digits);
console.log(Res);