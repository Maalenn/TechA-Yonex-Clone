import { heroBanner, heroRepsonsive , cardSlider, cardSliderAthlete, cardSliderNewArrival} from '../data/homepage-data.js';

//attach the attribute for data
const dataSources = {
    'hero-banner': heroBanner,
    'hero-responsive': heroRepsonsive[0].imgResponsive,
    'card-carousel': cardSlider,
    'athlete-carousel': cardSliderAthlete,
    'new-arrival-carousel': cardSliderNewArrival
};

//hero banner component
const createSlide = (cards) => {
    return `
        <div class="hidden md:relative md:block">
        ${cards.map((imgSrc) => `
            <div class="mySlides fade relative">
                <img src="${imgSrc.img}" class="w-full h-auto object-cover" alt="Slide Image">
                <div class="absolute top-[50%] left-[44%] flex flex-col gap-4">
                    <button class="bg-black text-white py-3 hover:bg-white hover:text-black lg:px-8 px-9">${imgSrc.titleB1}</button>
                </div>
            </div>
        `).join('')}
        <button class="prev absolute top-1/2 left-1 transform -translate-y-1/2 w-[50px] h-[50px] bg-zinc-700 text-3xl font-light ml-2 text-white pb-1 pr-1">❮</button>
        <button class="next absolute top-1/2 right-1 transform -translate-y-1/2 w-[50px] h-[50px] bg-zinc-700 text-3xl font-light mr-2 text-white pb-1 pl-1">❯</button>
        </div>
    `;
};

//hero banner in responsive
const cardAutoSlide = (items) => {
    return `
        ${items.map((imgRes) => `
        <div class="mySlides1 fade dot">
            <img src="${imgRes}" class="w-[100%]" alt="heropicture">
        </div>
    `).join('')}
    `
}
//card carousel in sports section and athlete sections
const cardCarousel = (cards, pos) =>{
    return `
        <section class="mx-auto px-[50px] py-[45px]">
        <ul class="overflow-x-hidden w-[100%] slideShow relative grid grid-cols-[repeat(${cards.length},300px)] ssm:grid-cols-[repeat(${cards.length},330px)] smd:grid-cols-[repeat(${cards.length},450px)] slg:grid-cols-[repeat(${cards.length},399px)] sxl:grid-cols-[repeat(${cards.length},300px)] max-sm:grid-cols-[repeat(${cards.length},280px)] max-md:grid-cols-[repeat(${cards.length},340px)] max-lg:grid-cols-[repeat(${cards.length},360px)] overflow-auto font-[Oswald]">
            ${cards.map(card => `
                <li class="slide-list slg:px-[20px]">
                    <a href="${card.link}" class"relative">
                        <img class="w-[260px] bg-[#f7f8f9]" src="${card.img}" alt=""/>
                        <h3 class="${pos}">
                            ${card.title}
                        </h3>
                    </a>
                </li>
            `).join('')}
            </ul> 
            <div class="back absolute top-[52%] right-[30px] max-sm:right-0 md:right-[20px]  bg-[#f3f2f2] p-5">
                <img class="w-[1.5rem]" src="/tech-a-project/2nd-mission/assets/images/product-review/right-arrow.svg" alt="" />
            </div>
            <div class="skip absolute top-[52%] left-[30px] max-sm:left-0 max-lg:left-[10px] bg-[#f3f2f2] p-5">
                <img class="w-[1.5rem]" src="/tech-a-project/2nd-mission/assets/images/product-review/left-arrow.svg" alt="" />
            </div>
        </section>
    `;
}

//Reusable card slide class
class BannerSlide extends HTMLElement {
    constructor() {
        super();
        this.cards = heroBanner[0].imgBanner;
        this.slideIndex = 1;
    }

    connectedCallback() {
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource] || [];
        this.innerHTML = createSlide(data);
        this.showSlides(this.slideIndex);

        this.querySelector('.prev').addEventListener('click', () => this.plusSlides(-1));
        this.querySelector('.next').addEventListener('click', () => this.plusSlides(1));
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    showSlides(n) {
        const slides = this.getElementsByClassName("mySlides");
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex - 1].style.display = "block";
    }
}

customElements.define('hero-slider', BannerSlide);

//Reusable card auto slide in repsonsive
class CardAutoSlide extends HTMLElement {
    constructor(){
        super();
        this.items = heroRepsonsive[0].imgResponsive
        this.slideIndex = 1;
    }
    connectedCallback () {
        const dataSource = this.getAttribute('card-data-source');
        const data = dataSources[dataSource] || []
        this.innerHTML = cardAutoSlide(data)
        this.showSlides1();
    }
    showSlides1() {
        let i;
        let slides = document.getElementsByClassName("mySlides1");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        this.slideIndex++;
        if (this.slideIndex > slides.length) {this.slideIndex = 1}    
        slides[this.slideIndex - 1].style.display = "block";  
        dots[this.slideIndex - 1].className += " active";
        setTimeout(this.showSlides1.bind(this), 2000); // Use bind to maintain 'this' context
    }
}

customElements.define('hero-responsive', CardAutoSlide)

//for card carousel
class CardCarousel extends HTMLElement {
    constructor(){
        super();
        this.currentSlide = 0;
    }
    connectedCallback() {
        const dataSource = this.getAttribute('card-slide');
        const data = dataSources[dataSource] || []
        const posStyle = this.getAttribute('text-style')
        this.innerHTML = cardCarousel(data, posStyle);       
        this.querySelector('.back').addEventListener('click', () => this.plusSlides(1));
        this.querySelector('.skip').addEventListener('click', () => this.plusSlides(-1));
    }
    plusSlides(n) {
        const carousel = this.querySelector('.slideShow');
        const images = carousel.querySelectorAll('.slide-list');
        const imageWidth = images[0].clientWidth;

        this.currentSlide = Math.max(0, Math.min(this.currentSlide + n, images.length - 1));
        carousel.scrollTo({ left: this.currentSlide * imageWidth, behavior: 'smooth' });
    }
}
customElements.define('card-carousel', CardCarousel)