"use strict";

var newTask = document.getElementById('new-task');
var toDoList = document.getElementById('to-do-list');
var noTask = document.querySelector('.no-task');
newTask.addEventListener('submit', function (e) {
  e.preventDefault();
  var newTaskName = document.getElementById('new-task-name');
  var newTaskDescription = document.getElementById('new-task-description');

  if (newTaskName.value === '' || newTaskDescription.value === '') {
    e.stopPropagation();
  } else {
    createList({
      name: newTaskName.value,
      description: newTaskDescription.value
    });
    addToList({
      name: newTaskName.value,
      description: newTaskDescription.value
    });
    newTaskName.value = '';
    newTaskDescription.value = '';
  }
});

function createList(_ref) {
  var name = _ref.name,
      description = _ref.description;
  var tasks = document.createElement('li');
  tasks.className = 'task';
  var taskTitle = document.createElement('div');
  taskTitle.className = 'task-title';
  var taskMarker = document.createElement('input');
  taskMarker.className = 'task-marker';
  taskMarker.setAttribute('type', 'checkbox');
  var taskName = document.createElement('p');
  taskName.className = 'task-name';
  taskName.textContent = name;
  var taskDescription = document.createElement('p');
  taskDescription.className = 'task-description';
  taskDescription.textContent = description;
  taskTitle.appendChild(taskMarker);
  taskTitle.appendChild(taskName);
  tasks.appendChild(taskTitle);
  tasks.appendChild(taskDescription);
  toDoList.appendChild(tasks);
  tasks.addEventListener('click', function (e) {
    if (e.target === taskMarker) {
      e.stopPropagation();
    } else {
      tasks.classList.toggle('expand');
    }

    if (taskMarker.checked) {
      toDoList.removeChild(e.currentTarget);
    }
  });

  if (noTask) {
    toDoList.removeChild(noTask);
    noTask = null;
  }
}

;

function addToList(_ref2) {
  var name = _ref2.name,
      description = _ref2.description;
  var taskList = localStorage.getItem('tasks');
  taskList = taskList ? JSON.parse(taskList) : [];
  taskList.push({
    name: name,
    description: description
  });
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

var taskList = localStorage.getItem('tasks');

if (taskList) {
  JSON.parse(taskList).forEach(function (task) {
    createList({
      name: task.name,
      description: task.description
    });
  });
}