import { tasks } from "./todo.js";

const filterTasks = (filterType) => {
    switch (filterType) {
        case 'completed':
            return tasks.filter(task => task.isComplete);
        case 'incomplete':
            return tasks.filter(task => !task.isComplete);
        case 'high':
            return tasks.filter(task => task.priority === 'high');
        case 'medium':
            return tasks.filter(task => task.priority === 'medium');
        case 'low':
            return tasks.filter(task => task.priority === 'low');
        case 'all':
        default:
            return tasks;
    }
};

const sortTasks = (sortType) => {
    switch (sortType) {
        case 'dueDate':
            return [...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        case 'priority':
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            return [...tasks].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        default:
            return tasks;
    }
};

export { filterTasks, sortTasks };