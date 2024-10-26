const userAcc = [
    {
        name: 'Alice',
        id: 1,
        isActive: true,

    },
    {
        name: 'Blice',
        id: 2,
        isActive: true,

    },
    {
        name: 'Clice',
        id: 3,
        isActive: false,

    },
    {
        name: 'Dlice',
        id: 4,
        isActive: true

    },
]

const indexToRemove = userAcc.findIndex((user) =>{
  return user.id === 31&& !user.isActive
});

if(userAcc === -1){
    userAcc.splice(indexToRemove, 1);
}
console.log(userAcc); 