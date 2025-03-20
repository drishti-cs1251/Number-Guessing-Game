let random=parseInt((Math.random()*100)+1);
const submit=document.querySelector('#b1');
const userInput=document.querySelector("#l1");
const rem=document.querySelector(".prev")
const guess1=document.querySelector(".guesses")
const loh=document.querySelector(".loworhigh")
const startOver=document.querySelector(".content")

const p=document.createElement("p");
let numGuess=1;
let prevGuess=[];
let playGame=true;
if (playGame)
{
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuuess(guess);
    })
}
function validateGuuess(guess){
    if(isNaN(guess))
    {
        alert("Please enter a valid number")
    }
    else if(guess<1)
    {

        alert("number is less than 1");
    }
    else if(guess>100)
    {
        alert("number greater than 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess=== 11)
            {
                displayGuess(guess);
                displayMsg(`Game over. Random number was ${random}`);
                endGame();}
                else{
                    displayGuess(guess);
                    checkGuess(guess);
                }
    }
}
function checkGuess(guess)
{
    if(guess===random)
    {
        displayMsg("Yay! You guessed it right...");
        endGame();
    }
    else if(guess<random){
        displayMsg("Number is too low...");

    } 
    else if (guess>random)
    {
        displayMsg("Number is too high...")
    }
    
}
function displayGuess(guess)
{
    userInput.value="";
    guess1.innerHTML+=`${guess},  `;
    numGuess++;
    rem.innerHTML=`${11- numGuess}`;


}
function displayMsg(msg){
    loh.innerHTML=`<h2>${msg}</h2>` ;
}
function endGame(){
    userInput.value=""
    userInput.setAttribute("disabled","")
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}
function newGame()
{
const newGameButton=document.querySelector("#newGame")
newGameButton.addEventListener("click",function(e)
{
    random=parseInt((Math.random()*100)+1);
    prevGuess=[];
    numGuess=1;
    
    loh.innerHTML="";
    guess1.innerHTML="";
    rem.innerHTMl=`${11-numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
   playGame=true;

});
}
