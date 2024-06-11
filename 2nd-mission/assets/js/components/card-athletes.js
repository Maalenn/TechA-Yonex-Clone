import { Bedmanton, Tennis, Golf, Snowboarding} from '../data/athletes-data.js';

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
// Check and defined data according to it size
        if (!cardData) return;
        const namebox = cardData.id % 2 === 0 ? 'top-[80%]' : 'top-[85%]';
        const cardHeight = cardData.id % 2 === 0 ? 'h-[360px]' : 'h-[506px]';
        this.innerHTML = `
        <div class="group ${cardHeight}">
            <div class="relative overflow-hidden">
                <a class="relative " href="${cardData.link}">
                    <img src="${cardData.image}" alt="${cardData.name}" class="mt-2 ${cardHeight} w-full h-full object-cover">
                
                <div class="absolute ${cardHeight} w-full bg-blue-500/70 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300">
                    <button class="bg-white hover:bg-sky-700 text-black hover:text-white py-2 px-5">View Athlete Profile</button>
                </div>
                <div class="bg-black/45 absolute inset-0 ${namebox} pl-5 z-50 text-white">
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