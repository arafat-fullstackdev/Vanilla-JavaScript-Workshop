// A JavaScript Iterator is an object that lets you traverse through a list or collection one item at a time.
//  It follows the iterator protocol, meaning it must have a next() method that returns an object in the form.
// const arr = ['a','b','c','d','e'];
// const arryIt = arr[Symbol.iterator]();
// for(value of arryIt){
//     console.log(value);
// } 
// let obj={
//      data : ['1','2','3'],
//      [Symbol.iterator](){
//         let i =0;
//         return{
//             next: ()=>({
//                 value: this.data[i],
//                 done: i++ >= this.data.length
//             })
//         };

//      }
// };
// for(let n of obj)
//     console.log(n)

//? Iterable
const letters = new Set(["c","j","p"]);
let res="";
for(let x of letters){
res += x
}
console.log(x);