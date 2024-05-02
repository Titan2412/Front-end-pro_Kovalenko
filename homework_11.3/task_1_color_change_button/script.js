const button = document.querySelector('button');
const text = document.getElementById('text');

button.onclick = () => {
    if(text.style.color === 'black' || text.style.color === '') {
        text.style.color = 'red'
    } else {
        text.style.color = 'black'
    }
}