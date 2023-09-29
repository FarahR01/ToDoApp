// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(button.parentElement);
}

