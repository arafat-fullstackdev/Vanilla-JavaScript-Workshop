const Parent = document.getElementById("parent");
const Form = document.getElementById("form");
const Button = document.getElementById("button");

Parent.addEventListener('click', listener);
Form.addEventListener('click', listener);
Button.addEventListener('click', listener);

function listener(event){
   // console.log(event.target);
    //console.log(this.target);
    console.log(this.tagName);
}