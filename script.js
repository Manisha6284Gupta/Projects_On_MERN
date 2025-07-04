// // const temperatureInput=document.getElementById("temperatureInput");
// // const conversionInput=document.getElementById("conversion");
// const convertButton=document.getElementById("convertBtn");




// convertButton.addEventListener("click",function(){
   
//    const temperature = parseInt(document.getElementById("temperatureInput").value);

//    const conversionInput=document.getElementById("conversionType").value;
//    console.log(conversionInput);
 

//    const resultBtn = document.getElementById("Result");

//    resultBtn.innerHTML= " ";
//    if(isNaN(temperature))
//    {
//       resultBtn.innerHTML="Please enter a valid number";
//       return;
//    }
//     //conversion logic

//    let convertedTemperature;
//    if(conversionInput=="toCelsius")
//    {
//     convertedTemperature=(temperature-32)*(5/9);
//     resultBtn.innerHTML=`${temperature}F is equal to ${convertedTemperature}C`
//    }else if(conversionInput=="toFahrenheit")
//    {
//     convertedTemperature=(temperature*9/5)+32;
//     resultBtn.innerHTML=`${temperature}C is equal to ${convertedTemperature}F`
//    }

// });