const obj = {
    test: "value1",
}

const obj2=  obj;
obj2.test="value2";

console.log(obj);  // value1
console.log(obj2); // value1