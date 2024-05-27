import {sidebarBadminton} from "../data/product-review-sidebar-data.js";

const dataSources = {
  "sidebarLeft-badminton": sidebarBadminton[0].badmintonOption
};

const SideBarContainer = (sidebarLeftContents) => {
    return `
    <section class="sm:hidden md:flex max-sm:hidden pl-10 font-sans">
    <ul class="flex flex-col gap-6 text-[#575555] w-[100%]">
        ${sidebarLeftContents.map(item => `
            <li class=""><a href="#" class="hover:border-b-black hover:border-b-2 transition duration-75">${item}</a></li>
        `).join('')}
        <h4 class="text-black font-[500]">COMPARE PRODUCTS</h4>
        <h4>Select up to 5 Products</h4>
    </ul>
    </section>
    `;
  };

class SideBar extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource] ;
    this.innerHTML = SideBarContainer(data);
  }
}

customElements.define("sidebarleft-component", SideBar)