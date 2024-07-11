// event object

const firstButton = document.querySelector("#one")

// firstButton.addEventListener("click",function(e){
//     console.log(e);
// })


//jab bhi mai element pe event listener add hoga
// js engine --- line by line execute krta hai
// browser ---- js engine +extra features
// browser ---- js engine +webApi
// jab browser ko pta chla ki user ne event perform kia 
// jo hum listen kr rahe hai
// browser ---- 2 kam krega
// callback fn hai vo js engine ko dega..
// callback fn ke sath browser jo event hua hai uski information bhi dega ye info object ki form mai milgi


const allButtons = document.querySelectorAll("button");

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}
