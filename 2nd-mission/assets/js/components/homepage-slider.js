import { heroBanner } from '../data/homepage-data.js';

//attach the attribute for data
const dataSources = {
    'hero-banner': heroBanner[0].imgBanner
};

//hero banner component
const createSlide = (cards) => {
    return `
        <div class="hidden md:relative md:block">
        ${cards.map((imgSrc) => `
            <div class="mySlides fade relative">
                <img src="${imgSrc}" class="w-full h-auto object-cover" alt="Slide Image">
                <button class="bg-black absolute top-[50%] left-[44%] text-white py-3 hover:bg-white hover:text-black lg:px-8 px-9">NEWS</button>
                <button class="bg-black absolute top-[30%] left-[44%] text-white py-3 hover:bg-white hover:text-black lg:px-8 px-4">LEARN MORE</button>
            </div>
        `).join('')}
        <button class="prev absolute top-1/2 left-1 transform -translate-y-1/2 w-[50px] h-[50px] bg-zinc-700 text-3xl font-light ml-2 text-white pb-1 pr-1">❮</button>
        <button class="next absolute top-1/2 right-1 transform -translate-y-1/2 w-[50px] h-[50px] bg-zinc-700 text-3xl font-light mr-2 text-white pb-1 pl-1">❯</button>
        </div>
    `;
};


//Reusable card slide class
class CardSlide extends HTMLElement {
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

customElements.define('hero-slider', CardSlide);

