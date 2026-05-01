// // set and new mapCreate a new Map and add elements with Map.set()
// Passing an existing Array to the new Map() constructor

const fruits = new Map();

//set map value
fruits.set('apple',200);
fruits.set('banna',250);
fruits.set('cucumber',100);
// console.log(fruits)

const basket = new Map([
    ['Orange',200],
    ['Mango',270],
    ['Lemon',100],
])
//add map value
basket.set('Bitroot',340)
basket.set('Orange',160)// change value
// console.log(basket)
 const get = basket.get('Lemon');  // get value
 console.log(basket instanceof Map)
