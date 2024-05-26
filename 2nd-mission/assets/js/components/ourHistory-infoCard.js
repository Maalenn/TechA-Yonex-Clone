import { cardData } from '../data/ourHistory-data.js';

        const dataSources = {
            'card-data': cardData,
        };

        // Start the Card Infomation component
        const CreateCard = (cards) => {
            return `
                <div class="max-w-[1200px] mx-auto">
                    ${cards.map((item) => `

                        <!-- Start the 1st blog -->
                        <div
                            class="flex flex-col md:flex-row max-w-[255px] sm:max-w-full mx-auto items-center gap-[60px] px-[10px]" id="${item.id}">
                            <!-- responsive -->
                            <div class="relative block md:hidden">
                            <img class="max-w-[360px] md:w-full"
                            src="${item.imgMobile}"
                            data-aos="zoom-in alt="Image">
                            <div class="absolute bottom-0 left-[50%]">
                                <div
                                class="absolute bottom-[-50px] right-[-140px] w-[120px] h-[120px] z-10 bg-blue-500 flex justify-center items-center">
                                <p class="text-center text-[36px] border-b-[3px] text-white border-black pb-[2px]">
                                    ${item.yearsMobile}
                                </p>
                                </div>
                            </div>
                            </div>
                            <!-- paragaph -->
                            <div class="max-w-[340px]">
                                <h1 class="text-[30px] pb-[22px]">${item.title}</h1>
                                <p class="text-[16px] pb-[20px] text-gray-500">
                                    ${item.info}
                                </p>
                            </div>
                            <!-- destop size -->
                            <div class="relative hidden md:block">
                                <img class="max-w-[360px] md:max-w-[200px] lg:max-w-full"
                                src="${item.imgDestop}"
                                data-aos="zoom-in alt="Image">
                                <div class="absolute bottom-0 left-[50%]">
                                    <div
                                    class="absolute lg:bottom-[-80px] lg:right-[-140px] lg:w-[160px] lg:h-[160px] bottom-[-90px] right-[-50px] w-[90px] h-[90px] z-10 md:w-[120px] md:h-[120px] md:right-[-70px] md:bottom-[-80px] bg-blue-500 flex justify-center items-center">
                                        <p class="text-center text-[36px] border-b-[3px] text-white border-black pb-[2px]">
                                        ${item.yearsDestop}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- End the 3rd blog -->
                        </div>


                        <!-- Start the 2nd blog -->
                        <div
                            class="py-[270px] flex flex-col md:flex-row max-w-[255px] sm:max-w-full mx-auto items-center gap-[60px] px-[10px]" id="${item.id2}">
                            <!-- responsive -->
                            <div class="relative">
                                <img class="max-w-[360px] md:max-w-[200px] lg:max-w-full"
                                src="${item.imgDes2}"
                                data-aos="zoom-in alt="Image">
                                <div class="absolute bottom-0 left-[50%]">
                                    <div
                                        class="absolute xl:bottom-[90px] xl:left-[-310px] xl:w-[160px] xl:h-[160px] bottom-[-50px] right-[-140px] w-[120px] h-[120px] z-10 lg:w-[140px] lg:h-[140px] lg:left-[-280px] lg:bottom-[70px] md:w-[120px] md:h-[120px] md:left-[-200px] md:bottom-[10px] bg-blue-500 flex justify-center items-center">
                                        <p class="text-center text-[36px] border-b-[3px] text-white border-black pb-[2px]">
                                            ${item.years2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- paragaph -->
                            <div class="max-w-[440px]">
                                <h1 class="text-[30px] pb-[22px]">${item.title2}</h1>
                                <p class="text-[16px] text-gray-500">
                                    ${item.info2}
                                </p>
                            </div>
                            <!-- End the 2nd blog -->
                        </div>

                    `).join('')}
                </div>
            `;
        };
        

        class Card extends HTMLElement {
            connectedCallback() {
                const dataSource = this.getAttribute('data-source');
                const data = dataSources[dataSource] || cardData; // Default to cardData if no attribute is found
                this.innerHTML = CreateCard(data);
            }
        }

        customElements.define('card-info-component', Card);
        // End the Card Infomation component



// Scrolling click (Smooth)
document
.querySelector(".nav__links")
.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});