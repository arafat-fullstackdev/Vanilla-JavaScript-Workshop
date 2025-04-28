// The change in the state of an object is known as an event

// mouse event(click, double click)
// keyboard event (key press, down)
//from event (submit etc)


//? Button double click
const dbl_button = document.getElementById('button_dbl');
const mouseHover = document.querySelector('.mouseHover');

     mouseHover.onmouseover = function(){
        console.log("Mouse touched");
     }

     dbl_button.ondblclick = function(){
        alert("Double click!");
     };
