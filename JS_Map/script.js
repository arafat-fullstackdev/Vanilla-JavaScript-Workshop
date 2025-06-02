// array map

function doubleNum(numbers){
  const doubleValue = [];
   for(const num of numbers){
    const value = num * 3;
     doubleValue.push(value);
   }

   return doubleValue;

}

const numbersV = [2,3,4,5,6,7];
console.log(doubleNum(numbersV))

//? use map()

const valueN = [4,5,6,7];
const result = valueN.map((num => num *2));
const result1 = valueN.map((num => num +2));
console.log(result);
console.log(result1);

//* for each loop
const friends = ['Montu','Zontu', 'Pantu', 'Boltu', 'Nat'];
const friendsLen = friends.map((friL => friL.length));
const friendsLet = friends.map((frien => frien[0]));
console.log(friendsLen);
console.log(friendsLet);

const newNum = [ 3,9,13,23];
const newRes = newNum.forEach(elementN => console.log(elementN)); 
console.log(newRes);

//* filter
const player = [50,60,72,68,73,69, 70];
const playerName = ['Rachel', 'Bachel', 'Paskell', 'Dick', 'Frick', 'Mick', 'Bike','Musa','Mit','Bit'];
const selectedPlayer = player.filter((p => p>68));
const selectedPlayerName = playerName.filter((p => p.length>4));

console.log(selectedPlayer);
console.log(selectedPlayerName);

//* find

const playersBasketBall = [5,6,7,8,4,9,10,3];
const playersBasketBallRturn = playersBasketBall.find((p => p> 5));

console.log(playersBasketBallRturn);
//* findIndex

const numberFind = [10,11,13,15,1,62];

const numberIndex = numberFind.findIndex((IndexN => IndexN >10));
const numberIndex1 = numberFind.findIndex((IndexN => IndexN >100));

// console.log(numberIndex);
// console.log(numberIndex1);

//? object methods
// hasOwnProperty

const objP ={
  name : 'Ronaldo',
  age: 40,
  country: 'Portugal',
  city: 'Lisbon'
}

const newObj = objP.hasOwnProperty('city');
console.log(newObj);