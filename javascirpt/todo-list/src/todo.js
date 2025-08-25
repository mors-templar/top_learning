// This file will contain the logic for handling our tasks

// Use a factory function to create new task objects
const createTask = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
        isComplete: false,
        id: Date.now(), // A simple way to get a unique ID
    };
};

// Array to store all our tasks
let tasks = [];

// Function to save tasks to local storage
const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Function to load tasks from local storage
const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
};

// Initial load of tasks when the page loads
loadTasks();

// Export our functions so they can be used in other files
export { createTask, tasks, saveTasks, loadTasks };