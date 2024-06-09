const div = document.querySelector('[data-action]')
const btnAdd = document.querySelector("[data-btnAdd]")
const btnText = document.querySelector("[data-btnText]")
const ul = document.querySelector("[data-task]")
const section = document.querySelector('section');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createList(task) {
    let li = document.createElement('li');
    ul.appendChild(li);

    const parag = document.createElement('p');
    li.appendChild(parag)
    parag.innerText = task.text;
    parag.classList.add('task-value')
    li.classList.add('task')

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
    $(document).ready(function() {
        function createModal(value) {
            let $textValue = value.target.textContent;
    
            let $modalBackground = $("<div></div>").addClass('w-100 h-100 bg-black opacity-75 position-fixed z-1 test');
            $("section").append($modalBackground);
    
            let $modal = $("<div></div>").addClass('position-absolute top-50 start-50 translate-middle border border-black rounded-3 p-3 w-25 z-2 bg-light');
            $modalBackground.append($modal);

            let $div1 = $("<div></div>").addClass('top d-flex justify-content-between align-items-center');
            $modal.append($div1);
        
            let $modalTitle = $("<h3></h3>").text('Ваше завдання');
            $div1.append($modalTitle);
        
            let $btnCancel = $("<span></span>").addClass('cursor-pointer fs-4').text("X");
            $div1.append($btnCancel);
    
            let $div2 = $("<div></div>").addClass('middle pt-3 pb-3');;
            $modal.append($div2);
        
            let $modalTask = $("<p></p>").text($textValue);
            $div2.append($modalTask);
        
            let $div3 = $("<div></div>").addClass('bottom d-flex justify-content-end');
            $modal.append($div3);
        
            let $button = $("<button></button>").addClass('btn btn-secondary').text("Закрити");
            $div3.append($button);
        
            $(".cursor-pointer").click(() => {
                deletedModal()
            })
            $("button").click(() => {
                deletedModal()
            })
        }
    
        function deletedModal() {
            $(".test").remove()
        }
        
        $('.task-value').click(function(e) {
            createModal(e)
        })
    })
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