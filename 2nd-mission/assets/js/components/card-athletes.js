import { Bedmanton, Tennis, Golf, Snowboarding} from '../data/database-athletes.js';

class MyCard extends HTMLElement {
    connectedCallback() {
        const id = this.getAttribute('id');
        const sport = this.parentElement.parentElement.getAttribute('sport');

        let cardData;
        switch (sport) {
            case 'tennis':
                cardData = Tennis().find(card => card.id === parseInt(id, 10));
                break;
            case 'snowboarding':
                cardData = Snowboarding().find(card => card.id === parseInt(id, 10));
                break;
            case 'golf':
                cardData = Golf().find(card => card.id === parseInt(id, 10));
                break;
            case 'bedmanton':
            default:
                cardData = Bedmanton().find(card => card.id === parseInt(id, 10));
                break;
        }

        if (!cardData) return;
        const namebox = cardData.id % 2 === 0 ? 'top-[80%]' : 'top-[85%]';
        const cardHeight = cardData.id % 2 === 0 ? 'h-[360px]' : 'h-[506px]';
        this.innerHTML = `
        <div class="group w-[407px] ${cardHeight}">
            <div class="relative overflow-hidden">
                <a href="${cardData.link}">
                    <img src="${cardData.image}" alt="${cardData.name}" class="mt-2 w-[407px] ${cardHeight} object-cover">
                
                <div class="absolute ${cardHeight} w-full bg-blue-500/70 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300">
                    <button class="bg-white hover:bg-sky-700 text-black hover:text-white py-2 px-5">View Athlete Profile</button>
                </div>
                <div class="bg-black/45 absolute inset-0 ${namebox} w-auto pl-5 z-50 text-white">
                    <p class="text-[22px]">${cardData.name}</p>
                    <p>${cardData.country}</p>
                </div>
                </a>
            </div>
        </div>
        `;
    }
}

customElements.define('my-card', MyCard);


/* import { Bedmanton, Tennis, Running } from './database.js';

class MyCard extends HTMLElement {
    connectedCallback() {
        const id = this.getAttribute('id');
        const sport = this.parentElement.parentElement.getAttribute('sport');

        let cardData;
        switch (sport) {
            case 'tennis':
                cardData = Tennis().find(card => card.id === parseInt(id, 10));
                break;
            case 'running':
                cardData = Running().find(card => card.id === parseInt(id, 10));
                break;
            case 'bedmanton':
            default:
                cardData = Bedmanton().find(card => card.id === parseInt(id, 10));
                break;
        }

        if (!cardData) return;

        const cardColor = cardData.id % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500';
        const cardHeight = cardData.id % 2 === 0 ? 'h-[506px]' : 'h-[360px]';

        this.innerHTML = `
            <div class="p-4 ${cardColor} ${cardHeight} w-[407px] text-white rounded-lg shadow-md ">
                <h2 class="text-lg font-bold">${cardData.name}</h2>
                <p>ID: ${cardData.id}</p>
                <img src="${cardData.image}" alt="${cardData.name}" class="mt-2 w-[407px] ${cardHeight} object-cover">
            </div>
        `;
    }
}

customElements.define('my-card', MyCard); */
