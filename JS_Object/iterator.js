// let userDetails = {
//     name: 'CodeBase',
//     age: 28,
//     isAdmin: true,
//     address: 'Comilla',
// }

// for(let Property in userDetails){
//     // Property names
//     //alert(Property);
// }
// console.log(userDetails); 

// Practice from MDN
const object1 = {
    a:'Something',
    b: 39,
}
for(const [Key, value] of Object.entries(object1)){
    console.log(`${key}: ${value}`);
}