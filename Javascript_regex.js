//Regular Expression
//Pattern Matching Technique
let re;
re = /hello/;
re = /Hello/;
re = /hello/i;  // i = case insensitive

console.log(re);
console.log(re.source);

str= "Hello World";
str= "Again Hello World";
str= "Again Gello Hello World";
str= "Again Hell World";
str = "jkkhgHelloGFRF";
str = "Bool";
str= "The Planet Hello";
str = 'blue Hello Planet';
//exec() -Returns result in an array or null
//let res = re.exec(str);

//test() = true or false
//let res = re.test(str);

//match() fun
//let res = str.match(re);

//search() return index
//let res = str.search(re);

//replace() = return new string
res = str.search(re);
let newStr= str.replace(re, "Hey");

console.log(res);
console.log(str);
console.log(re.source);
console.log(newStr);

