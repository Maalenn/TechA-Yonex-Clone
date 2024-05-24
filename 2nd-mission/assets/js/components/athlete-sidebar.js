class SidebarComponent extends HTMLElement {

    connectedCallback(){
      const carrer = this.getAttribute("carrer")
      const achievement = this.getAttribute("achievement")
      const equipment = this.getAttribute("equipment")
  
      this.innerHTML = `
  
      
        <div class="uppercase  border-b lg:border-none lg:w-[200px] lg:ml-auto lg:text-left lg:pl-[40px] lg:pb-[40px] ">
            <ul class=" flex flex-row justify-around lg:flex-col tracking-[2px] text-[#737a7e] ">
                <li class="mb-[2px] lg:mb-[40px]"><a href="#career">${carrer}</a></li>
                <li class="mb-[2px] lg:mb-[40px]"><a href="#achievement">${achievement}</a></li>
                <li class="max-[399px]:hidden sm:mb-[2px] lg:mb-[20px]"><a href="#equipment">${equipment}</a>
                </li>
            </ul>
        </div>
  
      `
    }
  }
  
  customElements.define("sidebar-component", SidebarComponent)