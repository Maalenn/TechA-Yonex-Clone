import { Men, Women, Unisex, AllRunning } from '../data/detail-running-data.js';
import { Tennis } from '../data/detail-tennis-data.js';
import { Badminton } from '../data/detail-badminton-data.js';
import { Golf } from '../data/detail-golf-data.js';
import { Snowboard } from '../data/detail-snowboard-data.js';

const dataSource = {
  "men-info": Men,
  "wowen-info": Women,
  "unisex-info": Unisex,
  'tennis-info': Tennis,
  'badminton-info': Badminton,
  'golf-info': Golf,
  'snowboard-info': Snowboard,
  'allRunning-info': AllRunning
};

const ShoesDetailContainer = (contents) => {
  return `
    ${contents.map(content => `
      <div class="box-border md:flex justify-between gap-3 mb-[20rem] max-md:mb-[5rem]">
        <!-- product image - small vertical -->
        <div class="absolute inline-block z-10 max-md:hidden" id="slider-vertical">
          ${content.verticalImgs ? content.verticalImgs.map(verticalImg => `
            <div class="vertical-product-img">
              <img class="top-[50%] h-auto w-full object-cover" src="${verticalImg.verticalImg1}" alt="product image">
            </div>
            <div class="vertical-product-img">
              <img src="${verticalImg.verticalImg2}" alt="product image">
            </div>
          `).join('') : ''}
        </div>

        <!-- Product image -->
        <div class="w-[600px] max-w-[90%] mx-auto relative">
          <div id="productSlider" class="overflow-x-auto flex">
            ${content.mainImg.map(mainImage => `
              <div class="product-img-slide relative z-[1]">
                <img id="imageClick" class="top-[50%] h-auto w-full object-cover max-md:scale-140 cursor-zoom-in" src="${mainImage}" alt="product image">
              </div>
            `).join('')}
          </div>
          <button id="prevBtn" class="bg-white opacity-50 absolute h-[75vh] d-flex justify-center items-center w-[80px] left-10 top-1/2 transform -translate-y-1/2 hidden z-[10000] cursor-pointer">
            <img src="../assets/images/running-page/carrot_L.svg" alt="previous" class="w-[30px] opacity-30">
          </button>
          <button id="nextBtn" class="bg-white opacity-50 absolute h-[75vh] d-flex justify-center items-center w-[80px] right-0 top-1/2 transform -translate-y-1/2 hidden z-[10000] cursor-pointer">
            <img src="../assets/images/running-page/carrot_R.svg" alt="next" class="w-[30px] opacity-30">
          </button>
        </div>

        <div class="bottom-navigation flex justify-center items-center md:hidden pt-[130px]">
          <div class="dots-container flex gap-3 p-4">
            <div class="dot-status dot-active relative flex justify-center items-center">
              <div class="dot-nav"></div>
            </div>
            <div class="dot-status w-[24px] h-[24px] rounded-full relative flex justify-center items-center">
              <div class="dot-nav bg-[#adadad] rounded-full round-[12px] w-[6px] h-[6px]"></div>
            </div>
          </div>
        </div>

        <!-- Product detail -->
        <div class="md:max-w-[360px] md:w-[40%]">
          <div class="mt-[32px] max-w-[642px]">
            <h1 class="uppercase text-[26px] md:text md:text-[36px] md:text-start text-center">
              <span class="tracking-[5px] md:tracking-[7px]">${content.productName}</span>
            </h1>
            <p class="text-[#4f4a47] mt-2">${content.productDes}</p>
          </div>
          ${content.productColorImgs ? `
          <div class="">
            <button class="flex w-full relative mt-[30px] pt-[13px] pb-[15px]">
              <p class="font-semibold uppercase text-[14px] text-[#4f4a47]">colors:</p>
              <span class="text-[#737a7e] text-[14px] pl-[8px]">${content.productColor}</span>
            </button>
          </div>

          <div class="flex max-md:justify-start gap-2 max-w-[800px] mx-auto">
            
              ${content.productColorImgs.map(productColorImg => `
                <div class="product-img-group">
                  <a href="">
                    <img class="w-[50px] h-[50px] bg-white border border-[#dadada] hover:border-blue-900 hover:border-2 relative" src="${productColorImg}" alt="color image">
                  </a>
                </div>
              `).join('')}
          </div>
          ` : ''} 

          <button class="specsBtn flex justify-between w-full relative mt-[60px] pt-[13px] pb-[15px]">
            <span class="font-semibold uppercase text-[14px]">Specs</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="minusIcon w-4 h-6 absolute right-3 top-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="plusIcon w-4 h-6 hidden absolute right-3 top-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </button>

          <!-- Product detail card -->
          <div class="detailCard text-[14px] font-sans bg-white border-[1px] text-secondary-400 mb-6 h-auto duration-500">
            <table class="table-container w-auto text-[12px]">
              <tbody>
                ${content.productSpec.map(spec => `
                  <tr>
                    <td class="pt-[10px] px-[20px] pb-[10px]">${spec.specCaption}</td>
                    <td class="pt-[10px] px-[20px] pb-[10px]">${spec.specInfo}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="font-sans font-semibold text-[14px] flex md:hidden text-secondary-400 mb-[30px]">
          <a class="add-compare relative w-[11%] min-w-[130px] mx-[25px] text-nowrap">
          <span class="text-[#595959] text-[15px] font-bold relative capitalize font-['Lato']">Add To Compare</span>
          </a>
          </div>
          
          ${content.productModal ? `
          <!-- button for click modal -->
          <button id="stringBtn" class="flex gap-3 text-[14px] font-sans font-bold text-secondary-400 my-[15px] cursor-pointe">
                <img class="w-[17px] h-6" src="../assets/images/icon/stringing-badminton-icon.svg" alt="">
                <span>See Stringing Instructions</span>
            </button>
            <div class="font-sans font-semibold text-[14px] flex md:hidden text-secondary-400">
                <a class="add-compare relative w-[11%] min-w-[130px] mx-[25px] text-nowrap">
                <span class="text-[#595959] text-[15px] font-bold relative capitalize font-['Lato']">Add To Compare</span>
            </a>
          </div>
          ` : ''} 

          <!-- Icon container -->
          <div class="flex justify-center md:justify-start gap-2 max-w-[800px] mx-auto">
            <a href="">
              <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-facebook.svg" alt="facebook icon">
            </a>
            <a href="">
              <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-twitter.svg" alt="twitter icon">
            </a>
            <a href="">
              <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-link.svg" alt="link icon">
            </a>
          </div>
        </div>
      </div>
    `).join('')}
  `;
}

class ProductDetail extends HTMLElement {
  connectedCallback() {
    const dataAtt = this.getAttribute("data-source");
    const dataSourceKey = dataSource[dataAtt];
    this.innerHTML = ShoesDetailContainer(dataSourceKey);
  }
}

customElements.define('product-details', ProductDetail);

// Product slider functionality
const productSlider = document.getElementById("productSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const productImgSlide = productSlider.querySelectorAll(".product-img-slide");
const dotContainer = document.querySelector(".bottom-navigation")
const dots = document.querySelectorAll(".dot-status");
let currentIndex = 0;



function showImage(index) {
  productImgSlide.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Condition for checking if mainImg == 1 => dots are hidden
if(productImgSlide.length === 1){
  dotContainer.classList.add('hidden')
}

function activeDot(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot-active", i === index);
  });
}

// Initial display
showImage(currentIndex);
activeDot(currentIndex);

// Event listeners for next and previous buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + productImgSlide.length) % productImgSlide.length;
  showImage(currentIndex);
  activeDot(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % productImgSlide.length;
  showImage(currentIndex);
  activeDot(currentIndex);
});

document.querySelectorAll(".vertical-product-img").forEach((verticalImg, index) => {
  verticalImg.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
    activeDot(currentIndex);
  });
});

// Event listeners for mouse enter and leave on images
productImgSlide.forEach((slide, i) => {
  slide.addEventListener("mouseenter", () => {
    prevBtn.classList.toggle("hidden", i === 0);
    nextBtn.classList.toggle("hidden", i === productImgSlide.length - 1);
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

// Specs button functionality
const specsBtn = document.querySelector('.specsBtn');
const detailCard = document.querySelector('.detailCard');
const plusIcon = document.querySelector('.plusIcon');
const minusIcon = document.querySelector('.minusIcon');

specsBtn.addEventListener('click', () => {
  detailCard.classList.toggle('h-[0px]');
  detailCard.classList.toggle('overflow-hidden');
  plusIcon.classList.toggle('hidden');
  minusIcon.classList.toggle('hidden');
});

// Image zoom functionality
const imageClick = document.querySelector("#imageClick");
const imgZoom = document.querySelector("#imgZoom");
const xClose = document.querySelector("#x-close");
const navbar = document.getElementById("navbar");

imageClick.addEventListener("click", () => {
  imgZoom.classList.remove("hidden");
  navbar.classList.add("hidden");
});

xClose.addEventListener("click", () => {
  imgZoom.classList.add("hidden");
  navbar.classList.remove("hidden");
});

let currentZoom = 1;
const minZoom = 1;
const maxZoom = 2;
const stepSize = 0.1;
const container = document.querySelector("#image-container");

function zoomImage(direction) {
  let newZoom = currentZoom + direction * stepSize;
  if (newZoom >= minZoom && newZoom <= maxZoom) {
    currentZoom = newZoom;
    container.querySelector("img").style.transform = `scale(${currentZoom})`;
  }
}

container.addEventListener("wheel", event => {
  zoomImage(event.deltaY > 0 ? -1 : 1);
});

// Modal functionality
const stringBtn = document.querySelector("#stringBtn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#xBtn");

modal.classList.add("hidden");

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

stringBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
