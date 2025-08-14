    const pizzas = [
      {
        title: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        time: "50-79",
        discount: "50%",
        image: "assets/3f4bd9f6087c8944b1b24580544cd76fcfd54b5a.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹250",
        rating: "4.5",
        time: "35-45",
        discount: "25%",
        image: "https://www.rapizza.ca/img/bombaycauliflower.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹220",
        rating: "4.2",
        time: "40-50",
        discount: "10%",
        image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/ultimate-tandoori-veggie.90a986d9df5e6d7d81930376e2dce251.1.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹180",
        rating: "4.8",
        time: "30-40",
        discount: "30%",
        image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/cheesy-spicy-delight-pan-personal.3369663d3fab59191a4ac7e568070a1d.1.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹280",
        rating: "4.8",
        time: "45-60",
        discount: "15%",
        image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-feast.2f4705ef8d514d2703bb1bd034ba903c.1.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹210",
        rating: "4.3",
        time: "35-45",
        discount: "20%",
        image: "assets/6aeb35a8959b9b1b355181560f5c02c5f770653d.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹300",
        rating: "4.9",
        time: "60-80",
        discount: "40%",
        image: "assets/6aeb35a8959b9b1b355181560f5c02c5f770653d.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹240",
        rating: "4.4",
        time: "40-50",
        discount: "25%",
        image: "https://us2guntur.com/images//10024img/TripleChick_B_300824.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹290",
        rating: "4.8",
        time: "55-70",
        discount: "10%",
        image: "https://us2guntur.com/images//10024img/chg5_B_020924.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹270",
        rating: "4.8",
        time: "45-60",
        discount: "20%",
        image: "https://door2doordeliveries.com/wp-content/uploads/2023/09/5954bcb006b10dbfd0bc160f6370faf3-256.jpeg"
      },
      {
        title: "Home made pizza",
        price: "₹230",
        rating: "4.1",
        time: "35-45",
        discount: "15%",
        image: "https://us2guntur.com/images//10024img/ChikSausage_B_300824.jpg"
      },
      {
        title: "Home made pizza",
        price: "₹200",
        rating: "4.6",
        time: "30-40",
        discount: "30%",
        image: "https://homemadepizzaschool.com/wp-content/uploads/2023/08/homemade-pizza-school_how-to-make-indian-pizza_freshly-made-indian-pizza.jpg"
      }
    ];

function createPizzaCard(pizza) {
  return `
    <div class="card">
      <!-- Image section with the discount tag -->
      <div class="card-image-container">
        <img src="${pizza.image}" alt="${pizza.title}" class="card-image" />
        <div class="discount">${pizza.discount}</div>
      </div>

      <!-- Card content section -->
      <div class="card-content">
        <div class="card-info">
          <!-- Title and Price section -->
          <div class="card-header">
            <div class="title">${pizza.title}</div>
            <div class="price">${pizza.price}</div>
          </div>

          <!-- Rating, Time, and Add button section -->
          <div class="card-footer">
            <div class="badges">
              <div class="badge1">
                <div class="rating-star" style="width: 16; height: 16">★</div> 
                <div class="rating-number">${pizza.rating}</div>
              </div>
                <div class="badge2">
                 <div class="time-text-wrapper">
                  <span class="time-number">50-79</span>
                  <span class="time-unit">min</span>
                 </div>
               </div>
            </div>
               <button class="add-btn">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="add-icon">
                 <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                 </svg>
               </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
    const cardContainer = document.getElementById('card-container');

    pizzas.forEach(pizza => {
      const cardHtml = createPizzaCard(pizza);
      cardContainer.innerHTML += cardHtml;
    });

document.addEventListener("DOMContentLoaded", () => {
  const requestDishBtn = document.getElementById('request-dish-btn');
  const requestDishModal = document.getElementById('request-dish-modal');
  const cancelBtn = document.getElementById('cancel-btn');
  const submitBtn = document.getElementById('submit-btn');
  const body = document.body;

  if (!requestDishBtn) return; // prevent errors if button isn't there

  requestDishBtn.addEventListener('click', () => {
    requestDishModal.classList.add('open');
    body.classList.add('no-scroll');
  });

  cancelBtn.addEventListener('click', () => {
    requestDishModal.classList.remove('open');
    body.classList.remove('no-scroll');
  });

  submitBtn.addEventListener('click', () => {
    requestDishModal.classList.remove('open');
    body.classList.remove('no-scroll');
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("service-video");
  const button = document.querySelector(".service-play-button");
  const iconWrapper = document.querySelector(".play-icon-wrapper");

  const playSVG = `
    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
    </svg>`;

  const pauseSVG = `
    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
    </svg>`;

  video.pause();
  iconWrapper.innerHTML = playSVG;

  const hideButton = () => button.classList.add('hidden');
  const showButton = () => button.classList.remove('hidden');

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    if (video.paused) {
      video.play();
      iconWrapper.innerHTML = pauseSVG;
      hideButton();
    } else {
      video.pause();
      iconWrapper.innerHTML = playSVG;
      showButton();
    }
  });

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      iconWrapper.innerHTML = pauseSVG;
      hideButton();
    } else {
      video.pause();
      iconWrapper.innerHTML = playSVG;
      showButton();
    }
  });

  video.addEventListener("ended", () => {
    iconWrapper.innerHTML = playSVG;
    showButton();
  });

  const container = document.querySelector(".service-image-container");

  container.addEventListener("mouseenter", () => {
    if (!video.paused) showButton();
  });

  container.addEventListener("mouseleave", () => {
    if (!video.paused) hideButton();
  });
});







