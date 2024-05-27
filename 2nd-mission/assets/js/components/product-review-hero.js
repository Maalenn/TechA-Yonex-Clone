import { heroBadminton, heroTennis, heroGolf, heroSnowboard } from "../data/product-review-hero-data.js";

const dataSources = {
  "hero-badminton": heroBadminton,
  "hero-tennis": heroTennis,
  "hero-golf": heroGolf,
  "hero-snowboard": heroSnowboard,
};

const HeroCoverContainer = (heroContents) => {
  return `
    ${heroContents
      .map(
        (item) => `
            <section class="md:top-24 top-14 flex relative w-full justify-center md:mt-[5px] mt-0 mb-24 text-${item.textColor}">
                <secton class="w-[100%]">
                    <img
                        class="w-full max-lg:hidden"
                        src="${item.imgLg}"
                        alt=""
                    />
                    <img
                        class="w-full hidden max-lg:block"
                        src="${item.imgMd}"
                        alt=""
                    />
                    <ul class="max-[500px]:left-5 top-10 left-20 absolute flex gap-5 text-[0.75rem] justify-center">
                        <li class="flex gap-5 max-lg:text-[1.5rem]">
                            <a href="index.html" class="hover:border-b-[1px] border-[#050505] max-sm:text-[1.3rem] lg:text-[1.5rem]">
                                Home
                            </a>
                            <span class="text-[0.75rem] max-lg:text-[1.5rem] max-sm:text-[1.3rem] lg:text-[1.5rem]">/</span>
                        </li>
                        <li class="flex gap-5 ] max-lg:text-[1.5rem]">
                            <a href="index.html" class="max-sm:text-[1.3rem] lg:text-[1.5rem] hover:border-b-[1px] border-[#080707] capitalize">
                                ${item.productName}
                            </a>
                            <span class="text-[0.75rem] max-lg:text-[1.5rem] max-sm:text-[1.3rem] lg:text-[1.5rem]">/</span>
                        </li>
                        <h5 class="uppercase text-[0.75rem] max-lg:text-[1.5rem] max-sm:text-[1.3rem] lg:text-[1.5rem]">
                            ${item.productType}
                        </h5>
                    </ul>
                    <h1

                        class="max-lg:left-0 absolute left-20 pr-10 w-[70%] bottom-10 uppercase font-[500] text-[1.6rem] tracking-[0.15rem] max-sm:text-[1.6rem] max-sm:p-4 max-lg:text-white max-lg:tracking-[0.5rem] max-md:text-[2.6rem] max-lg:w-full max-lg:bottom-0 max-lg:bg-black max-lg:text-[2.3rem] max-lg:p-10 lg:text-[2.2rem]"
                        class="max-lg:left-0 absolute left-20 pr-10 w-[70%] bottom-10 uppercase font-[500] text-[1.6rem] tracking-[0.15rem] max-sm:text-[1.6rem] max-sm:p-4 max-lg:text-white max-lg:tracking-[0.5rem] max-md:text-[2.6rem] max-lg:w-full max-lg:bottom-4 max-lg:bg-black max-lg:text-[2.3rem] max-lg:p-10 lg:text-[2.2rem]" origin/feature/48-poductReview-hero-component
                    >
                        ${item.productDes}
                    </h1>
                </secton>
            </section>
        `).join("")}
    
    `;
};

class HeroCover extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = HeroCoverContainer(data);
  }
}

customElements.define("hero-component", HeroCover);
