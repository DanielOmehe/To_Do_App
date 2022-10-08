const newTask = document.getElementById('new-task');
const toDoList = document.getElementById('to-do-list');
let noTask = document.querySelector('.no-task');

newTask.addEventListener('submit', e => {
    e.preventDefault();

    const newTaskName = document.getElementById('new-task-name');
    const newTaskDescription = document.getElementById('new-task-description');

    if(newTaskName.value === '' || newTaskDescription.value === ''){
        e.stopPropagation();
    }else{
        createList({name: newTaskName.value, description: newTaskDescription.value});
        addToList({name: newTaskName.value, description: newTaskDescription.value});
        newTaskName.value = '';
        newTaskDescription.value = '';
    }
})

function createList({name, description}){
    let tasks = document.createElement('li');
    tasks.className = 'task';

    let taskTitle = document.createElement('div');
    taskTitle.className = 'task-title';

    let taskMarker = document.createElement('input');
    taskMarker.className = 'task-marker';
    taskMarker.setAttribute('type', 'checkbox');

    let taskName = document.createElement('p');
    taskName.className = 'task-name';
    taskName.textContent = name;

    let taskDescription = document.createElement('p');
    taskDescription.className = 'task-description';
    taskDescription.textContent = description;

    taskTitle.appendChild(taskMarker);
    taskTitle.appendChild(taskName);

    tasks.appendChild(taskTitle);
    tasks.appendChild(taskDescription);

    toDoList.appendChild(tasks);

    tasks.addEventListener('click', e => {
        if(e.target === taskMarker){
            e.stopPropagation()
        }else{
            tasks.classList.toggle('expand');
        }

        if(taskMarker.checked){
            toDoList.removeChild(e.currentTarget)
        }
    })

    if(noTask){
        toDoList.removeChild(noTask);
        noTask = null;
    }
};

function addToList({name, description}){
    let taskList = localStorage.getItem('tasks');
    taskList = taskList ? JSON.parse(taskList) : [];
    taskList.push({name, description});
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

let taskList = localStorage.getItem('tasks');
if(taskList){
    JSON.parse(taskList).forEach(task => {
        createList({name: task.name, description: task.description});
    });
}