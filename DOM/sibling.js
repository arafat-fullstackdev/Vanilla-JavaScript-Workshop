//** JS Next Sibling */
//? When to use?
//? Accessing immediate next sibling of a node. //
//? Traversing parent node's children sequently. //
//? Enhancing performance by minimizing extra queries. //

//! Get all element
const continent = document.getElementById("container");

// Get all Button within the container
const buttonEl = document.querySelectorAll('button');

console.log(buttonEl);

//* Loop through each button and change the next of its of its next sibling. //
buttonEl.forEach((button) => {
    // console.log(button); 
    const nextElement = button.nextSibling;
    console.log(nextElement);
    //! check if next sibling is an element node 
    if(nextElement && nextElement.nodeType === 3)
    {
        nextElement.textContent = "Next Node"
    }
})