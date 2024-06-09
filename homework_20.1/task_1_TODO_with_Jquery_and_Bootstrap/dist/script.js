"use strict";

var div = document.querySelector('[data-action]');
var btnAdd = document.querySelector("[data-btnAdd]");
var btnText = document.querySelector("[data-btnText]");
var ul = document.querySelector("[data-task]");
var section = document.querySelector('section');
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function createList(task) {
  var li = document.createElement('li');
  ul.appendChild(li);
  var parag = document.createElement('p');
  li.appendChild(parag);
  parag.innerText = task.text;
  parag.classList.add('task-value');
  li.classList.add('task');
  var button = document.createElement('button');
  li.appendChild(button);
  button.innerText = 'Видалити';
  button.setAttribute('id', 'btnDelete');
  button.addEventListener('click', function () {
    tasks = tasks.filter(function (e) {
      return e !== task;
    });
    saveTasks();
    loadTasks();
  });
  var done = document.createElement('input');
  done.type = 'checkbox';
  done.checked = task.taskChecked;
  done.addEventListener('change', function () {
    task.taskChecked = done.checked;
    saveTasks();
  });
  li.insertAdjacentElement('afterbegin', done);
}
function loadTasks() {
  ul.innerHTML = '';
  tasks.forEach(function (el) {
    createList(el);
  });
  $(document).ready(function () {
    function createModal(value) {
      var $textValue = value.target.textContent;
      var $modalBackground = $("<div></div>").addClass('w-100 h-100 bg-black opacity-75 position-fixed z-1 test');
      $("section").append($modalBackground);
      var $modal = $("<div></div>").addClass('position-absolute top-50 start-50 translate-middle border border-black rounded-3 p-3 w-25 z-2 bg-light');
      $modalBackground.append($modal);
      var $div1 = $("<div></div>").addClass('top d-flex justify-content-between align-items-center');
      $modal.append($div1);
      var $modalTitle = $("<h3></h3>").text('Ваше завдання');
      $div1.append($modalTitle);
      var $btnCancel = $("<span></span>").addClass('cursor-pointer fs-4').text("X");
      $div1.append($btnCancel);
      var $div2 = $("<div></div>").addClass('middle pt-3 pb-3');
      ;
      $modal.append($div2);
      var $modalTask = $("<p></p>").text($textValue);
      $div2.append($modalTask);
      var $div3 = $("<div></div>").addClass('bottom d-flex justify-content-end');
      $modal.append($div3);
      var $button = $("<button></button>").addClass('btn btn-secondary').text("Закрити");
      $div3.append($button);
      $(".cursor-pointer").click(function () {
        deletedModal();
      });
      $("button").click(function () {
        deletedModal();
      });
    }
    function deletedModal() {
      $(".test").remove();
    }
    $('.task-value').click(function (e) {
      createModal(e);
    });
  });
}
div.addEventListener('click', function (e) {
  if (e.target === btnAdd) {
    var task = {
      text: btnText.value,
      taskChecked: false
    };
    tasks.push(task);
    saveTasks(task);
    loadTasks();
    btnText.value = '';
  }
});
loadTasks();