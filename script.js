const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} <small>${new Date(taskDueDate).toLocaleString()}</small></span>
        <div>
            <button class="done-button" onclick="markDone(this)">Done</button>
            <button class="done-button delete-button" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDate.value = '';
}

function markDone(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    taskList.removeChild(li);
}
