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