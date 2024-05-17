const item = document.querySelectorAll('.container');
const dotsWrap = document.querySelector('.slider')
const itemLenght = item.length;
let  count = 0;
let i = 0;

while (i < itemLenght) {
    let btn = document.createElement('button');
    btn.classList.add('btn-dots');
    dotsWrap.appendChild(btn)

    if (i === itemLenght) {
      break;
    }
    i = i + 1;
  }
  const first = dotsWrap.firstElementChild
  first.classList.add('active')    

function slide(index) {
    const btnDots = document.querySelectorAll('.btn-dots');
    item.forEach((e, i) => {
        if(index === i) {
            item[i].classList.add('active');
            btnDots[i].classList.add('active');
        } else {
            item[i].classList.remove("active");
            btnDots[i].classList.remove("active");
        }
    })
}

document.querySelector('.slider').addEventListener('click', (e) => {
    const targetbtn = Array.from(e.target.parentElement.children).indexOf(e.target)
    slide(targetbtn)
})
document.querySelector('.btn-next').addEventListener('click', () => {
    count = (count + 1) % itemLenght
    slide(count)
})
document.querySelector('.btn-prey').addEventListener('click', () => {
    count = (count - 1 + 1) % itemLenht;
    slide(count)
})
