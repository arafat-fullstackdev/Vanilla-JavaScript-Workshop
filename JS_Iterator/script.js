const array = ['a','b','c','d'];
const it = array[Symbol.iterator]();

// for(let value  of it){
//     console.log(value);
// }

//? Array prototype methods

// let object ={
//     data: [1,2,3,4,5],
//     [Symbol.iterator](){
//      let i =0;
//      return{
//         next: () => ({
//          value : this.data[i],
//          done : i>= this.data.length,
//         })
//      }
//     }
// }

// for(let x of object){
//     console.log(x);
// }

let imoji = ['😃','😉','😬','🥰']

for(i =0; i<imoji.length; i++){
    console.log(imoji[i]);
}