document.getElementById('btn').addEventListener('click', function(){
    const animalSound= document.getElementById('inputData').value.toLowerCase();

    const output= document.getElementById('voice');

    //?logic

    switch(animalSound){
        case "dog": 
        output.textContent= "Wof! Wof!"
        break;

        case "cat": 
        output.textContent= "mew! mew!"
        break;

        case "hen": 
        output.textContent= "Cook! cook!"
        break;

        case "fox": 
        output.textContent= "Khu! khu!"
        break;

        default:
            output.textContent="Enter Right Animal Name"
    }
})