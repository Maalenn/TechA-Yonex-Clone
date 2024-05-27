class ZoomImg extends HTMLElement {
  
  connectedCallback(){
    const zoomImg = this.getAttribute('zoomImg')

    this.innerHTML = `
    <div id="imgZoom" class="w-full h-screen fixed top-0 left-0 bg-white hidden z-[100] cursor-zoom-in">
      <div class="relative">
          <!-- plus icon -->
          <button class="absolute p-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[50px] h-[50px] fill-[#A3A3A3]">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>                            
          </button>
          <!-- minus icon -->
          <button class="absolute top-[60px] p-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[50px] h-[50px] fill-[#A3A3A3]">
                  <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>                             
          </button>
          <!-- x icon -->
          <button id="x-close" class="absolute top-0 right-0 p-[10px] z-[1000]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[40px] h-[40px] fill-[#A3A3A3]">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>                                                     
          </button>
          
      </div>      
      <!-- image container -->
      <div id="image-container" class="">
          <img class="min-w-[750px] min-h-[1000px] mx-auto" src="${zoomImg}" alt="">
      </div>
    </div>
    `
  }
}

customElements.define('zoom-img', ZoomImg)