const prompt = require('prompt-sync')();

// To-Do List Application
const todoList = [];

function displayMenu() {
    console.log('\n==== To-Do List ====');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Mark task as done');
    console.log('4. Quit');
}

function addTask() {
    const task = prompt('Enter the task: ');
    todoList.push({ task, done: false });
    console.log('Task added successfully!');
}

function viewTasks() {
    console.log('\n==== Tasks ====');
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.task} - ${item.done ? 'Done' : 'Not done'}`);
    });
}

function markAsDone() {
    viewTasks();
    const index = parseInt(prompt('Enter the number of the task to mark as done: '), 10) - 1;

    if (index >= 0 && index < todoList.length) {
        todoList[index].done = true;
        console.log('Task marked as done!');
    } else {
        console.log('Invalid task number.');
    }
}

function startApp() {
    displayMenu();

    const choice = prompt('Enter your choice (1-4): ');

    switch (choice) {
        case '1':
            addTask();
            break;
        case '2':
            viewTasks();
            break;
        case '3':
            markAsDone();
            break;
        case '4':
            console.log('Goodbye!');
            break;
        default:
            console.log('Invalid choice. Please enter a number between 1 and 4.');
    }

    if (choice !== '4') {
        startApp(); // Continue the loop
    }
}

// Start the To-Do List application
startApp();
