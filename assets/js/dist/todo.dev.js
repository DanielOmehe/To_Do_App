"use strict";

var form = document.getElementById('form');
var input = document.getElementById('input');
var todosUL = document.getElementById('todos');
var todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(function (todo) {
    return addTodo(todo);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  var todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    var todoEl = document.createElement('li');

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;
    todoEl.addEventListener('click', function () {
      todoEl.classList.toggle('completed');
      updateLS();
    });
    todoEl.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);
    input.value = '';
    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li');
  var todos = [];
  todosEl.forEach(function (todoEl) {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}