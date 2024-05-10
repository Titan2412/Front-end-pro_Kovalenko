const div = document.querySelector('[data-action]')
const btnAdd = document.querySelector("[data-btnAdd]")
const btnText = document.querySelector("[data-btnText]")
const ul = document.querySelector("[data-task]")

div.addEventListener('click', function(e) {
    if(e.target === btnAdd) {
        createList()
    }
})

ul.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})

function createList() {
    let li = document.createElement("li")
    let button = document.createElement('button')

    ul.appendChild(li)
    li.innerText = btnText.value
    li.setAttribute('id', 'li')

    li.appendChild(button)
    button.innerText = "Видалити"
    button.setAttribute('id', 'btnDelete')

    btnText.value = ''
}