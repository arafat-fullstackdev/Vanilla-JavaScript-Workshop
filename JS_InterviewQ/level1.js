const createBadge=(name,age)=>{
  const status= 'Students';

  
    if(age === 18){
        console.log('Adult')
    }
      return `Name: ${name} age: ${age} Status: ${status}`

  
}

createBadge('Arafat',18)