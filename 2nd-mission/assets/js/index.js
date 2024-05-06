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
        title: "CLUBS"
        
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
        title: "ATHLETES"
        
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

// Hamburger Sidebar
function openNav() {
    document.getElementById("mySidenav").classList.remove('hidden');
    document.getElementById('overlay-blur').classList.toggle('hidden');
}

function closeNav() {
    document.getElementById("mySidenav").classList.add('hidden');
    document.getElementById('overlay-blur').classList.toggle('hidden');
}


// Dropdown in sidebar
function showDropdown(x){
    if (x === 1){
        let dropdownside = document.getElementById('badminton-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 2){
        let dropdownside = document.getElementById('golf-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 3){
        let dropdownside = document.getElementById('tennis-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 4){
        let dropdownside = document.getElementById('running-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 5){
        let dropdownside = document.getElementById('snowboard-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 6){
        let dropdownside = document.getElementById('about-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 2000);
}

// functions for slideshow sport
let currentSlide1 = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  currentSlide1 = Math.max(0, Math.min(currentSlide1 + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide1 * imageWidth, behavior: "smooth" });
}
// functions for new arrival
let currentSlide2 = 0;
function pushArrow1(n) {
  const carousel = document.querySelector(" .slideShow1");
  const images = carousel.querySelectorAll(".slide-list1");
  const imageWidth = images[0].clientWidth;
  currentSlide2 = Math.max(0, Math.min(currentSlide2 + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide2 * imageWidth, behavior: "smooth" });
}

// function for switching news
let slideIndexRecent = 0;
showSlidesRecent();

function showSlidesRecent() {
    let i;
    let slides = document.getElementsByClassName("recent-slide");
    let dots = document.getElementsByClassName("dot-recent");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndexRecent++;
    if (slideIndexRecent > slides.length) {slideIndexRecent = 1}    
    slides[slideIndexRecent-1].style.display = "flex";  
    dots[slideIndexRecent-1].className += " active";
    setTimeout(showSlidesRecent, 4000);
}