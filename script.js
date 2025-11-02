// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Listen for form submission
    taskForm.addEventListener('submit', addTask);

    /**
     * Handles the form submission to add a new task.
     * @param {Event} e - The submit event object.
     */
    function addTask(e) {
        // Prevent the form from reloading the page
        e.preventDefault();

        // Get the text from the input, trimmed of whitespace
        const taskText = taskInput.value.trim();

        // If the input isn't empty, create the new task
        if (taskText !== '') {
            createTaskElement(taskText);
            
            // Clear the input field
            taskInput.value = '';
            
            // Put the focus back on the input
            taskInput.focus();
        }
    }

    /**
     * Creates the HTML structure for a new task and adds it to the list.
     * @param {string} text - The text for the new task.
     */
    function createTaskElement(text) {
        // Create the list item
        const li = document.createElement('li');
        li.className = 'task-item';

        // Create the span to hold the task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.className = 'task-text';
        taskTextSpan.textContent = text;
        li.appendChild(taskTextSpan);

        // Add the fully created list item to the task list
        taskList.appendChild(li);
    }

});