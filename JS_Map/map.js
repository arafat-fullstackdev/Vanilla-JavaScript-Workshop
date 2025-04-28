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
console.log(mpi.size);