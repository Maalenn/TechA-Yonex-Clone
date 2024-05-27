import {badmintonCard} from '../data/product-review-card-data.js'

const dataSources = {
    'badminton-card': badmintonCard
}

const CardContainer = (cardContents) =>{
    return `
        <section class="p-10">
            <section class="w-[100%] grid grid-cols-3 max-sm:grid-cols-2 gap-10 mb-20">
            ${cardContents.map((items) => `
                <aside class="relative w-[100%] flex flex-col justify-center pt-[1.5rem] pb-5 group z-[1000] mt-10">    
                    <a href="product-detail.html">
                        <!-- scale background -->
                            <div role="hidden" class="absolute w-full h-full group-hover:shadow-2xl bg-[white] group-hover:-scale-x-125"></div>
                        <!-- Card -->
                        <div class="relative">
                            <div class="pb-1 lg:max-w-[300px]">
                                <img
                                src="${items.img}"
                                alt=""
                                />
                            </div>
                            <div class="mt-4 flex justify-center">
                                <h4 class="uppercase">${items.productName}</h4>
                            </div>
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
        const data = dataSources[dataSource] || badmintonCard;
        this.innerHTML = CardContainer(data)
    }
}

customElements.define('badminton-card-component', CardBadminton)