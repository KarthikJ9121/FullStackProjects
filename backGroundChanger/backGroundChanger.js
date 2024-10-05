let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");

function generateRandomColor()
{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

btn.addEventListener("click", function()
{
    console.log("button Clicked");
    let randomColor = generateRandomColor();
    h1.style.color = randomColor;
    h1.textContent = randomColor;
    div.style.backgroundColor = randomColor;
});

