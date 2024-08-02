function outerFun() {
   var outerVar = 'I am outside!';

   function innerFun() {
    var innerVar = 'I am inside!';

    console.log(outerVar);
    console.log(innerVar);
   }

   innerFun();

}

outerFun();