//Buble Event JS
document.getElementById('Inner_div').addEventListener('click', function(){
    console.log('Inner Div Clicked!');
});

document.getElementById('middle_div').addEventListener('click', function(){
    console.log('Middle Div Clicked!');
});

document.getElementById('Outer_div').addEventListener('click', function(){
    console.log('Outer Div Clicked!');
});

const box_case = document.getElementById('box');

   box_case.addEventListener("mouseover", function()  {
  box_case.style.backgroundColor = 'blue';
  box_case.textContent ="Mouse clicked";
  console.log('Mouse Enter!');
   });

   box_case.addEventListener("mouseout", function()  {
    box_case.style.backgroundColor = 'green';
    box_case.textContent ="Mouse out";
    console.log('Mouse out!');

     });

b