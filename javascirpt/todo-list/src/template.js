// First, import the CSS file if you haven't already
import "./template.css";
// Import the new popup stylesheet
import "./popup/popup.css";

// Import our task management and filtering functions
import { createTask, tasks, saveTasks, loadTasks } from "./todo.js";
import { filterTasks, sortTasks } from "./filterSort.js";

// Get references to our HTML elements
const taskModal = document.getElementById('taskModal');
const addTaskBtn = document.querySelector('.add-item');
const closeBtn = document.querySelector('.modal-close');
const cancelBtn = document.querySelector('.modal-cancel');
const priorityButtons = document.querySelectorAll('.priority-btn');
const taskPriorityInput = document.getElementById('taskPriority');
const taskForm = document.getElementById('taskForm');
const tabsContainer = document.querySelector('.tabs');

// Get references to filter/sort controls
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const searchBar = document.getElementById('search-bar');

// We'll keep track of our active filter and search term
let activeFilter = 'all';
let currentSearchTerm = '';

// Function to show the modal
function showModal() {
    taskModal.classList.add('modal-show');
}

// Function to hide the modal and reset the form
function hideModal() {
    taskModal.classList.remove('modal-show');
    taskForm.reset();
}

// Function to toggle the completion status of a task
const toggleTaskCompletion = (taskId) => {
    const taskIndex = tasks.findIndex(task => task.id.toString() === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
        saveTasks();
        renderTasks();
    }
};

// Function to render tasks based on current filters/sort
function renderTasks() {
    tabsContainer.innerHTML = '';
    
    // First, filter the tasks
    let tasksToRender = filterTasks(activeFilter);

    // Then, apply search if there's a search term
    if (currentSearchTerm) {
        const searchTermLower = currentSearchTerm.toLowerCase();
        tasksToRender = tasksToRender.filter(task => 
            task.title.toLowerCase().includes(searchTermLower) || 
            task.description.toLowerCase().includes(searchTermLower)
        );
    }
    
    // Now, render the final list of tasks
    tasksToRender.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-card');
        if (task.isComplete) {
            taskElement.classList.add('completed');
        }

        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <button class="complete-btn" data-id="${task.id}">Complete</button>
        `;
        tabsContainer.appendChild(taskElement);

        const completeBtn = taskElement.querySelector('.complete-btn');
        completeBtn.addEventListener('click', (e) => {
            toggleTaskCompletion(e.target.dataset.id);
        });
    });
}

// Event listener for the "Add New Item" button
addTaskBtn.addEventListener('click', showModal);

// Event listeners for closing the modal
closeBtn.addEventListener('click', hideModal);
cancelBtn.addEventListener('click', hideModal);

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === taskModal) {
        hideModal();
    }
});

// Event listeners for priority buttons
priorityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        priorityButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        taskPriorityInput.value = event.target.dataset.value;
    });
});

// Event listener for the form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = taskPriorityInput.value;

    const newTask = createTask(title, description, dueDate, priority);
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    hideModal();
});

// Event listener for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        activeFilter = e.target.dataset.filter;
        renderTasks();
    });
});

// Event listener for sort buttons
sortButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let sortedTasks = sortTasks(e.target.dataset.sort);
        tasks.length = 0;
        tasks.push(...sortedTasks);
        saveTasks();
        renderTasks();
    });
});

// Event listener for the search bar
searchBar.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    renderTasks();
});

// Call renderTasks on page load to display any tasks already in local storage
renderTasks();