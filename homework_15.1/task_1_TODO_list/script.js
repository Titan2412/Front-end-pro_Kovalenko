const div = document.querySelector('[data-action]')
const btnAdd = document.querySelector("[data-btnAdd]")
const btnText = document.querySelector("[data-btnText]")
const ul = document.querySelector("[data-task]")

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createList(task) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = task.text;

    let button = document.createElement('button');
    li.appendChild(button);
    button.innerText = 'Видалити';
    button.setAttribute('id', 'btnDelete');

    button.addEventListener('click', function() {
        tasks = tasks.filter(e => e !== task);
        saveTasks();
        loadTasks();
    });

    let done = document.createElement('input');
    done.type = 'checkbox';
    done.checked = task.taskChecked;
    done.addEventListener('change', () => {
        task.taskChecked = done.checked;
        saveTasks();
    });

    li.insertAdjacentElement('afterbegin', done);
}

function loadTasks() {
    ul.innerHTML = '';
    tasks.forEach((el) => {
        createList(el)
    });
}

div.addEventListener('click', function(e) {
    if (e.target === btnAdd) {
        let task = {
            text: btnText.value,
            taskChecked: false
        };

        tasks.push(task);
        saveTasks(task);
        loadTasks();
        
        btnText.value = '';
    }
});

loadTasks()