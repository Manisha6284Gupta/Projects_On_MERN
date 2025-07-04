const randomNumber = Math.floor(Math.random()*(40-20)+20);
console.log(randomNumber);
const feedbcak = document.getElementById('feedback');
let userGuess;
// check function


document.getElementById('guessBtn').addEventListener("click", function(){
   userGuess = parseInt(document.getElementById('Input').value);
   guessCheck()
});

let  guessCheck= function(){
    while(userGuess != randomNumber)
    {
        if(userGuess < randomNumber)
        {
            feedbcak.textContent = "Number is too low. Try Again"
        }
        else if(userGuess >randomNumber )
        {
            feedbcak.textContent = "Number is too high. Try Again"
        }
        else{
            return;
        }
    }
    feedbcak.textContent ="🎉 Bravo, You guess the correct number"
}