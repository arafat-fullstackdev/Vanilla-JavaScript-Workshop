//? parentNode  When To use ? //
// Manipulating a child parent.
//Navigate from deeply elements.
// Code needs to be generic and independent of IDS or classes.
// let a = 'NASA';
// let b = 'SpaceX';
// let c = 'Tesla';

// console.log(a)
// console.log(b)
//console.log(c) 

//** Dom HTML */
// 1. select list items using data attribute
const selectItemEL =document.querySelector('[data-item="fruits"]');
// 2. Navigate to the parent <ul> element
const parentEL = selectItemEL.parentNode;
console.log(parentEL);
// 3. Navigate to grandparent
const grandEl = parentEL.parentNode;
console.log(grandEl);
// 4. Navigate to Great Grand parent 
const greatGrand = grandEl.parentNode;
console.log(greatGrand);