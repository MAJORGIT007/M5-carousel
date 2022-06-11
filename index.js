const slides = document.getElementsByClassName('carousel-item');
const slideNo = document.getElementById("slideNumber");
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
        
    }
    for (let sNo of posiBtn) {
        sNo.classList.remove("positionCurrent");
        sNo.classList.remove("positionPrev");
    }
}

const posiBtn = document.getElementsByClassName("positionBtn");
renderpos();
function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
    posiBtn[slidePosition].classList.add("positionCurrent");
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
    posiBtn[slidePosition].classList.add("positionPrev");
}

setInterval(moveToNextSlide, 3000);

function renderpos() {
    for (let i = 0; i < totalSlides; i++) {
        slideNo.innerHTML += `<button class="positionBtn" id="${i}"></button>`
    }
    posiBtn[0].classList.add("positionCurrent");
}
