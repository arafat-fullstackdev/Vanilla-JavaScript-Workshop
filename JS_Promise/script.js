/** Create a Promise */
const myPromise = new Promise((resolve, reject) => {
    // Simulating an async task with setTimeout
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Step 1: Operation successful.");
        } else {
            reject("Step 1: Operation failed.");
        }
    }, 2000); // 2-second delay
});

// Consume the Promise with chaining
myPromise
    .then((data) => {
        console.log(data); // Logs "Step 1: Operation successful"
        // Returning another Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 2: Next operation successful");
            }, 3000); // 3-second delay
        });
    })
    .then((data) => {
        console.log(data); // Logs "Step 2: Next operation successful"
        return "Step 3: All tasks complete!";
    })
    .then((data) => {
        console.log(data); // Logs "Step 3: All tasks complete!"
    })
    .catch((error) => {
        console.error("Error:", error); // Handles any rejection in the chain
    })
    .finally(() => {
        console.log("Execution finished!"); // Always executes
    });
