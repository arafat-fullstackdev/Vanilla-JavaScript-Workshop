const person = {
    name: 'David bacham',
    age: 20
};
console.log(person);

const person1 = person;
person1.age= 22;
person1.name= 'Brain';

let modify = {
    name: 'Daniel',
    age: 44
};
person1.age = modify.age;
// console.log(person1);
// console.log(person); 
const funObj = (runAge)=> {
    runAge.age += 1;
}
const Ponting = {
    name: 'Ricky',
    age: 11
}

console.log('before', Ponting);
funObj(Ponting);
console.log('after', Ponting);