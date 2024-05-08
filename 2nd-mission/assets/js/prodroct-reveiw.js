let currentSlide = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: "smooth" });
}



// Pagination
// const allBtn = document.querySelectorAll(".btn");
// const paginationContainer = document.querySelector(".pagination-container");

// paginationContainer.addEventListener("click", (e) => {
//   const btnId = e.target.dataset.id;
//   allBtn.forEach((btn) => {
//     if(btnId){
//       btn.classList.remove("activeBg");
//       e.target.classList.add("activeBg")
//     }
//   });

// });

// pagination click
// let currentNum = 0;
// function moveNum(n) {
//   const carousel = document.querySelector(" .pagination-container ");
//   const images = carousel.querySelectorAll(".num-list");
//   const moveImg = querySelectorAll(".num-list")
//   moveImg.toggle("bg-black")
//   const imageWidth = images[0].clientWidth;
//   currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1));
//   carousel.scrollTo({ left: currentSlide * imageWidth, behavior: "smooth" });
// }

