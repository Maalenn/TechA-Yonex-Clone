// Sport card object
const arrObj = [
    {
        img: "https://www.yonex.com/media/catalog/category/NANOFLARE_800.png",
        title: "BADMINTON"
    },
    {
        img: "https://www.yonex.com/media/catalog/category/ezone-100.png",
        title: "TENNIS"
    },
    {
        img: "https://www.yonex.com/media/catalog/category/EZONE_GT_d_ts_Head.png",
        title: "GOLF"
    },
    {
        img: "https://www.yonex.com/media/catalog/category/Carbon-Cruise-Aerus.png",
        title: "RUNNING"
        
    },
    
]
// Badminton object
const badmintonObj = [
    {
        img: "../assets/images/badminton-images/racquets_240306.png",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/images/badminton-images/strings_240306.webp",
        title: "STRINGS"
        
    },
    {
        img: "../assets/images/badminton-images/shuttlecocks_img.webp",
        title: "SHUTTLECOCKS"
        
    },
    {
        img: "../assets/images/badminton-images/10566_011_520x320.webp",
        title: "APPAREL"
        
    },
    {
        img: "../assets/images/badminton-images/shoes_240306.webp",
        title: "SHOES"
        
    },
    {
        img: "../assets/images/badminton-images/bag.webp",
        title: "BAGS"
        
    },
    {
        img: "../assets/images/badminton-images/accessories_img2.webp",
        title: "ACCESSORIES"
        
    },
    {
        img: "../assets/images/badminton-images/athletes_240306.webp",
        title: "ATHLETES"
        
    },
]
// golfobj
const golfObj = [
    {
        img: "../assets/images/golf-images/thm_club_ezone.webp",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/images/golf-images/Mega-Menu-Golf-Shaft_1.webp",
        title: "SHAFTS"
        
    },
    {
        img: "../assets/images/golf-images/Mega-Golf-Bag.webp",
        title: "GEAR"
        
    },
    {
        img: "../assets/images/golf-images/golf-athletes.webp",
        title: "APPAREL"
        
    }
]
// tennisobj
const tennisObj = [
    {
        img: "../assets/images/tennis-images/raquet-tennis.webp",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/images/tennis-images/strings-tennis.webp",
        title: "SHAFTS"
        
    },
    {
        img: "../assets/images/tennis-images/tennis-ball.webp",
        title: "BALLS"
        
    },
    {
        img: "../assets/images/tennis-images/apparel-tennis.webp",
        title: "APPAREL"
        
    },
    {
        img: "../assets/images/tennis-images/shoes-tennis.webp",
        title: "SHOES"
        
    },
    {
        img: "../assets/images/tennis-images/tennis_Bag_.webp",
        title: "BAGS"
        
    },
    {
        img: "../assets/images/tennis-images/accessories-tennis.webp",
        title: "ACCESSORIES"
        
    },
    {
        img: "../assets/images/tennis-images/tennis-athlete.webp",
        title: "ATHLETES"
        
    },
]
// runningobj
const runningObj = [
    {
        img: "../assets/images/running-images/shoe-orange.webp",
        title: "MEN"
        
    },
    {
        img: "../assets/images/running-images/shoe-white.webp",
        title: "WOMEN"
        
    },
    {
        img: "../assets/images/running-images/shoe-brown.webp",
        title: "UNISEX"
        
    },
]
// snowboardobj
const snowboardObj = [
    {
        img: "../assets/images/snowboard-images/skate.webp",
        title: "BOARD"
        
    },
    {
        img: "../assets/images/snowboard-images/skate-shoe.webp",
        title: "BOOT & BINDING"
        
    },
    {
        img: "../assets/images/snowboard-images/skate-coat.webp",
        title: "APPAREL"
        
    },
    {
        img: "../assets/images/snowboard-images/skate-glove.webp",
        title: "ACCESSORIES"
        
    },
]
// Sports card component
class CardComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="flex justify-between gap-3 max-w-[1600px] items-center flex-1">
                ${arrObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center">
                            <img src="${card.img}" alt="" class="" >
                            <p class="font-semibold text-[18px] ">${card.title}</p>
                        </div>
                    `
                }).join("")}
            </div>
            `
    } 
}
customElements.define("card-component", CardComponent);

// Baminton component
class BadmintonComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
                ${badmintonObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                            <a href=""><img src="${card.img}" alt=""></a>
                            <p class="font-semibold text-[15px] text-black">${card.title}</p>
                        </div>
                    `
                    }).join("")}
            </div>
            `;
    }
}
customElements.define("badminton-component", BadmintonComponent);

// Golf component
class GolfComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${golfObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center ">
                    <a href="" class="bg-[#f7f8f9]"><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[15px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("golf-component", GolfComponent);

// Tennis component
class TennisComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${tennisObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center ">
                    <a href="" class="bg-[#f7f8f9]"><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[15px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("tennis-component", TennisComponent);

// Running component
class RunningComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex justify-between gap-4 max-w-[1600px] items-center w-[700px] flex-1">
        ${runningObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center gap-2">
                    <a href="" class="bg-[#f7f8f9]"><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[15px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("running-component", RunningComponent);

// Snowboard component
class SnowboardComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex justify-between gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${snowboardObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center ">
                    <a href="" class="bg-[#f7f8f9]"><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[15px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("snowboard-component", SnowboardComponent);

// badminton
function hoverDrop(){
    document.querySelector('#baminton').classList.toggle('hidden')
}
function hoverHide(){
    document.querySelector('#baminton').classList.toggle('hidden')
}
// GOLF Hover
function golfDrop(){
    document.querySelector('#golf').classList.toggle('hidden')
}
function golfHide(){
    document.querySelector('#golf').classList.toggle('hidden')
}
// tennis Hover
function tennisDrop(){
    document.querySelector('#tennis').classList.toggle('hidden')
}
function tennisHide(){
    document.querySelector('#tennis').classList.toggle('hidden')
}
// running Hover
function runningDrop(){
    document.querySelector('#running').classList.toggle('hidden')
}
function runningHide(){
    document.querySelector('#running').classList.toggle('hidden')
}
// snowboard Hover
function snowboardDrop(){
    document.querySelector('#snowboard').classList.toggle('hidden')
}
function snowboardHide(){
    document.querySelector('#snowboard').classList.toggle('hidden')
}
// about Hover
function aboutDrop(){
    document.querySelector('#about').classList.toggle('hidden')
}
function aboutHide(){
    document.querySelector('#about').classList.toggle('hidden')
}