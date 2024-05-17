const btnSubmit = document.getElementById("btn-submit");
const userName = document.forms.action.elements.userName;
const userMessage = document.forms.action.elements.userMessage;
const userPhone = document.forms.action.elements.userPhone;
const userEmail = document.forms.action.elements.userEmail;
const nameError = document.getElementById('nameError');
const messageError = document.getElementById('messageError') 
const phoneError = document.getElementById('phoneError') 
const emailError = document.getElementById('emailError') 
const validationName = /[а-яА-Я]|[a-zA-Z]+$/;
const validationMessage = /.{5}/;
const validationPhone = /^\+380\d{9}/;
const validationEmail = /\w+\@\w+\.\w+/;

function chec(valid, el, erorrs) {
    if(valid.test(el.value)) {
        erorrs.style.display = 'none';
        el.style.border = '1px solid white'
        return true
    } else {
        erorrs.style.display = 'block';
        el.style.border = '1px solid red'
        return false
    }
}

document.forms.action.addEventListener('submit', (e) => {

    e.preventDefault();

    const validName = chec(validationName, userName, nameError)
    const validMessage = chec(validationMessage, userMessage, messageError)
    const validPhone = chec(validationPhone, userPhone, phoneError)
    const valiEmail = chec(validationEmail, userEmail, emailError)

    if(validName && validMessage && validPhone && valiEmail) {
        const result = {}

        Array.from(e.target.elements).forEach( el => {
            result[el.name] = el.value
        })
    
        console.log(result)
    }
})

