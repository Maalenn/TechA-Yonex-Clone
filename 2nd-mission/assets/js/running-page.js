// start product slider
const productSlider = document.getElementById("productSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const productImgSlide = productSlider.querySelectorAll(".product-img-slide");
const dots = document.querySelectorAll(".dot-status");
let currentIndex = 0;

function showImage(index) {
  productImgSlide.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function activeDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot-active");
      // document.querySelector('.dot-nav').style.backgroundColor = "#000";
    } else {
      dot.classList.remove("dot-active");
    }
  });
}

// Initial display
showImage(currentIndex);
activeDot(currentIndex);

// Event listeners for next and previous buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 2) % 2;
  showImage(currentIndex);
  activeDot(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 2;
  showImage(currentIndex);
  activeDot(currentIndex);
});

// Event listeners for mouse enter and mouse leave on images
productImgSlide.forEach((slide, i) => {
  slide.addEventListener("mouseenter", () => {
    console.log(currentIndex);
    if (i === 0) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else if (i === 1) {
      nextBtn.classList.add("hidden");
      prevBtn.classList.remove("hidden");
    }
  });

  slide.addEventListener("mouseleave", () => {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
  });
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showImage(currentIndex);
    activeDot(currentIndex);
  });
});
// end product slider

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
      console.log("clicked nav items");
      clickedNavItem.classList.add("active");
    }
  });

// start technology slider
const sliderData = [
  {
    image: "../../assets/images/running-page/T_Sh_Power_Cushion_Plus.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "POWER CUSHION +",
    description: [
      "A raw egg can be dropped from 12 meters above the POWER CUSHION+ mat, rebounding to a height of 6 meters without breaking.**",
      "<br>POWER CUSHION ™ is a trademark of Yonex Co., Ltd.",
      "<br><span class=text-[10px]>*Research by the Japan Vehicle Inspection Association & Boken Quality Evaluation (based on JIS standards) in comparison to conventional cushioning material (EVA).**Tested by YONEX</span>",
    ],
  },

  {
    image: "../../assets/images/running-page/R_3D_Power_Graphite_.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "3D Power Graphite",
    description: [
      "Incorporated from the heel to midsole to stabilize landing and reduce strain on the muscles.",
    ],
  },

  {
    image: "../../assets/images/running-page/tec_saferun100x_1.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "msLITE X",
    description: [
      "The lightest midsole material in Yonex history features a thick bottom with added shock absorption.",
    ],
  },

  {
    image: "../../assets/images/running-page/tec_saferun100x_2.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "Durable Skin Light",
    description: [
      "Great Fit Leaves you Light on your Feet",
      "Combining rubber-like flexibility with the stiffness of hard plastic, the polyurethane-based Durable Skin Light lets you play light on your feet while maintaining a robust fit.",
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
    technologyMiddleImg.setAttribute("src", data.image);
    technologyMiddleImg.setAttribute("alt", data.alt);
    technologyRightTitle.textContent = data.title;
    technologyRightDescription.innerHTML = data.description;


    // data.description.forEach((desc) => {
    //   technologyRightDescription.innerHTML = desc + "<br>";
    // })

    // data.description.forEach((desc) => {
    //   const paragraph = document.createElement("p");
    //   paragraph.textContent = desc;
    //   paragraph.classList.add("mb-[1.1rem]");
    //   technologyRightDescription.appendChild(paragraph);
    // });

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


// show card and close card function
const specsBtn = document.querySelector('.specsBtn')
const detailCard = document.querySelector('.detailCard')
const plusIcon = document.querySelector('.plusIcon')
const minusIcon = document.querySelector('.minusIcon')

console.log(specsBtn)
function showCard(){detailCard
    if (detailCard.classList.contains('hidden')){
        detailCard.classList.remove('hidden')
        plusIcon.classList.add('hidden')
    }
    else{
        detailCard.classList.add('hidden')
        plusIcon.classList.remove('hidden')
    }
    
}


specsBtn.addEventListener('click', showCard)
// show modal and close modal
const stringBtn = document.querySelector('#stringBtn')
const modal = document.querySelector('#modal')
const overlay =  document.querySelector('.overlay')
const closeBtn = document.querySelector('#xBtn')


function showModal(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeModal(){
    console.log('close');
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
stringBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', 
closeModal)
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });