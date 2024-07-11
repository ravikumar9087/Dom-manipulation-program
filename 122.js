const allButtons = document.querySelectorAll("button");


// for of loop
// for(let button of allButtons){
//     button.addEventListener("click",()=>{
//         console.log(this.textContent);
//     })
// }


// for loop
// for (let i = 0; i < allButtons.length; i++) {
//    allButtons[i].addEventListener("click",function(){
//             console.log(this.textContent);
//         }
//     );
// }




// for each loop
allButtons.forEach(function(button){
        button.addEventListener("click",function(){
            console.log(this.textContent);
        })
    }
)