import { Badminton } from "../data/detail-badminton.js";

const dataSources = {
  "badminton-info": Badminton,
};

const ProductInfo = (info) => {
  return `
    ${info
      .map(
        (dataInfo) => `
    <div class="box-border md:flex justify-between gap-3 product-card mb-[20rem] max-md:mb-[5rem]">
    <!-- image container left-side-->
        <div id="imageClick" class="w-[600px] max-w-[90%] mx-auto relative block cursor-zoom-in ">
            <img class="max-w-full  top-[50%] " src="${
              dataInfo.img
            }" alt="Astrox88 Raq">
        </div>

        <!-- start product detail right-side-->
        <div class=" md:max-w-[360px] md:w-[40%]">
            <div class="mt-[32px] max-w-[642px]">
                <h1 class="uppercase text-[26px] md:text md:text-[36px] md:text-start text-center font-Oswald">
                    <span class="tracking-[5px] md:tracking-[7px]">${
                      dataInfo.title
                    }</span>
                </h1>
            </div>
            <!-- specs button -->
            <button class="specsBtn flex justify-between w-full relative mt-[60px] pt-[13px] pb-[15px]">
                <span class="font-semibold uppercase text-[14px]">Specs</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="minusIcon w-4 h-6 absolute right-3 top-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="plusIcon w-4 h-6 hidden absolute right-3 top-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                
            </button>                       
            <!-- start product detail card -->
            <div class="detailCard text-[12px] font-sans bg-white border-[1px] text-secondary-400 overflow-hidden mb-6 max-h-[850px] duration-500">
                <table class="table-container text-[12px] w-auto">
                    <tbody>
                        ${dataInfo.productSpecs
                          .map(
                            (spec) => `
                            <tr>
                                <td class="pt-[10px] px-[15px] pb-[10px]">${spec.specCaption}</td>
                                <td class="pt-[10px] px-[20px] pb-[10px]">${spec.specInfo}</td>
                            </tr>
                        `
                          )
                          .join("")}
                    </tbody>  
                </table>
            </div>
            <!-- end product detail card -->
            <!-- stringing detail button -->
            <button id="stringBtn" class="flex gap-3 text-[14px] font-sans font-bold text-secondary-400 my-[15px] cursor-pointe">
                <img class="w-[17px] h-6" src="../assets/images/icon/stringing-badminton-icon.svg" alt="">
                <span>See Stringing Instructions</span>
            </button>
            <div class="font-sans font-semibold text-[14px] flex md:hidden text-secondary-400">
                <a class="add-compare relative w-[11%] min-w-[130px] mx-[25px] text-nowrap">
                <span class="text-[#595959] text-[15px] font-bold relative capitalize font-['Lato']">Add To Compare</span>
            </a>
            </div>
            <!-- start icon container -->               
            <div class="flex justify-center md:justify-start gap-2 max-w-[800px] mx-auto">
                <a href="https://www.facebook.com/yonexbadminton">
                    <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-facebook.svg" alt="">
                </a>
                <a href="https://twitter.com/yonex_badminton?">
                    <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-twitter.svg" alt="">
                </a>
                <a href="https://www.yonex.com/badminton/racquets/3ax88s-g">
                    <img class="w-[30px] h-[30px]" src="../assets/images/icon/icon-link.svg" alt="">
                </a>
            </div> 
            <!-- end icon container -->                       
        </div>
        <!-- end product detail right-side -->
    </div>
    
    `
      )
      .join("")}
`;
};

// section component
class ProductDetail extends HTMLElement {
  connectedCallback() {
    const dataAtt = this.getAttribute("data-source");
    const dataSourceKey = dataSources[dataAtt];
    this.innerHTML = ProductInfo(dataSourceKey);
  }
}

customElements.define("product-detail-section", ProductDetail);

// show card and close card function
const specsBtn = document.querySelector(".specsBtn");
const detailCard = document.querySelector(".detailCard");
const plusIcon = document.querySelector(".plusIcon");
const minusIcon = document.querySelector(".minusIcon");
const tableContainer = document.querySelector(".table-container");

function showCard() {
  detailCard.classList.toggle("max-h-[0px]");
  // detailCard.classList.toggle('overflow-hidden')
  tableContainer.classList.toggle("hidden");
  plusIcon.classList.toggle("hidden");
}
specsBtn.addEventListener("click", showCard);

// show modal and close modal function
const stringBtn = document.querySelector("#stringBtn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#xBtn");
modal.classList.add("hidden");
function showModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

stringBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", showModal);
overlay.addEventListener("click", showModal);

// img frame
const imageClick = document.querySelector("#imageClick");
const imgZoom = document.querySelector("#imgZoom");
const xClose = document.querySelector("#x-close");
const navbar = document.getElementById("navbar");

// show product image
imageClick.addEventListener("click", () => {
  imgZoom.classList.remove("hidden");
  navbar.classList.add("hidden");
});
// close product image
xClose.addEventListener("click", () => {
  imgZoom.classList.add("hidden");
  navbar.classList.remove("hidden");
});

// Zoom into product image section
let currentZoom = 1;
let minZoom = 1;
let maxZoom = 2;
let stepSize = 0.1;
let container = document.querySelector("#image-container");

// Zoom image function
function zoomImage(direction) {
  let newZoom = currentZoom + direction * stepSize;

  // Limit the zoom level to the minimum and maximum values
  if (newZoom < minZoom || newZoom > maxZoom) {
    return;
  }

  currentZoom = newZoom;
  console.log(currentZoom);

  // Update the CSS transform of the image to scale it
  let image = document.querySelector("#image-container img");
  image.style.transform = "scale(" + currentZoom + ")";
}

container.addEventListener("wheel", function (event) {
  // Zoom in or out based on the scroll direction
  let direction = event.deltaY > 0 ? -1 : 1;
  // console.log(direction)
  zoomImage(direction);
});
