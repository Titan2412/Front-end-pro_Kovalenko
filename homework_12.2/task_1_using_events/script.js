const menu = document.querySelector('[data-btn-list]')
const btn1 = document.querySelector('[data-action-btn1]')
const btn2 = document.querySelector("[data-action-btn2]")
const btn3 = document.querySelector("[data-action-btn3]")

menu.addEventListener('click', function(e) {
    if(e.target === btn1) {
       alert("Ви натиснули: Кнопка 1")
    } else if(e.target === btn2) {
        alert("Ви натиснули: Кнопка 2")
    } else if (e.target === btn3) {
        alert('Ви натиснули: Кнопка 3')
    }
})