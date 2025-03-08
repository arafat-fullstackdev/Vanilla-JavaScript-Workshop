const Parent = document.getElementById("parent");
const Form = document.getElementById("form");
const Button = document.getElementById("button");

Parent.addEventListener('click', listener,{capture: true});
Form.addEventListener('click', listener, {capture:true});
Button.addEventListener('click', listener, {capture:true});

function listener(event){
   // console.log(event.target);
    //console.log(this.target);
    console.log(this.tagName);
}