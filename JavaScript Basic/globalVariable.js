// var globalVariable = ' I am going to Siberia!';

// function concatString(str) {
//     return str + ' ' + globalVariable;
// }

// console.log(concatString('I am from Yakutusk!')); 

//second method

var globalVariable = ' I am going to Siberia!';

function concatString(str) {
    return str + ' ' + globalVariable;
}

function logString() {
    console.log(window.concat);
}

//First we'll call concat string
concatString('I am from Yakutusk!');

// Then we'll call logString
logString();