// Get elements
const todoInput = document.getElementById("todo-input");
const dueDateInput = document.getElementById("due-date");
const dueTimeInput = document.getElementById("due-time");
const todoList = document.getElementById("todo-list");

// Add todo function
function addTodo() {
    const todoText = todoInput.value;
    const dueDate = dueDateInput.value;
    const dueTime = dueTimeInput.value;

    if (todoText.trim() !== "") {
        // Create li element
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
        todoItem.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(this)">
            <span>${todoText}</span>
            <span>${getFormattedDateTime(dueDate, dueTime)}</span>
            <button onclick="removeTodo(this)">Remove</button>
        `;

        // Append li element to ul
        todoList.appendChild(todoItem);

        // Clear inputs
        todoInput.value = "";
        dueDateInput.value = "";
        dueTimeInput.value = "";
    }
}

// Toggle complete function
function toggleComplete(checkbox) {
    const todoItem = checkbox.parentNode;
    todoItem.classList.toggle("completed");
}

// Remove todo function
function removeTodo(button) {
    const todoItem = button.parentNode;
    todoList.removeChild(todoItem);
}

// Format date and time
function getFormattedDateTime(date, time) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = new Date(`${date}T${time}`).toLocaleString('en-US', options);
    return formattedDate;
}
