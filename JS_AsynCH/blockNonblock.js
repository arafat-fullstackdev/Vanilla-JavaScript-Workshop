console.log('Step 1: Boil water.');
console.log('Step 2: Put the the Psata');
console.log('Step 3: Drain the water.');
console.log('Step 4: Serve the water.');

// blocking task
function blockTask(){
    console.log('step 1:Stand on counter');
    const startTime = Date.now();
    while(Date.now() -startTime <5000){
        console.log('Step 2: Put the ticket');
    }
}

blockTask();