console.log('Start');

setTimeout(() =>{
    console.log('Fetch data from Sever...')
 },6000);
// console.log('end');
//* Using Promises for another asynchronous operation
const fetchData = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const data = {name: 'Dany', job:'developer'};
            resolve(data);

        },4000)
    })
};
fetchData()
.then((data) =>{
    console.log('Data from fetched successfully:', data);
})
.catch((error) =>{
    console.error('Error fetching data:', error);
});
console.log('End');