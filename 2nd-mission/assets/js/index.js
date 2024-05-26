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
//hover function for 
function hoverDrop(x){
    if (x === 1) {
        document.querySelector('#badminton').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === 2) {
        document.querySelector('#tennis').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === 3) {
        document.querySelector('#golf').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === 4) {
        document.querySelector('#running').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === 5) {
        document.querySelector('#snowboard').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === 6) {
        document.querySelector('#about').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }

  }
  function hoverHide(x){
    if (x === -1) {
        document.querySelector('#badminton').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === -2) {
        document.querySelector('#tennis').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === -3) {
        document.querySelector('#golf').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === -4) {
        document.querySelector('#running').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === -5) {
        document.querySelector('#snowboard').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
    if (x === -6) {
        document.querySelector('#about').classList.toggle('max-h-[500px]')
        document.getElementById('overlay-blur').classList.toggle('hidden');
    }
  }
// GOLF Hover
function golfDrop(){
    document.getElementById('overlay-blur').classList.toggle('hidden');

    document.querySelector('#golf').classList.toggle('max-h-[500px]')
}
function golfHide(){
    document.getElementById('overlay-blur').classList.toggle('hidden');

    document.querySelector('#golf').classList.toggle('max-h-[500px]')
}


// Hamburger Sidebar
function openNav() {
    document.getElementById("mySidenav").classList.remove('hidden');
    document.getElementById('overlay-blur').classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-y-hidden');
    
}

function closeNav() {
    document.getElementById("mySidenav").classList.add('hidden');
    document.getElementById('overlay-blur').classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-y-hidden');
    
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
    setTimeout(showSlidesRecent, 3000);
}

// functions for slider3 
let currentSlide3 = 0;
function pushArrow2(n) {
  const carousel = document.querySelector(" .slideShow2");
  const images = carousel.querySelectorAll(".slide-list2");
  const imageWidth = images[0].clientWidth;
  currentSlide3 = Math.max(0, Math.min(currentSlide3 + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide3 * imageWidth, behavior: "smooth" });
}

// function for open search
function opensearch(){
    document.getElementById('search-bar').classList.toggle('hidden')
    document.getElementById('search-bar').classList.toggle('flex')
}
function closesearch(){
    document.getElementById('search-bar').classList.toggle('hidden')
    document.getElementById('search-bar').classList.toggle('flex')
}
function opensearchresponse(){
    document.getElementById('search-bar2').classList.toggle('hidden')
    document.getElementById('search-bar2').classList.toggle('flex')
}
function closesearchresponse(){
    document.getElementById('search-bar2').classList.toggle('hidden')
    document.getElementById('search-bar2').classList.toggle('flex')
}
