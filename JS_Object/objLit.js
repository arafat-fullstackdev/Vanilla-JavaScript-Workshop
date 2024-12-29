//* Creating a object Literals with key value
let Car = {
    model: "AvtoVAZ",
    type: "Super",
    year: 2025
}

Car.isLemoji = true;
delete Car.year;
console.log(Car);
console.log(Car.model);