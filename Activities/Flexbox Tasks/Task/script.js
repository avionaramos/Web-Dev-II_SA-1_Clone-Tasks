document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.querySelector('.todo-list');

    // Function to add a new task
    function addTask() {
        const taskText = newTaskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new task element
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create a span to hold the task text
        const task = document.createElement('span');
        task.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';

        // Append checkbox, task, and delete button to the task element
        todoItem.appendChild(checkbox);
        todoItem.appendChild(task);
        todoItem.appendChild(deleteButton);

        // Append the task element to the list
        todoList.appendChild(todoItem);

        // Clear the input field
        newTaskInput.value = '';

        // Delete the task when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });
    }

    // Add task on button click
    addTaskButton.addEventListener('click', addTask);

    // Add task on 'Enter' key press
    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
