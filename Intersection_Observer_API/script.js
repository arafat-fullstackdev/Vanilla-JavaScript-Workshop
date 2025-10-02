//? Intersection Observer API in JavaScript
//** It  real example FaceBook Post (viewMore) 
// When we scroll and reach viewMore Button FB Call API for more post */

const circle = document.getElementById('circle');
const  observer = new IntersectionObserver((items) => {
    //console.log(items);
  items.forEach((items) =>{
    if(items.isIntersecting)
    {
        console.log(`${items.target} is Visible`);
    } else{
        console.log(`${items.target} is Not Visible`);
    }

  })
},
{
    threshold: 1 // full visible
    //threshold: 0.5 // half visible
  }
);

observer.observe(circle);