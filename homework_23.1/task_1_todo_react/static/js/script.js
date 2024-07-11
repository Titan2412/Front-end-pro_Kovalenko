const todoList = document.getElementById('todo-list');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTodo() {
    localStorage.setItem("task", JSON.stringify(tasks));
}

document.getElementById('todo').addEventListener('submit', (event) => {
    event.preventDefault();
    const todoTask = document.querySelector("[data-btnText]");
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: todoTask.value, completed: false })
    })
    .then(response => response.json())
    .then(data => {
        createTask(data);
        todoTask.value = '';
    })
})

function createTask(data) {
    const li = document.createElement('li');
    li.textContent = data.title;
    li.dataset.id = data._id

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Видалити';
    btnDelete.addEventListener('click', () => {
        fetch(`http://localhost:3000/todos/${data._id}`, {
            method: 'DELETE'
        })
        .then(() => {
            li.remove();
        })
    })

    const compliteTask = document.createElement('input');
    compliteTask.type = 'checkbox';
    compliteTask.checked = data.taskChecked;
    compliteTask.addEventListener('change', () => {
        fetch(`http://localhost:3000/todos/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({completed: !data.completed})
        })

    });

    if(data.completed === true) {
        compliteTask.checked = true
    } 


    li.appendChild(compliteTask)
    li.appendChild(btnDelete);
    todoList.appendChild(li)
    li.insertAdjacentElement('afterbegin', compliteTask);
}

fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            createTask(el)
            saveTodo()
        });
    })
