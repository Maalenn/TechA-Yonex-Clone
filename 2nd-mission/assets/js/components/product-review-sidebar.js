import {sidebarBadminton} from "../data/product-review-sidebar-data.js";

const dataSources = {
  "sidebar-badminton": sidebarBadminton[0]
};

const SideBarContainer = (sidebarContents) => {
    return `
      <section class="flex w-full justify-end max-w-[1280px] mx-auto pr-10 sm:flex md:hidden">
        <form class="">
          <select id="countries" class="text-[16px] p-3 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-[#1b1a1a] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            ${sidebarContents.badmintonOption.map(item => `
              <option value="${item}">${item}</option>
            `).join('')}
          </select>
        </form>
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

customElements.define("sidebar-component", SideBar)
