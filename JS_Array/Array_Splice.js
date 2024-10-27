// const userAcc = [
//     {
//         name: 'Alice',
//         id: 1,
//         isActive: true,

//     },
//     {
//         name: 'Blice',
//         id: 2,
//         isActive: true,

//     },
//     {
//         name: 'Clice',
//         id: 3,
//         isActive: false,

//     },
//     {
//         name: 'Dlice',
//         id: 4,
//         isActive: true

//     },
// ]

// const indexToRemove = userAcc.findIndex((user) =>{
//   return user.id === 31&& !user.isActive
// });

// if(userAcc === -1){
//     userAcc.splice(indexToRemove, 1);
// }
// console.log(userAcc);   

//Task
const playList = [
    {id:'s1', title:'song1', Author: 'Artist A'},
    {id:'s2', title:'song2', Author: 'Artist B'},
    {id:'s3', title:'song3', Author: 'Artist C'},
    {id:'s4', title:'song4', Author: 'Artist D'},
    {id:'s5', title:'song5', Author: 'Artist E'},
];
//remove song
const removeSongFromIndex = playList.findIndex(function (song){
  return song.id === 's1';
});

//using splice ()
if(removeSongFromIndex !== -1){
    playList.splice(removeSongFromIndex, 1);
};

//move element 
const moveIndex = playList.findIndex((song) => song.id === 's1');
  if(moveIndex !== -1){
      const [songMove] = playList.splice(moveIndex, 1);
      playList.splice(1,0, songMove);
      console.log(songMove);
  }
  console.log(playList);

  const newSong = {id: 's6', title:'Song 6', Artist: 'Art Y'};
  playList.splice(1, 0, newSong);
  console.log(playList);

  // Student array 
   const studentArray = [
    {name:'Alice', id:1, grade:'A'},
    {name:'Mlice', id:2, grade:'A+'},
    {name:'Nlice', id:3, grade:'A'},
   ];

   const gradeupdate = [{ grade: 'A+'},{grade:'A'}];

   const updateStudent = studentArray.map((student, index) => {
    return Object.assign({}, student, gradeupdate[index]);
   });

   console.log(updateStudent);

const developerArray = [
  {name:'Alank', id:1, role:'Engineer'},
  {name:'Blank', id:2, role:'Developer'},
  {name:'Clank', id:3, role:'Designer'},
  {name:'Dlank', id:4, role:'Engineer'},
];

const developerUpdate = [{role: 'Devops'}, {role:'MLE'}];
const updateDeveloper = developerArray.map((programmer, index) =>{
       return Object.assign({}, programmer, developerUpdate[index]);
});
console.log(updateDeveloper);

const droneHive = [
    {name:'Orion', Domain:'Russia', gen:'5'},
    {name:'Shahed', Domain:'Iran', gen:'4'},
    {name:'Eagle', Domain:'USA', gen:'5'},
    {name:'BlackCat', Domain:'Turkey', gen:'4'},
];

//include new obj
const updateDrone =[{name:'AlKuds'}, {name:'Vostock'}];
const updateDroneAdd = droneHive.map((pilot, index) => {
  return Object.assign({}, pilot,updateDrone[index]);
});

console.log(updateDroneAdd);
 

const missileRank = [
  {name:'Shahine', Range:'1000', specialty: 'Stealth'},
  {name:'Iskander', Range:'1500', specialty: 'Satellite'},
  {name:'Mark', Range:'1300', specialty: 'Stealth'},
];

const specialUpdate =[{specialty:'sixthCore'}];
const addCode= missileHive.map((code, index) =>{
  return Object.assign({}, code, specialUpdate[index]);
});

console.log(addCode);