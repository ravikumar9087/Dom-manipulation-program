// event bubbling
// event capturing
// event delegation


const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
// event bubbling
// child.addEventListener("click",()=>console.log("child"))
// parent.addEventListener("click",()=>console.log("parent"))

// grandParent.addEventListener("click",()=>console.log("grand parent"))

// const body = document.body
// body.addEventListener("click",()=>console.log("body"))

// event capturing

// child.addEventListener("click",()=>console.log("child"),true)
// parent.addEventListener("click",()=>console.log("parent"),true)

// grandParent.addEventListener("click",()=>console.log("grand parent"),true)

// const body = document.body
// body.addEventListener("click",()=>console.log("body"),true)

// event delegation


grandParent.addEventListener("click",(e)=>console.log(e.target.textContent),true)


