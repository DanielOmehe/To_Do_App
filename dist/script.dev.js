"use strict";

var addNewTask = document.getElementById('new-task');
var toDoList = document.getElementById('to-do-list');
var tasks = todolist.children;

if (toDoList.children === 0) {
  //toDoList.innerHTML = 'You dont have any tasks yet'
  console.log('no child');
}

var addToList = function addToList(_ref) {
  var description = _ref.description,
      title = _ref.title;
  var taskTitle = document.createElement('div');
  taskTitle.classList.add('task-title');
  var taskMarker = document.createElement('input');
  taskMarker.classList.add('task-marker');
  taskMarker.setAttribute('type', 'checkbox');
  var taskName = document.createElement('p');
  taskName.classList.add('task-name');
  taskName.textContent = title;
  var taskDescription = document.createElement('p');
  taskDescription.textContent = description;
  taskTitle.appendChild(taskMarker);
  taskTitle.appendChild(taskName);
  var task = document.createElement('li');
  task.addEventListener('click', function (e) {
    if (e.target === taskMarker) {
      e.stopPropagation();
    } else {
      task.classList.toggle('expand');
    }

    if (taskMarker.checked) {
      taskTitle.classList.add('done');
      toDoList.removeChild(e.currentTarget);
    } else {
      taskTitle.classList.remove('done');
    }
  });
  task.classList.add('task');
  task.appendChild(taskTitle);
  task.appendChild(taskDescription);
  toDoList.appendChild(task);
  console.log(toDoList.children);
};

addNewTask.addEventListener('submit', function (event) {
  event.preventDefault();
  var newTask = document.getElementById('new-task-name');
  var newDescription = document.getElementById('new-task-description');

  if (newTask.value === '' || newDescription.value === '') {
    event.stopPropagation();
  } else {
    addToList({
      title: newTask.value,
      description: newDescription.value
    });
    newDescription.value = '';
    newTask.value = '';
  }
});