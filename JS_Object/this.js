//* Implicit binding
var Spain ={
    capital:'Madrid',
    Coin: 'Euro',
    Language: 'Spanish',

    printCountry : function(name){
     //console.log(this.capital); // object Spain (property :Property)
    }
}

Spain.printCountry();

//* Explicit binding

var printPlayerfunction = function(obj){
    obj.printPlayer = function(){
        //console.log(name);
    }
} 

var Ronaldo ={
    name: 'Christanio',
    age: 36,
    club: 'Real-Madrid',
}

var Leo ={
    name: 'Messi',
    age: 37,
    club: 'Fc-Barcelona',
}

// function call
printPlayerfunction(Ronaldo);
printPlayerfunction(Leo);

Ronaldo.printPlayer()
Leo.printPlayer()
//* New binding
//* Window binding




