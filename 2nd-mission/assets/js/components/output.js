import { Bedmanton, Tennis, Golf, Snowboarding } from '../data/database-athletes.js';

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('card-container');
    const sport = cardContainer.getAttribute('sport');

    let cardData;
    switch (sport) {
        case 'tennis':
            cardData = Tennis();
            break;
        case 'snowboarding':
            cardData = Snowboarding();
            break;
        case 'Golf':
            cardData = Golf();
            break;
        case 'bedmanton':
        default:
            cardData = Bedmanton();
            break;
    }

    // Create 3 columns
    for (let i = 0; i < 3; i++) {
        const column = document.createElement('div');
        column.className = 'flex flex-col justify-between space-y-4 py-2 px-2';

        // Generate IDs for each column
        let ids;
        if (i === 1) {
            ids = [12, 11, 10, 9, 8, 7];
        } else {
            ids = [(i * 6) + 1, (i * 6) + 2, (i * 6) + 3, (i * 6) + 4, (i * 6) + 5, (i * 6) + 6];
        }

        // Create and append cards with the generated IDs
        ids.forEach(id => {
            const card = document.createElement('my-card');
            card.setAttribute('id', id.toString());
            column.appendChild(card);
        });

        cardContainer.appendChild(column);
    }
});

