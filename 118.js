// static list vs live list


//static

// const listItems = document.querySelectorAll(".todo-list2 li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list2");
// ul.append(sixthLi);
// console.log(listItems);

// live

const ul = document.querySelector(".todo-list2")
const listItems = ul.getElementsByTagName("li")
const sixthLi = document.createElement("li")
sixthLi.textContent = "item 6"
ul.append(sixthLi)
console.log(listItems);