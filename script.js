const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const carouselPrev = carousel.querySelector('.carousel-prev');
const carouselNext = carousel.querySelector('.carousel-next');

let currentIndex = 0;

carouselPrev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

carouselNext.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
}

updateCarousel();

// Add infinite scrolling
setInterval(() => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  updateCarousel();
}, 3000); // change the time to adjust the scrolling speed