"use strict";

var inputItem = document.querySelector('.input-value');
var addTaskButton = document.querySelector('#add-task');
var taskList = [];
addTaskButton.addEventListener('click', function () {
  var localItems = JSON.parse(localStorage.getItem('localItem'));

  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  taskList.push(inputItem.value);
  localStorage.setItem('localItem', JSON.stringify(taskList));
});

function showList() {
  var outPut = '';
  var showTasklist = document.querySelector('#todolistitem');
  var localItems = JSON.parse(localStorage.getItem('localItem'));

  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  taskList.forEach(function (data, index) {
    outPut += "\n               <li class=\"task\">\n                    <p class=\"text\">Code</p>\n                    <button class=\"remove-task\"><i class=\"fas fa-times\">".concat(index, "</i></button>\n               </li>\n          ");
  });
  showTasklist.innerHTML = outPut;
}

showList();

function deleteTask(index) {
  var localItems = JSON.parse(localStorage.getItem('localItem'));
  taskList.splice(index, 1);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  showList();
}