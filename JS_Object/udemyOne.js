// js object literals

const book  = {
    title: 'The Lord of The Kings',
    Author: 'JK Ronald',
    price: '$16',
    available: true, //Boolean Value
    pages: '354'
}
console.log(book);

const bookTwo = {
    title:'The Bermuda Triangle',
    writer: 'Dave Hopes',
    price: '$36',
    available: true, 
}

const bookTitle = bookTwo['title'];
console.log(bookTitle);

const employee = {
    name:'Brandon Tom ',
    id: '05'
}

employee.address ={
   city: 'Comilla',
    road: 'Jawtalla'
}

console.log(employee.address.road);