//await
function resolveFun(a){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(a);
        },2000)
    })
}

async function f1(){
    const b = await resolveFun(10)
    console.log(b)
}

f1()
// gemni
// await
function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        1: "Apple",
        2: "Banana",
        3: "Cherry"
      };
      resolve(data[id]);
    }, 1500); // Simulate network delay
  });
}

async function getAndLogFruit() {
  console.log("Fetching fruit...");
  const fruit1 = await fetchData(1);
  console.log("First fruit:", fruit1);

  const fruit2 = await fetchData(2);
  console.log("Second fruit:", fruit2);
}

getAndLogFruit();

//?
// await
function simulateDatabaseQuery(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [{
        id: 1,
        name: "Alice"
      }, {
        id: 2,
        name: "Bob"
      }, {
        id: 3,
        name: "Charlie"
      }, ];

      if (query === "SELECT * FROM users") {
        resolve(users);
      } else if (query === "SELECT name FROM users WHERE id = 2") {
        const user = users.find(u => u.id === 2);
        resolve(user ? user.name : null);
      } else {
        reject(new Error("Invalid query"));
      }
    }, 1000); // Simulate database query delay
  });
}

async function performDatabaseOperations() {
  try {
    console.log("Executing queries...");

    const allUsers = await simulateDatabaseQuery("SELECT * FROM users");
    console.log("All users:", allUsers);

    const bobName = await simulateDatabaseQuery("SELECT name FROM users WHERE id = 2");
    console.log("Name of user with ID 2:", bobName);

    // This will throw an error and be caught by the catch block
    const invalidResult = await simulateDatabaseQuery("DELETE FROM users");
    console.log("This should not be logged:", invalidResult);

  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Database operations complete.");
  }
}

performDatabaseOperations();