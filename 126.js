// random color generator

const button = document.querySelector("button")
// console.log(button);
const currentColor = document.querySelector(".current-color")
const body = document.body;
// console.log(currentColor);

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;

}

button.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor
})

