console.log("Hello, World!");

const imageUrls = [
    './images/avatar1.png',
    './images/avatar2.png',
    './images/avatar3.png'
];

const image = document.querySelector('#avatar');
let currentIndex = 0;

function changeImage() {
    image.style.opacity = '0';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        image.src = imageUrls[currentIndex];
        image.style.opacity = '1';
    }, 1000);
}

image.style.transition = 'opacity 0.5s ease-in-out';
setInterval(changeImage, 5000);
