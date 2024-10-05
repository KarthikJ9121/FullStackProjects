let userInput;

document.addEventListener("keypress", function()
{
    userInput = prompt("Enter A number\n-1.Quit");
    startGame();
});

function startGame()
{
    let num = Math.floor(Math.random() * 100) + 1;
    let c = 0;

    while(true)
    {
            if(userInput === '')
                console.log("Enter a Number");
            else if(userInput == -1)
            {
                console.log("Game End");
                break;
            }
            else if(userInput == num)
            {
                console.log("Hey You, Champ\nCongrats You Won !!");
                if(c == 1)
                {
                    console.log(`You have made ${c} wrong choice`);
                    break;
                }
                console.log(`You have made ${c} wrong choices`);
                break;
            }
            else if(userInput > num)
            {
                console.log(userInput);
                console.log("Your Guess is High\nTry Again");
            }
            else if(userInput < num)
            {
                console.log(userInput);
                console.log("Your Guess is Low\nTry Again");
            }
            
            c++;
            userInput = prompt("Enter A number\n-1.Quit");
    }
}