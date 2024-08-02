function createCounter() {
    let count = 0;

    return {
        increment: function(){
            count++;
            console.log('present count:', count);
        },

        decrement: function(){
            count--;
            console.log('present count:', count);
        },

        getCount: function() {
            return count;
        }
    };
}

  const counter = createCounter();

  counter.increment();
  counter.increment();
  counter.decrement();
console.log('final count:', counter.getCount());