// // console.dir(document)  
// // console.dir(typeof(document))
// console.log(document.title);
// console.dir(document.URL);
// console.dir(document.domain);
// console.dir(document.head)
// document.title="Play With DOM!"

//console.log(document.all)
//console.log(document.all.filter())

// console.log(document.images)
// console.log(document.links)
// console.log(document.forms)

// //? DOM travers with loop
// for(let element of document.all){
//     console.log(element)
// }

let hederElement = document.getElementById('header');
//hederElement.textContent= 'Play With DOM!';
//hederElement.innerText= 'Play With DOM!';
// console.log(hederElement.innerText); // Browser final output
// console.log(hederElement.textContent);// Editor final output
// console.log(hederElement.innerHTML);// Editor final output
// console.dir(hederElement);
// hederElement.style.color= 'green';
// hederElement.style.fontSize= '2rem';
//console.dir(document)

let classElement = document.getElementsByClassName('list');
//console.log(classElement)

for(let i =0; i<classElement.length; i++){
    classElement[i].style.color = 'blue';
}