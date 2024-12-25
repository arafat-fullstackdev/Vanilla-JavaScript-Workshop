function firstFunction(){
  console.log("first Enter function called");
  secondFunction();
  console.log("first Exit function called");
}

function secondFunction(){
    console.log("second Enter function called");
    thirdFunction();
    console.log("second Exit  function called");
}

function thirdFunction(){
    console.log("third Enter function called");
    console.log("third Exit function called");
}

firstFunction();