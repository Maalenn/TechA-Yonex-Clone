// start technology slider

const sliderData = [
  {
    image: "../../assets/images/running-page/T_Sh_Power_Cushion_Plus.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "POWER CUSHION +",
    description: [
      "A raw egg can be dropped from 12 meters above the POWER CUSHION+ mat, rebounding to a height of 6 meters without breaking.",
      "POWER CUSHION ™ is a trademark of Yonex Co., Ltd.",
      "*Research by the Japan Vehicle Inspection Association & Boken Quality Evaluation (based on JIS standards) in comparison to conventional cushioning material (EVA).**Tested by YONEX",
    ],
  },

  {
    image: "../../assets/images/running-page/R_3D_Power_Graphite_.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "POWER CUSHION +",
    description: [
      "A raw egg can be dropped from 12 meters above the POWER CUSHION+ mat, rebounding to a height of 6 meters without breaking.",
      "POWER CUSHION ™ is a trademark of Yonex Co., Ltd.",
      "*Research by the Japan Vehicle Inspection Association & Boken Quality Evaluation (based on JIS standards) in comparison to conventional cushioning material (EVA).**Tested by YONEX",
    ],
  },

  {
    image: "../../assets/images/running-page/tec_saferun100x_1.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "POWER CUSHION +",
    description: [
      "A raw egg can be dropped from 12 meters above the POWER CUSHION+ mat, rebounding to a height of 6 meters without breaking.",
      "POWER CUSHION ™ is a trademark of Yonex Co., Ltd.",
      "*Research by the Japan Vehicle Inspection Association & Boken Quality Evaluation (based on JIS standards) in comparison to conventional cushioning material (EVA).**Tested by YONEX",
    ],
  },

  {
    image: "../../assets/images/running-page/tec_saferun100x_2.webp", // Replace with actual image path
    alt: "POWER CUSHION +",
    logo: "path/to/image/running-page/logo_b.png", // Replace with actual image path
    logoAlt: "logo_b",
    title: "POWER CUSHION +",
    description: [
      "A raw egg can be dropped from 12 meters above the POWER CUSHION+ mat, rebounding to a height of 6 meters without breaking.",
      "POWER CUSHION ™ is a trademark of Yonex Co., Ltd.",
      "*Research by the Japan Vehicle Inspection Association & Boken Quality Evaluation (based on JIS standards) in comparison to conventional cushioning material (EVA).**Tested by YONEX",
    ],
  },
  // Add more slide objects here following the same structure
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

  console.log(`slide length ${slides.length}`);

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
    technologyRightDescription.innerHTML = ""; // Clear previous content

    data.description.forEach((desc) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = desc;
      paragraph.classList.add("mb-[1.1rem]");
      technologyRightDescription.appendChild(paragraph);
    });

    currentSlide.textContent = curSlide + 1; // Update current slide number
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
  };

  const init = function () {
    createDots();
    activateDot(0);
    updateSlideInfo();
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
}
slider();

// end technology slider
