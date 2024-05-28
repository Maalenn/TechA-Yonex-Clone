import {
    badmintonCard, 
    tennisCard, 
    golfCard, 
    snowboardCard , 
    AllRunningCard, 
    MenRunningCard,
    WomenRunningCard,
    UnisexRunningCard,
} from '../data/product-review-card-data.js'

const dataSources = {
    'badminton-card': badmintonCard,
    'tennis-card': tennisCard,
    'golf-card': golfCard,
    'snowboard-card': snowboardCard,
    'allRunning-card': AllRunningCard,
    'menRunning-card': MenRunningCard,
    'womenRunning-card': WomenRunningCard,
    'unisexRunning-card': UnisexRunningCard,
}

const CardContainer = (cardContents) =>{
    return `
        <section class="p-10">
            <section class="w-[100%] grid grid-cols-3 max-sm:grid-cols-2 gap-10 mb-20">
            ${cardContents.map((items) => `
                <aside class="relative w-[100%] flex flex-col justify-center pt-[1.5rem] pb-5 group z-[1000] mt-10">    
                    <a href="${items.linkPage}">
                        <!-- scale background -->
                            <div role="hidden" class="absolute w-full h-full group-hover:shadow-2xl bg-[white] group-hover:-scale-x-125"></div>
                        <!-- Card -->
                        <div class="relative block">
                            <div class="pb-1 lg:max-w-[300px]">
                                <img
                                src="${items.img}"
                                alt=""
                                />
                            </div>
                            <div class="mt-4 flex justify-center">
                                <h4 class="uppercase">${items.productName}</h4>
                            </div>
                            ${items.productColorsOpt ? `
                            <div class="colorOpts flex flex-wrap justify-center max-md:justify-start gap-2 max-w-[800px] mx-auto pt-4">
                                ${items.productColorsOpt.map((colorOpt) => `
                                <div class="flex justify-center">
                                    <a href="#">
                                    <img
                                        class="w-[40px] h-[40px] bg-white border border-[#dadada] hover:border-blue-900 hover:border-2 relative"
                                        src="${colorOpt}"
                                        alt=""
                                    />
                                    </a>
                                </div>
                                `).join('')}
                            </div>
                            ` : ''}
                            <div class="mt-2 flex items-center justify-center gap-7 group-hover:opacity-100 opacity-0">
                                <div class="">
                                    <div class="relative w-[20px] h-[15px] rounded-[3px] border-black border-[1px]">
                                        <div class="absolute w-[20px] h-[15px] rounded-[3px] border-black border-[1px] bottom-[-10px] border-dashed right-[-15px]"></div>
                                    </div>
                                </div>
                                <a href="" class="text-[16px] underline text-[gray]">Add to compare</a>
                            </div>
                        </div>
                    </a>
                </aside>
                `).join("")}
            </section>
        </section>
    `
}

class CardBadminton extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource];
        this.innerHTML = CardContainer(data)
    }
}

customElements.define('product-card-component', CardBadminton)