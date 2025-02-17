// CPU Hungry
function add(x) {
  return 10 + x;
}

// console.log(add(11));
//* Make Higher Order Function()
const memo = (func) => {
  //? make Cashe(Closer)

  let cashe = {};  // it is closer who save result

  return function (x) {
    console.log(cashe);
    if(cashe[x]){
        console.log('result from cashe');
        return cashe[x];
    }else{
        console.log('calculating result');
        const result = func(x);
        cashe[x]= result;
        return result;
    }
  };
};

const calculate = memo(add);

console.log(calculate(11));
console.log(calculate(11));
