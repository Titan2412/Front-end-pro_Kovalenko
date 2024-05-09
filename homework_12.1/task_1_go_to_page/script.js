const btnLink = document.getElementById('link');
const btnGo = document.getElementById('go');
let link = '';

btnLink.addEventListener('click', function() {
    let userSite = prompt("Введіть посилання на сайт");
    if(userSite === undefined || userSite === null || userSite.trim() === '') {
        alert("Введіть посилання на сайт")
    } else {
        btnGo.addEventListener('click', function() {
            window.location = userSite
        })
    }
})

