let currentSlides = 0;
function pushArrows(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  currentSlides = Math.max(0, Math.min(currentSlides + n, images.length - 1));
  carousel.scrollTo({ left: currentSlides * imageWidth, behavior: "smooth" });
}
