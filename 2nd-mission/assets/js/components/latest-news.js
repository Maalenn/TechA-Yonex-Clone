import {AllLatestNewsData, BadmintonLatestNews, TennisLatestNews, GolfLatestNews, GeneralLatestNews} from '../data/all-latest-news-data.js';

const dataSources = {
    'all-latest-news': AllLatestNewsData,
    'badminton-latest-news': BadmintonLatestNews,
    'tennis-latest-news': TennisLatestNews,
    'golf-latest-news': GolfLatestNews,
    'general-latest-news': GeneralLatestNews
}

const LatestNewsContainer = (newsContents) => {
    return `
        ${newsContents.map((content) => `
            <div class="top-block mx-[16px] grid-cols-10 gap-[10px] md:mr-[16px] md:grid block mt-[10px]">
                <!-- start left side  -->
                <div class="col-span-6">
                    <div class="h-[100%] col-span-7 bg-black">
                        <div class="h-[100%] flex flex-col pb-[10px] bg-[#FFFFFF]">
                            <div class="h-[100%] p-0 pb-[10px]">
                                <img src="${content.latestNews_Img_left}" alt="image"
                                class="block object-cover h-[100%] w-[100%] max-w-[100%]">
                            </div>
                            
                            <div class="px-5">
                                <p class="w-full text-[12px] text-[#595959] font-[400] leading-[23px]">${content.latestNews_Date_left}</p>
                                <h3 class="w-full text-[18px] font-[700] leading-[26px] text-[#1f2427]">${content.latestNews_Des_left}</h3>
                                <a href="${content.latestNews_Link_left}"
                                    class="pr-[21px] w-full text-[#006cb7]"
                                    aria-label="Yonex announces “Environmental Vision 2050”:  To carry sport into the future">
                                    <span class="text-[14px] font-[700]">Read Full Story ></span>
                                    <span class="box-border"></span>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <!-- end left side -->
        
                <!-- start right side  -->
                <div class="col-span-4 md:grid">
                    ${content.latestNews_content_right.map((item) => `
                        <div class="md:grid bg-[#fff]">
                            <div class="flex flex-col pb-[10px]">
                            <div class="pb-[10px]">
                                <img src="${item.right_img}" alt="image" class="top-blocks__item__image">
                            </div>

                            <div class="px-5">
                                <p class="w-full text-[12px] text-[#595959] font-[400] leading-[23px]">
                                    ${item.right_date}
                                </p>

                                <h3 class="w-full text-[18px] font-[700] leading-[26px] text-[#1f2427]">
                                    ${item.right_des}
                                </h3>

                                <a href="${item.right_link}" class="w-full text-[#006cb7] mt-10">
                                    <span class="text-[14px] font-[700]">Read Full Story ></span>
                                </a>
                            </div>

                            
                            </div>

                            
                        </div>
                    `).join("")}
                </div>
                <!-- end right side  -->
            </div>         
        `).join("")}
    `
}

class LatestNews extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute('data-source')
        const dataSourceKey = dataSources[dataAtt]
        this.innerHTML = LatestNewsContainer(dataSourceKey)
    }
}

customElements.define('latest-news', LatestNews)

