// elem.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin

// beforeend
// afterend

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "teach student"


const todoList1 = document.querySelector(".todo-list1 li")

// todoList1.insertAdjacentHTML("afterend", "<li>ravi</li>")
// todoList1.insertAdjacentHTML("beforeend", "<li>ravi</li>")
// todoList1.insertAdjacentHTML("afterbegin", "<li>ravi</li>")
todoList1.insertAdjacentHTML("beforebegin", "<li>ravi</li>")

