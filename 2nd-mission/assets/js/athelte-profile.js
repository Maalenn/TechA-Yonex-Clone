let curSlides = 0;
function slideArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  curSlides = Math.max(0, Math.min(curSlides + n, images.length - 1));
  carousel.scrollTo({ left: curSlides * imageWidth, behavior: "smooth" });
}