//? window Object //
// console.log(window.Object);
// console.log(window.innerHeight);
// console.log(window.location);
// console.log(window.history);
// console.log(window.location.host);

// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.alert('Hey!'));
// console.log(window.confirm());
// window.prompt() 

// window.open('https://www.udemy.com/'); 

//* query selector*//

// const laptopEl = document.querySelector("[data-rating='4.7']");
// console.log(laptopEl); 
// const productcart = document.querySelectorAll('.productCart');
// console.log(productcart); 
// const productcart = document.querySelectorAll('.nodeMone');
// console.log(productcart);
// productcart.forEach((el) => {
//     console.log(el);
// });

const productDemo = document.querySelectorAll('.todeMone');
productDemo.forEach((gl) => {
    console.log(gl);
});
const convertNode = document.querySelectorAll('#nodeCode');
convertNode.children.forEach((node) => {
    console.log(node.nodeType);
});