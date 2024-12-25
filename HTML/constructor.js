// define constructor function 
function Person(first, last, age, id){
    this.firstName = first;
    this.lastName= last;
    this.age= age;
    this.id=id;
}

//create Person Object 
const employeId= new Person('Lal', 'Miah', 87, 5643);

//Display age
document.getElementById('code').innerHTML= 
'My Employee is' + employeId.age + '.';
