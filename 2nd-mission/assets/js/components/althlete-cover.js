class CoverComponent extends HTMLElement {

    connectedCallback(){
      const coverimg = this.getAttribute("coverimg")
      const athletename = this.getAttribute("athletename")
      const sportype = this.getAttribute("sportype")
  
      this.innerHTML = `
  
          <div class="flex flex-col relative justify-center mb-[110px] max-md:mt-[50px] mt-[100px]">
                  <img class="w-100%" src="${coverimg}" alt="person">
                  
                  <div class="flex relative justify-center ">
                      <div class="absolute w-[310px]  md:w-[640px] h-[70px] md:h-[113px] bg-[#006cb7]
                      text-white py-5  px-8 bottom-[-63px] md:bottom-[-80px] text-center ">
                          <div class="name">
                              <span class="italic text-[24px] mb-[-3px] md:text-4xl tracking-[0.2em] uppercase m-0">${athletename}</span>
                          </div>
                          <div class="text-[16px] md:text-lg mb-[12px] font-[Figtree]">
                              <span>${sportype}</span>
                          </div>
                      </div>
                  </div>
                  
          </div>
  
      `
    }
  }
  
  customElements.define("cover-component", CoverComponent)