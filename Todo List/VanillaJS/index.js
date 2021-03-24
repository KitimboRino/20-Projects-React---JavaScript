// Function to add new todo item.
function addToList() {
    var taskName = document.getElementById('taskName').value;
    var todoDiv = document.getElementById('myTodo');

    var newTodoItem = document.createElement('div');

    var todoName = document.createElement('li');
    todoName.innerText = taskName;

    // Delete buttton logic.
    var deleteBtn = document.createElement('i');
    deleteBtn.classList.add('far');
    deleteBtn.classList.add('fa-trash-alt');

    // New list item.
    newTodoItem.appendChild(todoName);
    newTodoItem.appendChild(deleteBtn);

    todoDiv.appendChild(newTodoItem);

}

var todoDiv = document.getElementById('myTodo')
todoDiv.addEventListener('click', deleteItem)

// Function to Delete Item function.
function deleteItem(e) {
    const element = e.target
    if (element.classList[0] == 'far') {
        element.parentElement.remove()
    }
}