const item = document.querySelectorAll('.container');
const dotsWrap = document.querySelector('.slider');
const next = document.querySelector('.btn-next');
const prey = document.querySelector('.btn-prey');
let  count = 0;
let i = 0;

while (i < item.length) {
    let btn = document.createElement('button');
    btn.classList.add('btn-dots');
    dotsWrap.appendChild(btn)

    if (i === item.length) {
      break;
    }
    i = i + 1;
  }
  const first = dotsWrap.firstElementChild
  first.classList.add('active')    

function slide(index) {
    const btnDots = document.querySelectorAll('.btn-dots');
    const items = document.querySelectorAll('.container');
    items.forEach((e, i) => {
        if(index === i) {
            items[i].classList.add('active');
            btnDots[i].classList.add('active');
            index + 1 === items.length ? next.style.display = 'none': next.style.display = 'block'
            index === 0 ? prey.style.display = 'none': prey.style.display = 'block'
        } else {
            items[i].classList.remove("active");
            btnDots[i].classList.remove("active");
        }
    })
}

document.querySelector('.slider').addEventListener('click', (e) => {
    const targetbtn = Array.from(e.target.parentElement.children).indexOf(e.target)
    console.log(targetbtn)
    slide(targetbtn)
})
next.addEventListener('click', () => {
    count = (count + 1) % item.length
    slide(count)
})
prey.addEventListener('click', () => {
    count = (count - 1) % item.length;
    slide(count)
})