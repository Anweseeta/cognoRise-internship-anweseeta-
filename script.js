let tasks = [];

// Load tasks from local storage
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    displayTasks();
}

function CreateToDoItems() {
    let todoText = document.getElementById('todoText').value;

    // Error handling: prevent empty tasks
    if (todoText.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task object
    let task = {
        text: todoText,
        completed: false
    };

    // Add the task to the tasks array
    tasks.push(task);

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Display the task
    displayTasks();

    // Clear the input field
    document.getElementById('todoText').value = '';
}

function displayTasks() {
    let listItems = document.getElementById('listItems');
    listItems.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskHTML = `
            <li>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleCompleted(${index})">
                <span ${task.completed ? 'class="completed"' : ''}>${task.text}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
        listItems.innerHTML += taskHTML;
    });
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function editTask(index) {
    let taskText = prompt('Edit task:', tasks[index].text);
    if (taskText) {
        tasks[index].text = taskText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Attach the function to the button click
document.getElementById('AddUpdateClick').addEventListener('click', CreateToDoItems);