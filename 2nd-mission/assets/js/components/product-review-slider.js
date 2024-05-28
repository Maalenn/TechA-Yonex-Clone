import { sliderBadminton, sliderTennis, sliderGolf, sliderSnowboard } from "../data/product-review-slider-data.js";

const dataSources = {
  "slider-badminton": sliderBadminton,
  "slider-tennis": sliderTennis,
  "slider-golf": sliderGolf,
  "slider-snowboard": sliderSnowboard,
};

const SliderContainer = (sliderContents) => {
  return `
    <section class="flex relative w-full justify-center mt-2">
        <section class="relative mx-auto max-w-[1280px] min-w-[300px] h-full max-lg:max-w-[1000px]">
          <div class="flex w-[100%] mt-24 justify-center">
            <h1 class="text-[25px]">ATHLETES</h1>
          </div>
          <section class="group mx-auto px-[50px] py-[45px] ">
            <ul class="no-scrollbar w-[100%] slideShow relative grid grid-cols-[repeat(${sliderContents.length},300px)] max-[1078px]:grid-cols-[repeat(${sliderContents.length},330px)] max-[1153px]:grid-cols-[repeat(${sliderContents.length},360px)] max-[1260px]:grid-cols-[repeat(${sliderContents.length},399px)] sxl:grid-cols-[repeat(${sliderContents.length},300px)]  max-[1009px]:grid-cols-[repeat(${sliderContents.length},400px)] max-[767px]:grid-cols-[repeat(${sliderContents.length},370px)] max-[735px]:grid-cols-[repeat(${sliderContents.length},330px)] overflow-auto">
            ${sliderContents
              .map(
                (item) => `
              <li class="slide-list slg:px-[20px] max-[500px]:px-[40px]">
                <a href="${item.link}">
                <div> 
                <img
                    class="w-[260px] shadow-[inset_0_0_50px_rgba(0,0,0,1)]"
                    src="${item.imgSlide}"
                    alt=""
                />
                
                <div class="absolute bottom-0 w-[260px] p-5 ] bg-gradient-to-b from-[rgba(12,12,12,0.00001)] to-[black]">
                    <h3 class="uppercase text-[#ffffff] text-[1.1rem] font-[400] tracking-[3px]" >
                    ${item.name}
                    </h3>
                    <h5 class="uppercase text-[#ffffff] text-[0.9rem] font-[400] tracking-[3px]">
                    ${item.nation}
                    </h5>
                </div>
                </a>
              </li>
                
            `
              )
              .join("")}
            </ul>
            <div
              class="back absolute top-[57%] right-[30px] max-sm:right-0 md:right-[20px] bg-[#f3f2f2] hidden p-5 group-hover:block"
              onclick="pushArrows(1)"
            >
              <img
                class="w-[1.5rem]"
                src="../assets/images/product-review/right-arrow.svg"
                alt=""
              />
            </div>
            <div
              class="next absolute top-[57%] left-[30px] max-sm:left-0 max-lg:left-[10px] bg-[#f3f2f2] p-5 hidden group-hover:block"
              onclick="pushArrows(-1)"
            >
              <img
                class="w-[1.5rem]"
                src="../assets/images/product-review/left-arrow.svg"
                alt=""
              />
            </div>
          </section>
        </section>
      </section>
    `;
};

class Slider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = SliderContainer(data);
  }
}

customElements.define("slider-component", Slider);

