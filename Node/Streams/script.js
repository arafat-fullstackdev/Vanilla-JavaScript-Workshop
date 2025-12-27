const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on('data', (chunk) =>{
    console.log(chunk);
})