import {BadmintonAthleteDataEquipment} from '../data/athlete-equip-data.js'

const equipDataSource = {
    'equipImg' :  BadmintonAthleteDataEquipment
}

const EquipmentContainer = (listEquipments) => {
    return `
    <div class="slideShow no-scrollbar grid grid-cols-[repeat(2,400px)] min-[345px]:grid-cols-[repeat(2,500px)] min-[475px]:grid-cols-[repeat(2,700px)]  overflow-auto md:flex md:justify-between my-0 mx-auto max-w-[1160px] ">
        ${listEquipments.map((equipli) =>  `
        <div class="slide-list flex flex-col w-[100%] items-center md:max-w[400px]  ">
            <a href="#equip"><img class="w-[350px] md:w-[300px] mx-auto" src="${equipli.equipimag}" alt=""></a>
            <span class="h-[50px] text-[18px] md:mt-[26px] md:mr-auto md:mb-[170px] md:ml-auto md:min-h[50px] md:text-center">
                ${equipli.productname}
            </span>
        </div>
        
        `).join("")}
        
        <div class="back absolute top-[47%] right-[30px] bg-[#f3f2f2] p-5 md:hidden"
            onclick="slideArrow(1)">
            <img class="w-[1.5rem]" src="../assets/images/icon/arrow-right.svg" alt="" />
        </div>
        <div class="next absolute top-[47%] left-[30px] bg-[#f3f2f2] p-5 md:hidden"
            onclick="slideArrow(-1)">
            <img class="w-[1.5rem]" src="../assets/images/icon/arrow-left.svg"" alt="" />
        </div>
    </div>
    `
}

class ListComponent extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute("data-source")
        const dataSourceKey = equipDataSource[dataAtt]
        this.innerHTML = EquipmentContainer(dataSourceKey)
    }
}
customElements.define("li-equipment", ListComponent)






let curSlides = 0;
function slideArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  curSlides = Math.max(0, Math.min(curSlides + n, images.length - 1));
  carousel.scrollTo({ left: curSlides * imageWidth, behavior: "smooth" });
}



