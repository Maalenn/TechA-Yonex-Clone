import {AllLatestNewsData} from '../data/all-latest-news-data.js';

const dataSources = {
    'all-latest-news': AllLatestNewsData
}

const LatestNewsContainer = (newsContents) => {
    return `
        ${newsContents.map((content) => `
            <div class="top-block mx-[16px] grid-cols-10 gap-[10px] md:mr-[16px] md:grid block mt-[10px]">
                <!-- start left side  -->
                <div class="col-span-6">
                    <div class="h-[100%] col-span-7 bg-black" style="grid-area: main;">
                        <div class="h-[100%] flex flex-col pb-[10px] bg-[#FFFFFF]">
                        <div class="h-[100%] p-0 pb-[10px]">
                            <img src="${content.latestNews_Img_left}" alt="image"
                            class="block object-cover h-[100%] w-[100%] max-w-[100%]">
                        </div>
                        <p class="p-[2px] pl-[10px] w-full text[16px] text-[#595959] font-[400] leading-[23px] tracking-[2px]">${content.latestNews_Date_left}</p>
                        <h3 class="m-[6px] pl-[4px] w-full text-[20px] font-[700] leading-[26px] mb-[10px] text-[#1f2427]">${content.latestNews_Des_left}</h3>
                        <a href="https://www.yonex.com/news/general/yonex-announces-environmental-vision-2050-to-carry-sport-into-the-future/"
                            class="pr-[21px] w-full text-[#006cb7]"
                            aria-label="Yonex announces “Environmental Vision 2050”:  To carry sport into the future">
                            <span class="pl-[10px] text-[16px] font-[700] leading-[3px]">Read Full Story ></span>
                            <span class="box-border"></span>
                        </a>
                        </div>
                    </div>
                </div>
                <!-- end left side -->
        
                <!-- start right side  -->
                
                <div class="col-span-4 md:grid">
        
                <!--start top right-side  -->
                ${content.latestNews_Img_right.map((img_right) => `
                    <div class="top-right-side md:grid">
                        <div class="flex flex-col bg-[#fff] pb-[10px]">
                        <div class=" pb-[10px]">
                            <img src="${img_right}" alt="image" class="top-blocks__item__image">
                        </div>
                        <p class="p-[2px] pl-[10px] w-full text[16px] text-[#595959] font-[400] leading-[23px] tracking-[2px]">March
                            21, 2024</p>
                        <h3 class="m-[6px] pl-[4px] w-full text-[20px] font-[700] leading-[26px] mb-[10px] text-[#1f2427]">Upgrade
                            Your Comfort and Fit Experience with the New POWER CUSHION 88 DIAL
                        </h3>
                        <a href="https://www.yonex.com/news/badminton/upgrade-your-comfort-and-fit-experience-with-the-new-power-cushion-88-dial/"
                            class="pr-[21px] w-full text-[#006cb7]"
                            aria-label="Upgrade Your Comfort and Fit Experience  with the New POWER CUSHION 88 DIAL">
                            <span class="pl-[10px] text-[16px] font-[700] leading-[3px]">Read Full Story ></span>
                            <span class="top-blocks__item__link__gt"></span>
                        </a>
                        </div>
                    </div>
                `).join("")}
                
                <!--end top right-side  -->
        
                </div>
                <!-- end right side  -->
            </div> 
        
        
        
        
        `).join("")}
        
    
    `
}
 

// syntax to create component 
class LatestNews extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute('data-source')
        const dataSourceKey = dataSources[dataAtt]
        this.innerHTML = LatestNewsContainer(dataSourceKey)
    }
}

customElements.define('latest-news', LatestNews)

