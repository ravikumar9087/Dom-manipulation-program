// clone nodes

const ul = document.querySelector(".todo-list1")
const li = document.querySelector("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li)
ul.prepend(li2)
