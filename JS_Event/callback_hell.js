// classic example Hell

setTimeout(()=>{
    console.log('Step 1!');
 setTimeout(()=>{
    console.log('Step 2!');
    
  setTimeout(() => {
    console.log('Step 3!');
  }, 2000);  
 },3000);

},1000);

// Modern Feature
function login(username, callback){
    setTimeout(()=>{
        console.log(`User name ${username} login success!`);
        callback(username);
    },2000);
}

 function getUser(username, callback){
    setTimeout(()=>{
        console.log(`User Details ${username}`);
        callback({post: [1,2,3,4,5]});
    },1000);
 }

 function userProfile(post,callback){
    setTimeout(()=>{
        console.log(`User Post Details ${post.join(', ')}`);

        callback();
    },3000);
 }

 login("Dell", function(username){
  getUser(username, function(userData){
    userProfile(userData.post, function(){
        console.log('All Done!');
    })
  })
 })