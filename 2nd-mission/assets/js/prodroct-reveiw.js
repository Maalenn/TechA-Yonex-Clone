let currentSlide = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: "smooth" });
}

function clickSlide() {
  document.getElementsByClassName("list-Slide").classList.add("bg-blue-400");
}

let slideIndex = 1;
showSlides(slideIndex);