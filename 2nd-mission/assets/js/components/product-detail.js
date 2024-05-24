import { badminton } from "../data/product-detail-data.js"

const dataSources = {
    'badminton-info': badminton,
}

const ProductInfo = (info) => {

    return `
    ${info.map((dataInfo) => `
    <div class="box-border md:flex justify-between gap-3 product-card mb-[20rem] max-md:mb-[5rem]">
    <!-- image container left-side-->
        <div id="imageClick" class="w-[600px] max-w-[90%] mx-auto relative block cursor-zoom-in ">
            <img class="max-w-full  top-[50%] " src="${dataInfo.img}" alt="Astrox88 Raq">
        </div>

        <!-- start product detail right-side-->
        <div class=" md:max-w-[360px] md:w-[40%]">
            <div class="mt-[32px] max-w-[642px]">
                <h1 class="uppercase text-[26px] md:text md:text-[36px] md:text-start text-center font-Oswald">
                    <span class="tracking-[5px] md:tracking-[7px]">${dataInfo.title}</span>
                </h1>
            </div>
            <!-- specs button -->
            <button class="specsBtn flex justify-between w-full relative mt-[60px] pt-[13px] pb-[15px]">
                <span class="font-semibold uppercase text-[14px]">Specs</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="minusIcon w-4 h-6 absolute right-3 top-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="plusIcon w-4 h-6 hidden absolute right-3 top-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                
            </button>                       
            <!-- start product detail card -->
            <div class="detailCard text-[12px] font-sans bg-white border-[1px] text-secondary-400 overflow-hidden mb-6 max-h-[850px] duration-500">
                <table class="table-container text-[12px] w-auto">
                    <tbody>
                        ${dataInfo.productSpecs.map((spec)=>`
                            <tr>
                                <td class="pt-[10px] px-[15px] pb-[10px]">${spec.specCaption}</td>
                                <td class="pt-[10px] px-[20px] pb-[10px]">${spec.specInfo}</td>
                            </tr>
                        `).join('')}
                    </tbody>  
                </table>
            </div>
            <!-- end product detail card -->
            <!-- stringing detail button -->
            <button id="stringBtn" class="flex gap-3 text-[14px] font-sans font-bold text-secondary-400 my-[15px] cursor-pointe">
                <img class="w-[17px] h-6" src="../assets/images/icon/stringing-badminton-icon.svg" alt="">
                <span>See Stringing Instructions</span>
            </button>
            <div class="font-sans font-semibold text-[14px] flex md:hidden text-secondary-400">
                <a class="add-compare relative w-[11%] min-w-[130px] mx-[25px] text-nowrap">
                <span class="text-[#595959] text-[15px] font-bold relative capitalize font-['Lato']">Add To Compare</span>
            </a>
            </div>
            <!-- start icon container -->               
            <div class="flex justify-center md:justify-start gap-2 max-w-[800px] mx-auto">
                <a href="https://www.facebook.com/yonexbadminton">
                    <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-facebook.svg" alt="">
                </a>
                <a href="https://twitter.com/yonex_badminton?">
                    <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-twitter.svg" alt="">
                </a>
                <a href="https://www.yonex.com/badminton/racquets/3ax88s-g">
                    <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-link.svg" alt="">
                </a>
            </div> 
            <!-- end icon container -->                       
        </div>
        <!-- end product detail right-side -->
    </div>
    
    `).join("")}
`
}

// section component
class ProductDetail extends HTMLElement{
    connectedCallback(){
        const dataAtt = this.getAttribute('data-source')
        const dataSourceKey = dataSources[dataAtt]
        this.innerHTML = ProductInfo(dataSourceKey)
    }
}

customElements.define('product-detail-section',ProductDetail)

// show card and close card function
const specsBtn = document.querySelector('.specsBtn')
const detailCard = document.querySelector('.detailCard')
const plusIcon = document.querySelector('.plusIcon')
const minusIcon = document.querySelector('.minusIcon')
const tableContainer = document.querySelector('.table-container')

function showCard(){
  detailCard.classList.toggle('max-h-[0px]')
  // detailCard.classList.toggle('overflow-hidden')
  tableContainer.classList.toggle('hidden')
  plusIcon.classList.toggle('hidden')

}
specsBtn.addEventListener('click', showCard)

// show modal and close modal function
const stringBtn = document.querySelector('#stringBtn')
const modal = document.querySelector('#modal')
const overlay =  document.querySelector('.overlay')
const closeBtn = document.querySelector('#xBtn')
modal.classList.add('hidden')
function showModal(){
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}

stringBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', showModal)
overlay.addEventListener('click', showModal)

  
// img frame 
const imageClick = document.querySelector('#imageClick')
const imgZoom = document.querySelector('#imgZoom')
const xClose = document.querySelector('#x-close')
const navbar = document.getElementById('navbar')

// show product image
imageClick.addEventListener('click', () => {
    imgZoom.classList.remove('hidden')
    navbar.classList.add('hidden')
})
// close product image
xClose.addEventListener('click', () => {
    imgZoom.classList.add('hidden')
    navbar.classList.remove('hidden')
})

// Zoom into product image section
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
      for (let i = 0; i < maxSlide; i++) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      }
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