// task 
// btn1 yellow color backg grey
const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "yellow"
        e.target.style.color = "gray"

    })
})