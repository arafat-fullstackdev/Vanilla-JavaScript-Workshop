//? JWT = Json Web Token
//* Authorization

// let token = 'JWT';
// const server= 'Authentication';
// console.log(token);
// console.log(server);

// 3 parts of JWT = Header Payload Signature
// Encode to Decode 

//? ChatGpt code
const jwt = require('jsonwebtoken');

// Secret key (keep it safe!)
const SECRET_KEY = 'your_secret_key';

// Function to generate a JWT
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

// Function to verify a JWT
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null; // Invalid token
  }
};

// Example usage
const user = { id: 1, username: 'john_doe' };
const token = generateToken(user);
console.log('Generated Token:', token);

const decoded = verifyToken(token);
console.log('Decoded Data:', decoded);



//?OOPs Concept in JavaScript

// Object
// 	Classes	
//   Encapsulation
// Abstraction	
// Inheritance
// 	Polymorphism

// Defining object
let person = {
	first_name: 'Mukul',
	last_name: 'Latiyan',

	//method
	getFunction: function () {
		return (`The name of the person is 
		${person.first_name} ${person.last_name}`)
	},
	//object within object
	phone_number: {
		mobile: '12345',
		landline: '6789'
	}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);
