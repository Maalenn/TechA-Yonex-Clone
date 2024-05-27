import { Men} from "../data/technology-data.js";
import { BadmintonTechno } from "../data/detail-badminton.js";
import { TennisTechno } from "../data/detail-tennis-data.js";
import { GolfTechno } from "../data/detail-golf-data.js";
import { SnowboardTechno } from "../data/detail-snowboard.js";
const dataSources = {
  "men-techno": Men,
  "badminton-techno": BadmintonTechno,
  "tennis-techno": TennisTechno,
  "golf-techno": GolfTechno,
  "snowboard-techno": SnowboardTechno,
};

class TechnologyCarousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="slider technology pt-[200px] flex justify-between max-md:block max-md:h-[67rem] relative">
        <div class="tech-left absolute flex flex-col justify-center min-h-[600px] w-[50px] max-md:hidden z-10">
          <div class="dots technology-left-navigation flex flex-col items-center justify-between relative min-h-[250px]"></div>
        </div>
        <div class="slide absolute w-full flex items-center justify-center max-md:block max-md:relative">
          <div class="tech-middle w-[calc(50%-50px)] flex justify-center max-md:w-full">
            <div class="technology-middle-img-wrapper relative">
              <img class="technology-middle-img h-auto min-w-full" id="technology-middle-img" alt="POWER CUSHION +" />
            </div>
          </div>
          <div class="tech-right w-[50%] relative flex flex-col pl-5 max-md:w-[100%]">
            <div class="tech-right-numbers text-[#f7f8f9] flex font-extrabold absolute font-['Lato'] max-md:hidden" style="z-index: -1">
              <div class="technology-right--numbers-current--slide text-[190px] leading-[150px] text-[#f7f8f9] font-bold" id="current-slide">01</div>
              <div class="technology-right--numbers-slide--count text-[24px] text-[#f7f8f9] font-bold" id="slide-count">/ 0 <span></span></div>
            </div>
            <div class="tech-right-content ml-[125px] max-w-[300px] max-md:w-full max-md:ml-0 max-md:max-w-full max-md:text-center max-md:absolute max-md:left-0">
              <img src="" class="technology__right__content__image max-w-full h-auto" id="technology-right-imgText"/>
              <h3 class="tech-right-content-title text-[#1f2427] text-[26px] font-normal tracking-[3px] mt-[2.2rem] mb-[1.1rem] font-Oswald" id="technology-right-title">POWER CUSHION +</h3>
              <div class="tech-right-content-description text-[#595959] text-[16px] font-['Lato'] leading-relaxed" id="technology-right-description">
                <p class="mb-[1rem]"></p>
                <p class="mb-[1rem]"></p>
                <p class="mb-[1rem]"><span class="text-[10px] sm-description"></span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="tech-right-navigation ml-[125px] flex items-end flex-1 pt-[150px] pb-[70px] max-md:ml-0 max-md:pt-0 absolute left-[50%] top-[70%] max-md:top-[90%] max-md:left-[40%]">
          <div class="border border-[#e0e0e0] mr-2">
            <button class="slider__btn slider__btn--left relative h-[40px] w-[50px] bg-white  flex justify-center items-center">
              <img src="../assets/images/running-page/carrot_L.svg" alt="" />
            </button>
          </div>

          <div class="border border-[#e0e0e0]">
            <button class="slider__btn slider__btn--right relative h-[40px] w-[50px] flex justify-center items-center">
              <img src="../assets/images/running-page/carrot_R.svg" alt="" />
            </button>
          </div>
          
          
        </div>
      </div>
    `;
    this.fetchSliderData();
  }

  fetchSliderData() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource]; // Default to shoes1 if no attribute is found
    this.sliderData = data;
    this.initSlider();
  }

  initSlider() {
    const technologyMiddleImg = this.querySelector("#technology-middle-img");
    const currentSlide = this.querySelector("#current-slide");
    const slideCount = this.querySelector("#slide-count span");
    const technologyRightTitle = this.querySelector("#technology-right-title");
    const technologyRightImgText = this.querySelector(
      "#technology-right-imgText"
    );
    const technologyRightDescription = this.querySelector(
      "#technology-right-description"
    );
    const btnLeft = this.querySelector(".slider__btn--left");
    const btnRight = this.querySelector(".slider__btn--right");
    const dotContainer = this.querySelector(".dots");

    let curSlide = 0;
    const maxSlide = this.sliderData.length;

    const createDots = () => {
      for (let i = 0; i < maxSlide; i++) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      }
    };

    const activateDot = (slide) => {
      dotContainer.querySelectorAll(".dots__dot").forEach((dot) => {
        dot.classList.remove("dots__dot--active");
      });
      dotContainer
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };

    const updateSlideInfo = () => {
      const data = this.sliderData[curSlide];
      technologyMiddleImg.src = data.image;
      technologyMiddleImg.alt = data.alt;
      technologyRightTitle.textContent = data.title;
      technologyRightImgText.src = data.imgText;
      technologyRightDescription.innerHTML = data.description.join("<br>");
      currentSlide.textContent = `0${curSlide + 1}`;
      slideCount.textContent = maxSlide;
    };

    const nextSlide = () => {
      curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
      updateSlideInfo();
      activateDot(curSlide);
    };

    const prevSlide = () => {
      curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
      updateSlideInfo();
      activateDot(curSlide);
    };

    const init = () => {
      updateSlideInfo();
      createDots();
      activateDot(0);
    };
    init();

    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
  }
}

customElements.define("technology-carousel", TechnologyCarousel);
