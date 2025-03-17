// Name of event
function alert(){
    console.log('Button Alert!');
}

const alertBtn = document.getElementById('btn_alt');
alertBtn.addEventListener('click', alert);