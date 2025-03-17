// // select a list of property
// const appleF = document.getElementById('apple');

// // select the previous sibling property
// const prev = appleF.previousSibling;
// const nextFruit = appleF.nextElementSibling;

// //console.log(prev);
// console.log(nextFruit); 

//* To DO App
//console.dir(document);

// let headerElement = document.getElementById('title');
// //headerElement.textContent = 'To Do Application';
// //headerElement.innerText = 'To Do AppS';

// console.log(headerElement.innerText);
// console.log(headerElement.textContent); 

//? Set Attribute
// const Images = document.getElementById('randomImg')
// .querySelector("img");
// console.log(Images);
// Images.setAttribute("src",
//     "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww");

// console.log(Images); 

//** Using remove child */
// function addFruit(){
//     let Basket = document.getElementById('basket');

//     //create Element
//     const li =document.createElement('li');
//     li.className='basketOne';
//     li.textContent= name;
//     Basket.appendChild(li);

//     console.log(li);
//     console.log(Basket);
// }
// addFruit('Mango');
// addFruit('Banana');
// addFruit('Nuts');
// addFruit('Lichi'); 

//? Debounce in JS
let buttonEl = document.getElementById('button');
let buttonElt = document.getElementById('buttontwo');

function debounce(fn, delay){
  return function(){
    setTimeout( ()=>{
        fn();
    }, delay)
  };
}

buttonEl.addEventListener('click', debounce(function(){
 console.log('Button On Fire!');
 //console.log('Button On Active!');
}, 2000));

buttonElt.addEventListener('click', debounce(function(){
  console.log('Button On Active!');
 }, 2000));