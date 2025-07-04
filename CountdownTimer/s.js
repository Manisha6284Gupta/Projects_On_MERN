const startCountDown = ()=>{
   const timeInput = document.getElementById('timerInput').value;
   const timerDisplay = document.getElementById('timer');
   const timeremaining = parseInt(timeInput);
   console.log(timeInput);
   
   if(isNaN(timeremaining) || timeremaining <= 0){
    timerDisplay.textContent = "Enter a valid number";
    return;
   }
   timerDisplay.textContent = `time Left ${timeremaining} seconds`;
   for(let i = timeremaining; i >= 0; i--)
   {
    (function(count){
        setTimeout(()=>{
            if(count > 0){
                timerDisplay.textContent = `Time Left: ${count} seconds`
            }
            else{
                timerDisplay.textContent = "Time's up";
            }
        }, (timeremaining-count)*1000)
    })(i)
   }

};


document.getElementById("startBtn").addEventListener('click',startCountDown)