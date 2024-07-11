// this keyword

const button = document.querySelector(".btn")
button.addEventListener("click",function(){
    console.log("you clicked me");
    console.log("value of this");
    console.log(this);
    }
)

button.addEventListener("click",()=>{
    console.log("you clicked me");
    console.log("value of this");
    console.log(this);
    }
)

