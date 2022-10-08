const newTask = document.getElementById('new-task');
// const taskName = document.getElementById('new-task-name');
// const taskDescription = document.getElementById('new-task-description');
// const toDoList = document.getElementById('to-do-list')

// newTask.addEventListener('submit', e => {
//     e.preventDefault();

//     let newTask = taskName.value;
//     let newDescription = taskDescription.value;

//     if(newTask === '' || newDescription === ''){
//         e.stopPropagation();
//     }else{
//         addToList({name: newTask, description: newDescription});
//         taskName.value = ''
//         taskDescription.value = ''
//     }
// });

// function addToList({name, description}){
//     let taskList = [];
//     taskList = localStorage.setItem('tasks', JSON.stringify(taskList));
//     if(!taskList){
//         taskList = [];
//     }else{
//         taskList.push({name, description});

//         taskList.forEach(task => {

//             let todo = document.createElement('li');
//             todo.classList.add('task');

//             let taskTitle = document.createElement('div');
//             taskTitle.classList.add('task-title');

//             let taskMarker = document.createElement('input');
//             taskMarker.setAttribute('type', 'checkbox');
//             taskMarker.classList.add('task-marker');

//             let newTaskName = document.createElement('p');
//             newTaskName.classList.add('task-name');
//             newTaskName.textContent = task.name;

//             let newTaskDescription = document.createElement('p');
//             newTaskDescription.classList.add('task-description');
//             newTaskDescription.textContent = task.description;

//             taskTitle.appendChild(taskMarker);
//             taskTitle.appendChild(newTaskName);

//             todo.appendChild(taskTitle);
//             todo.appendChild(newTaskDescription);

//             toDoList.removeChild(document.querySelector('no-task'));
//             toDoList.appendChild(todo);
//         })
//         taskList = localStorage.getItem('tasks');
//     }
// }