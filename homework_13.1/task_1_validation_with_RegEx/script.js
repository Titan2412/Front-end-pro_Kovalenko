const btnSubmit = document.getElementById("btn-submit");
const userName = document.getElementById("userName");
const userMessage = document.getElementById("userMessage");
const userPhone = document.getElementById("userPhone");
const userEmail = document.getElementById("userEmail");
const nameError = document.getElementById('nameError') 
const messageError = document.getElementById('messageError') 
const phoneError = document.getElementById('phoneError') 
const emailError = document.getElementById('emailError') 
const validationName = /[а-яА-Я]|[a-zA-Z]+$/;
const validationMessage = /.{5}/;
const validationPhone = /^\+380\d{9}/;
const validationEmail = /\w+\@\w+\.\w+/;

document.forms.action.addEventListener('submit', (e) => {
    const result = {}

    e.preventDefault();

    if(validationName.test(userName.value)) {
        nameError.style.display = 'none';
        userName.style.border = '1px solid white'
    } else {
        nameError.style.display = 'block';
        userName.style.border = '1px solid red'
        return false
    }

    if(validationMessage.test(userMessage.value)) {
        messageError.style.display = 'none';
        userMessage.style.border = '1px solid white'
    } else {
        messageError.style.display = 'block';
        userMessage.style.border = '1px solid red'
        return false
    }

    if(validationPhone.test(userPhone.value)) {
        phoneError.style.display = 'none';
        userPhone.style.border = '1px solid white'
    } else {
        phoneError.style.display = 'block';
        userPhone.style.border = '1px solid red'
        return false
    }

    if(validationEmail.test(userEmail.value)) {
        emailError.style.display = 'none';
        userEmail.style.border = '1px solid white'
    } else {
        emailError.style.display = 'block';
        userEmail.style.border = '1px solid red'
        return false
    }

    Array.from(e.target.elements).forEach( el => {
        result[el.name] = el.value
    })

    console.log(result)
})

