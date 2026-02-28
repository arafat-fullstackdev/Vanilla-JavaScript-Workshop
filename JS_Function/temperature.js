document.getElementById('convertBtn').addEventListener('click', function(){
    //get input
  const temperature = parseInt(
    document.getElementById('temperatureInput').value
  );

  const conversionType= document.getElementById('conversionType').value;

  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML="";

  if(isNaN(temperature)){
    resultDiv.innerHTML="Please Enter Valed Number";
    return;
  }

  //conversion logic
  let convertedTemperature;
  if(conversionType==="toCelcius"){
     convertedTemperature= (temperature - 32) * (5/9);

     resultDiv.innerHTML= `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
  }else if(conversionType==="toFerhenheit"){
     convertedTemperature= temperature * (9 / 5) + 32;

     resultDiv.innerHTML= `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
  }

})