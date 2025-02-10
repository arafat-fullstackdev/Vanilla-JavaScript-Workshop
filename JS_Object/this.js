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

var Person = function(name,age){
    return{
        name:name,
        age:age,
        country:country,
        printId: function () {
            console.log(this.name)
        },
    };
};

var Musa = Person("Musa", 38);
Musa.printId();
//* Explicit binding

//* New binding
//* Window binding




