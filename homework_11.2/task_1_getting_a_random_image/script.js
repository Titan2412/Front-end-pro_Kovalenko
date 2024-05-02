let images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
];

function randomImg() {
    const random = Math.floor(Math.random() * images.length)
    return images[random]
}

const img = document.getElementById('image');
img.src= `${randomImg()}`;
img.style.width = '500px';
img.style.height = "500px";
