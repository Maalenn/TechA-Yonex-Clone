class Navbar extends HTMLElement {
    connectedCallback(){
        const bgColor = this.getAttribute('bg-color')
        this.innerHTML = `
        <div class="bg-black opacity-50 w-full hidden h-screen fixed z-[9000] overlay-page " id="overlay-blur" ></div>
        <nav
        class="w-full ${bgColor} absolute md:bg-opacity-40 hover:bg-white hover:text-black bg-white border border-1 top-0 z-[9000] font-Oswald" id="navbar"
      >
        <div
          class="h-[60px] flex justify-between max-w-[1600px] mx-auto items-center md:h-[100px] lg:px-6 px-3"
        >
          <!-- Hamburger Icons -->
          <div class="block cursor-pointer md:hidden ml-3" onclick="openNav()" id="hamburger-logo"> 
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
          </div>
          <div class="hidden" id="close-sidebar" onclick="closeNav()">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="relative right-0 w-[35px] top-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          </div>
          <!-- Logo -->
          <div>
            <a href="index.html">
              <img
              src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/Yonex_Logo.svg"
              alt=""
              class="w-[140px] Logo px-[10px] py-3"
            />
          </a>
            <p class="my-0 text-xs text-center hidden md:block">
              far beyond ordinary
            </p>
          </div>
  
          <!-- Center Navigation -->
          <div
            class="hidden font-meduim lg:text-[14px] md:flex items-center justify-between h-[100px] max-lg:text-[12px]"
          >
            <!-- Badminton Hoverdrop -->
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(1)"  onmouseleave="hoverHide(-1)">
              <a href="/tech-a-project/2nd-mission/public/product-review-badminton.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">BADMINTON</a>
              <!-- Badminton section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="badminton" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="badminton-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(2)"  onmouseleave="hoverHide(-2)">
              <a href="/tech-a-project/2nd-mission/public/product-review-tennis.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">TENNIS</a>
              <!-- Tennis section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="tennis" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="tennis-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(3)"  onmouseleave="hoverHide(-3)">
              <a href="/tech-a-project/2nd-mission/public/product-review-golf.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">GOLF</a>
              <!-- Golf section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="golf" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="golf-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
            
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(4)"  onmouseleave="hoverHide(-4)">
              <a href="/tech-a-project/2nd-mission/public/product-review-allRunning.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">RUNNING</a>
              <!-- Running section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="running" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="running-obj" grid-style="grid-cols-3 pl-5 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(5)"  onmouseleave="hoverHide(-5)">
              <a href="/tech-a-project/2nd-mission/public/product-review-snowboarding.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">SNOWBOARDING</a>
              <!-- Snowboarding section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="snowboard" >
                <div id="" class="max-w-[95%] mx-auto p-[40px] pb-[20px]">
                  <div class="max-w-[900px] mx-auto flex mb-4 justify-center flex-col gap-3">
                    <card-slide data-source="snowboarding-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                    <div class="flex max-w-[1200px] mx-auto">
                        <div class="flex flex-col items-center justify-center w-[213px]">
                            <a id="hoverLink" href="/tech-a-project/2nd-mission/public/athletes-snowboarding.html" class="bg-[#F7F8FA]"><img src="/tech-a-project/2nd-mission/assets/images/snowboard-images/skate-athlete.webp" alt=""></a>
                            <p class="text-[16px] text-black tracking-[1.5px] pt-2">TEAM</p>
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        
            <div class="cursor-pointer hover:opacity-80 h-full pt-[30px] px-5 max-[940px]:px-2">
              <a href="news.html" class="relative top-[7%] pb-4 text-[13px] tracking-[1px] font-[500]">NEWS</a>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(6)"  onmouseleave="hoverHide(-6)">
              <a href="#" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">ABOUT</a>
              <!-- About section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-300 ease-in-out z-[10000] left-0" id="about" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="about-obj" grid-style="grid-cols-6 gap-6"></card-slide>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button onclick="opensearchresponse()" class="inline-block cursor-pointer md:hidden mr-3">
            <img src="/tech-a-project/2nd-mission/assets/images/icons/search-interface-symbol (1).png" alt="" class="size-4"/>
          </button>
          <div class="bg-white items-center gap-2 justify-between shadow-md absolute top-0 -left-[2px] w-full py-[15px] hidden" id="search-bar2">
            <input type="text" placeholder="Search" class="w-full pl-3 h-full">
            <button onclick="closesearchresponse()" class="size-[30px]">
              <img src="/tech-a-project/2nd-mission/assets/images/icons/close.svg" alt="" class="bg-[#6E7677] rounded-[50%] size-[16px]"/>
            </button>
          </div>
          <div class="w-[120px] fill-slate-100 items-center gap-3 md:flex hidden relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>          
            <div class="mt-1">
              <button onclick="opensearch()" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>       
              </button>
              <div class="bg-white items-center gap-2 justify-between shadow-md absolute md:right-16 top-0 md:w-[300px] max-md:px-3 py-4 hidden" id="search-bar">
                <button class="md:block hidden size-[30px] ml-3 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-2 flex-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>  
                </button>
                <input type="text" placeholder="Search" class="pr-20">
                <button onclick="closesearch()" class="size-[30px]">
                  <img src="/tech-a-project/2nd-mission/assets/images/icons/close.svg" alt="" class="bg-[#6E7677] rounded-[50%] size-[16px]"/>
                </button>
              </div>
            </div>
               
            <img
              src="/tech-a-project/2nd-mission/assets/images/icons/accessibility_icon.svg"
              alt=""
              class="max-w-[50px] cursor-pointer mb-[7.5px] flex-shrink"
            />
          </div>
        </div>
        
      </nav>
        `
    }
}
customElements.define('my-navbar', Navbar)