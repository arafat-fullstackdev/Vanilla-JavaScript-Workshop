// ( function(){
//     let name = 'Immedialty invoked function';
//     console.log(name);
// })();

let counter = (function(){
    let count = 0;

    return{
        increment: function(){
            count++;
        },
         decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    };

})();

//? increment the counter
counter.increment();
counter.increment();
counter.increment();


counter.decrement();

console.log(counter.getCount());
console.log(counter.count);