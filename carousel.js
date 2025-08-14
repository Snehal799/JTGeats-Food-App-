const carouselInner = document.getElementById('carousel-inner');
const prevButton = document.querySelector('.carousel-button-prev-button');
const nextButton = document.querySelector('.carousel-button-next-button');

const scrollAmount = 328; 

if (typeof pizzas !== 'undefined' && typeof createPizzaCard !== 'undefined') {
  const popularPizzas = pizzas.filter(pizza => parseFloat(pizza.rating) >= 4.7);

  popularPizzas.forEach(pizza => {
    const cardHtml = createPizzaCard(pizza);
    carouselInner.innerHTML += cardHtml;
  });
} else {
  console.error("pizzas or createPizzaCard not found.");
}

let scrollInterval;
function startAutoScroll() {
  scrollInterval = setInterval(() => {
    if (carouselInner.scrollLeft + carouselInner.clientWidth >= carouselInner.scrollWidth - 1) {
      carouselInner.scrollLeft = 0; 
    } else {
      carouselInner.scrollLeft += scrollAmount;
    }
  }, 2000);
}

function scrollCarousel(direction) {
  if (direction === 'next') {
    if (carouselInner.scrollLeft + carouselInner.clientWidth >= carouselInner.scrollWidth - 1) {
      carouselInner.scrollLeft = 0;
    } else {
      carouselInner.scrollLeft += scrollAmount;
    }
  } else if (direction === 'prev') {
    if (carouselInner.scrollLeft <= 0) {
      carouselInner.scrollLeft = carouselInner.scrollWidth;
    } else {
      carouselInner.scrollLeft -= scrollAmount;
    }
  }

  clearInterval(scrollInterval);
  startAutoScroll(); 
}

nextButton.addEventListener('click', () => scrollCarousel('next'));
prevButton.addEventListener('click', () => scrollCarousel('prev'));

window.onload = startAutoScroll;
