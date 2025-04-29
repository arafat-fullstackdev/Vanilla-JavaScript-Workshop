const mpi = new Map();

mpi.set('a', 2);
mpi.set('b', 3);
mpi.set('c', 4);
mpi.set('d', 5);

console.log(mpi.get('a')); //2
mpi.set('a', 22);
console.log(mpi.get('a'))//22
console.log(mpi.size);

mpi.delete('d');
console.log(mpi.size);//3

// Map array

const wrongMap= new Map();
    wrongMap['Brazil'] = 'Belize';
    wrongMap['Bzil'] = 'Belize2';
    console.log(wrongMap);

    const contact = new Map();

     contact.set('Helen', {
        phone: '123-456-768',
        country: 'Cypress',
     });

     contact.set('Midilton', {
        phone: '435-234-768',
        country: 'Colombia',
     });

     contact.set('Jack');
     contact.has('Jacky');

     contact.delete('Jack');

     console.log(contact.size);
     console.log(contact.get('Helen'));