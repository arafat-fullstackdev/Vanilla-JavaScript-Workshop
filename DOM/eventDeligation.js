const List = document.getElementById('list');
//? Make Event Deligation for Multiple or Single Element
List.addEventListener("click", (e) =>{
    // console.log(e.target);
     console.dir(e.target);
    if(e.target.matches('li'))
    {
        if(e.target.innerText === "JavaScript")
        {
            e.target.style.backgroundColor ='yellow';

        }else if(["C","C++","C#"].includes(e.target.innerText)){ // C language Familly
            e.target.style.backgroundColor ='blue';
        }else{
            e.target.style.backgroundColor ='red';
        }

    
        
    }
});
function addElement(){
    //const  newelement = document.getElementById('newelement');
    const newBie = document.createElement('li');
    newBie.textContent = "SQL";
    list.appendChild(newBie);
}
