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


