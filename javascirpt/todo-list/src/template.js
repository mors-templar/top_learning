// First, import the CSS file if you haven't already
import "./template.css";
// Import the new popup stylesheet
import "./popup/popup.css";

// Get references to our HTML elements
const taskModal = document.getElementById('taskModal');
const addTaskBtn = document.querySelector('.add-item');
const closeBtn = document.querySelector('.modal-close');
const cancelBtn = document.querySelector('.modal-cancel');
const priorityButtons = document.querySelectorAll('.priority-btn');
const taskPriorityInput = document.getElementById('taskPriority');

// Function to show the modal
function showModal() {
    taskModal.classList.add('modal-show');
}

// Function to hide the modal
function hideModal() {
    taskModal.classList.remove('modal-show');
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
        // Remove the 'active' class from all buttons
        priorityButtons.forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked button
        event.target.classList.add('active');

        // Set the hidden input value
        taskPriorityInput.value = event.target.dataset.value;
    });
});