let h3 = document.querySelector("h3");
let btnEle = document.querySelectorAll(".btn");

let highestScore = 0;
let h2 = document.createElement('h2');
h2.innerHTML = `Highest Score: ${highestScore}`;
document.body.appendChild(h2);

let started = false;
let level = 0;

let gameArr = ["orange", "purple", "green", "red"];
let gameSeq = [];
let userSeq = [];

function gameFlash(btn)
{
    btn.classList.add("white-bg");
    setTimeout(function(){
        btn.classList.remove("white-bg");
    }, 250);
    console.log(gameSeq);
}

function levelup()
{
    userSeq = [];
    level++;
    h3.innerHTML = `Level ${level}`;

    let randomInd = Math.floor(Math.random() * 3) + 1;
    let randomColor = gameArr[randomInd];
    let btn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    gameFlash(btn);
}

document.addEventListener("keypress", function(event)
{
    if(started == false)
    {
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function checkAns(ind)
{
    if(userSeq[ind] === gameSeq[ind])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelup, 1000);
        }
    }
    else
    {
        h3.innerHTML = `Game Over! Your Score is <b> ${level} </b> <br> Press any Key To Start Again.`;
        document.querySelector('body').style.backgroundColor = 'red';
        if(parseInt(level) > parseInt(highestScore))
        {
            highestScore = level;
            h2.innerHTML = `Highest Score : ${level}`;
        }
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150);
        reset();
    }
    
}

function userFlash(btn)
{
    btn.classList.add("black-bg");
    setTimeout(function(){
        btn.classList.remove("black-bg");
    }, 250);
}

function btnClick()
{
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


for(let btn of btnEle)
{
    btn.addEventListener("click", btnClick)
}
