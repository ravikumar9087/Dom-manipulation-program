// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("teach student")
// newTodoItem.textContent = "teach student"

// const todoList1 = document.querySelector(".todo-list1 li")

// newTodoItem.append(newTodoItemText)
// todoList1.append(newTodoItem)
// todoList1.prepend(newTodoItem)
// todoList1.remove(newTodoItem)

//before
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "teach student"

const todoList1 = document.querySelector(".todo-list1 li")
// todoList1.before(newTodoItem);
todoList1.after(newTodoItem);



//after

