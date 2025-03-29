// // Global Execuation
// // phase: Loading/Creation
// var topic= "I here from Manhatan!";

// function getLogic(){
//     return topic;
    
// }
// console.log(getLogic())
// //? Start Fn() execuation
// getLogic(); 
//? function in function
//!  *Loading State to  Execuation State*

var a =2;  // Global scope
//var b = 5 + 8;
function One(){
    console.log(a); //2

    function two(){
        console.log(b);
        var b = 3 +2;
        function three(d){
            let  e= 5;  // 
            console.log(d + e);

        }
        three(4)
    }
    two()
}
One();