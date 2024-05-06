let currentSlide = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: "smooth" });
}



// Pagination
const allBtn = document.querySelectorAll(".btn");
const paginationContainer = document.querySelector(".pagination-container");

paginationContainer.addEventListener("click", (e) => {
  const btnTarget = e.target;
  allBtn.forEach((btn) => {
    btn.classList.remove("activeBg");
    btnTarget.classList.add("activeBg")
  });
});