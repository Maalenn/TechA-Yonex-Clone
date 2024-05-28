import { toggleData, toggleDataSecond } from '../data/about-toggle-data.js';

const dataSources = {
    'toggle-data': toggleData,
    'toggle-data-2': toggleDataSecond
};

// Define navigation data
const navigationLinks = [
    { title: 'AMERICA', href: '#content-1' },
    { title: 'EUROPE', href: '#content-2' },
    { title: 'ASIA', href: '#content-3' },
    // Add more links as needed
];

const createAccordionContainer = (accordionArray) => {
    return `
            ${accordionArray.map((accordionSection) => {
                return `
                    <div class="">
                        <div class="py-[14px] px-[40px] bg-[#1F2427] text-white border font-semibold md:text-[18px]" id="${accordionSection.sectionID}">
                            ${accordionSection.mainTitle}
                        </div>
                        <!-- Accordion Items -->
                        ${accordionSection.accordion.map((accordionItem) => {
                            return `
                                <div class="accordion-item font-sans">
                                    <button class="accordion-btn py-[14px] px-[40px] font-semibold md:text-[18px] border-b w-full text-start flex items-center justify-between">
                                        ${accordionItem.title}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 plus-icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                        </svg>
                                        <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
                                        </svg>
                                    </button>
                                    <!-- Accordion Dropdown -->
                                    <div class="accordion-dropdown border-b w-full max-h-[0px] px-[60px] items-center overflow-hidden duration-500 text-gray-500 text-[14px]">
                                        ${accordionItem.content.map((accordionDropDown) => {
                                            return `
                                                <div class="flex items-center gap-[20px]">
                                                    <img src="${accordionDropDown.iconImage}" alt="icon"/>
                                                    ${accordionDropDown.link ? `<a class="text-blue-500 hover:underline" href="${accordionDropDown.href}">${accordionDropDown.text}</a>` : `<p>${accordionDropDown.text}</p>`}
                                                </div>`;
                                        }).join('')}
                                    </div>
                                </div>`;
                        }).join('')}
                        ${accordionSection.pragraph}
                    </div>`;
            }).join('')}
        </div>
    </main>`;
};

class ToggleComponent extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource] || toggleData; // Default to toggleData if no attribute is found
        this.innerHTML = createAccordionContainer(data, navigationLinks);

        this.addEventListener('click', (event) => {
            if (event.target.closest('.accordion-btn')) {
                const btn = event.target.closest('.accordion-btn');
                const item = btn.closest('.accordion-item');
                const dropdown = item.querySelector('.accordion-dropdown');
                const plusIcon = btn.querySelector('.plus-icon');
                const closeIcon = btn.querySelector('#close-icon');

                dropdown.classList.toggle('max-h-[100px]');
                closeIcon.classList.toggle('hidden');
                plusIcon.classList.toggle('hidden');
            }
        });
    }
}

customElements.define('toggle-component', ToggleComponent);

// sticky sidebar section scroll
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// sticky sidebar section scroll responsive
document.querySelector('.nav__links-res').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy responsive
    if (e.target.classList.contains('nav__link-res')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
