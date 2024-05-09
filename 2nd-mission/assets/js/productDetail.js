// show card and close card function
const specsBtn = document.querySelector('.specsBtn')
const detailCard = document.querySelector('.detailCard')
const plusIcon = document.querySelector('.plusIcon')
const minusIcon = document.querySelector('.minusIcon')
const tableContainer = document.querySelector('.table-container')
function showCard(){
  detailCard.classList.toggle('h-[0px]')
  detailCard.classList.toggle('overflow-hidden')
  tableContainer.classList.toggle('hidden')
  plusIcon.classList.toggle('hidden')
  
}
specsBtn.addEventListener('click', showCard)

// show modal and close modal
const stringBtn = document.querySelector('#stringBtn')
const modal = document.querySelector('#modal')
const overlay =  document.querySelector('.overlay')
const closeBtn = document.querySelector('#xBtn')
function showModal(){
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}
// function closeModal(){
//     console.log('close');
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// }
stringBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', showModal)
overlay.addEventListener('click', showModal)
// Esc key for exit modal
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
// img frame 
const imageClick = document.querySelector('#imageClick')
const imgZoom = document.querySelector('#imgZoom')
const xClose = document.querySelector('#xClose')
const navbar = document.getElementById('navbar')

function showImg() {
    imgZoom.classList.remove('hidden')
    navbar.classList.add('hidden')
}
function closeImg() {
    imgZoom.classList.add('hidden')
    navbar.classList.remove('hidden')
}
  
  
  
let currentZoom = 1; 
let minZoom = 1; 
let maxZoom = 2; 
let stepSize = 0.1;
let container = document.querySelector('#image-container'); 

// Zoom image function
function zoomImage(direction) { 
    let newZoom = currentZoom + direction * stepSize; 

    // Limit the zoom level to the minimum and maximum values 
    if (newZoom < minZoom || newZoom > maxZoom) { 
        return; 
    } 

    currentZoom = newZoom; 
    console.log(currentZoom);

    // Update the CSS transform of the image to scale it 
    let image = document.querySelector('#image-container img'); 
    image.style.transform = 'scale(' + currentZoom + ')'; 
}

container.addEventListener('wheel', function (event) { 
    // Zoom in or out based on the scroll direction 
    let direction = event.deltaY > 0 ? -1 : 1; 
    // console.log(direction)
    zoomImage(direction); 
});


// Sticky navigation
const nav = document.querySelector(".sticky-nav-container");
const header = document.querySelector(".product-card");
// const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("nav-sticky");
  else nav.classList.remove("nav-sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Page navigation
document
  .querySelector(".sticky-nav-elements")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("sticky-nav-element")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });

      const clickedNavItem = document.querySelector(id);
      clickedNavItem.classList.add("active");
    }
  });

// start technology slider
const sliderData = [
  {
    image: "../assets/images/productPage/tech-01.png", // Replace with actual image path
    alt: "Box frame",
    logo: "../assets/images/productPage/tech-01.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "AERO+BOX Frame",
    description: [
      "A combination of faster swing speeds and a solid feel.",
    ],
  },

  {
    image: "../assets/images/productPage/tech-02.png", // Replace with actual image path
    alt: "ISOMETRIC",
    logo: "../assets/images/productPage/isometric.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "ISOMETRIC",
    imgText : "../assets/images/productPage/isometric.png",
    description: [
        "ISOMETRICTM technology continues to help the world’s greatest players achieve global success.",
        "",
        "Developed over 30 years ago, the ISOMETRICTM design increases the sweet spot by 7%*. Compared to a conventional round frame, a square-shaped ISOMETRICTM racquet generates a larger sweet spot by optimizing the intersection of the main and cross strings.",
        "",
        "ISOMETRICTM delivers greater control without sacrificing power. ISOMETRICTM is a Trademark of Yonex CO., LTD.",
        "*Tested by Yonex"
      ]
  },

  {
    image: "../assets/images/productPage/logo_b.png", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "ROTATIONAL GENERATOR SYSTEM + 2G-NANOMESH NEO",
    description: [
      "By applying the counterbalance theory, weight is carefully distributed throughout the grip end, frame top and joint, enabling smooth transition between powerful shots for rapid, successive attacks.",
    'The innovative graphite, "2G-NANOMESH NEO" used in the shaft, characterized by its quick flex and snapback, maximizes shot power and advances the performance of the Rotational Generator System.',
    ],
  },

  {
    image: "../assets/images/productPage/logo_b.png", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "POWER-ASSIST BUMPER",
    description: [
      "Boosted power with a tungsten-infused weighted bumper,",
      "adding 55%* more weight than conventional grommets.",
      "The POWER-ASSIST BUMPER enhances the Rotational",
      "Generator System, quickly transferring more weight to the shuttle.",
      "*Measured by Yonex"
    ],
  },

  {
    image: "../assets/images/productPage/tech-05.png", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "Super Slim Shaft",
    imgText : "../assets/images/productPage/slim-shaft.png",
    description: [
      "Reduced Air Resistance",
      "Designed to slice through the air, generating speedy power.",
    ],
  },
  {
    image: "../assets/images/productPage/logo_b.png", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "Energy Boost CAP PLUS",
    description: [
      "Uniquely shaped cap which maximizes shaft performance. The front allows the shaft to flex, while the sides archshaped curve stabilizes the racquet face by preventing the shaft from twisting.",
    ],
  },
];

function slider() {
    // const slide = document.querySelector(".slide");
    const slides = document.querySelectorAll(".slide");
    const technologyMiddleImg = document.getElementById("technology-middle-img");
    const currentSlide = document.getElementById("current-slide");
    const slideCount = document
      .getElementById("slide-count")
      .querySelector("span");
    const technologyRightTitle = document.getElementById(
      "technology-right-title"
    );
    const imgText = document.getElementById('img-text') 
    const technologyRightDescription = document.getElementById(
      "technology-right-description"
    );
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");
  
    let curSlide = 0;
    const maxSlide = sliderData.length;
    // console.log(maxSlide)
  
    // console.log(`slide length ${slides.length}`);
  
    const createDots = function () {
      slides.forEach(function (_, i) {
        // console.log(i)
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };
  
    const updateSlideInfo = () => {
      const data = sliderData[curSlide];
      console.log(data);
      technologyMiddleImg.setAttribute("src", data.image);
      technologyMiddleImg.setAttribute("alt", data.alt);
      technologyRightTitle.textContent = data.title;
      imgText.setAttribute('src',data.imgText); 
      technologyRightDescription.innerHTML = ""; // Clear previous content
  
      data.description.forEach((desc) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = desc;
        paragraph.classList.add("mb-[1.1rem]");
        technologyRightDescription.appendChild(paragraph);
      });
  
      currentSlide.textContent = "0" + (curSlide + 1);
      slideCount.textContent = maxSlide;
    };
  
    const nextSlide = () => {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      // curSlide = (curSlide + 1) % maxSlide;
      updateSlideInfo();
      activateDot(curSlide); // Update total slide count
    };
  
    const prevSlide = () => {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      // curSlide = (curSlide - 1 + maxSlide) % maxSlide;
      updateSlideInfo();
      activateDot(curSlide);
    };
  
    const init = function () {
      updateSlideInfo();
      createDots(); // Create dots after slides are loaded
      activateDot(0);
    };
    init();
  
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
  }
  slider();
// end technology slider