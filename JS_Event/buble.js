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

     //KeyWord Event

     const input = document.getElementById('input_box');
     const output = document.getElementById('outPut_box');

       input.addEventListener('keydown', (event) => {
        console.log('Key Pressed Down!');
        output.textContent = `You pressed $(event.key)`;
       });


       // Form submit

       const form = document.getElementById('myForm');
       const inputName = document.getElementById('input_name');
       const message = document.getElementById('message');

       form.addEventListener('submit', (e)=>{
            e.preventDefault();

            if(inputName.value.trim() === ''){
                message.textContent= 'Please enter your name';
                message.style.color = 'red';
            }else{
                message.textContent = 'Welcome ' + inputName.value;
                message.style.color = 'green';
            }
       });