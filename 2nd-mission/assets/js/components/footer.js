// start footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-[#24292b] h-[870px] md:h-[370px] mt-[200px]">
            <div class="max-w-[1300px] mx-auto px-3">
                <div class="md:justify-between md:items-center md:flex md:h-[50%] md:flex-row flex-col">
                    <div class="flex items-center justify-center">
                        <a href="index.html">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/Yonex_Logo.svg" alt="" class="items-center flex justify-center size-[130px] Logo">
                        </a>
                    </div>
                    
                    <div
                class="flex justify-between items-center md:gap-6 md:px-0 px-3"
            >
                <img
                src="/tech-a-project/2nd-mission/assets/images/icons/facebook-icon.svg"
                alt="facebook-icon"
                class="size-[40px] "
                />
                <img
                src="/tech-a-project/2nd-mission/assets/images/icons/twitter_icon.svg"
                alt="twittter-icon"
                class="size-[40px]"
                />
                <img
                src="/tech-a-project/2nd-mission/assets/images/icons/youtube_icon.svg"
                alt="youtube-icon"
                class="size-[40px]"
                />
                <img
                src="/tech-a-project/2nd-mission/assets/images/icons/instagram_icon.svg"
                alt="instagram-icon"
                class="size-[40px] "
                />
            </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div>
                        <ul class="md:flex md:flex-row gap-4 text-[#f5f5f5] text-[15px] py-2 flex flex-col justify-center items-center font-[Oswald] ">
                            <li class="tracking-[2px]">BADMINTON</li>
                            <li class="tracking-[2px]">GOLF</li>
                            <li class="tracking-[2px]">TENNIS</li>
                            <li class="tracking-[2px]">RUNNING</li>
                            <li class="tracking-[2px]">SNOWBOARDING</li>
                        </ul>
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30 ">
                    <div class="flex items-center justify-center">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/menu-icons/accessibility_icon.svg" alt="" class="size-[50px] cursor-pointer">
                    </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        © 2012-2024 YONEX Co., Ltd.
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        <a href="">Terms & Conditions</a>
                        <a href=""> Accessibility </a>
                        <a href="">Privacy Policy</a>
                        <a href="">Using Yonex Products Safely</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('my-footer', Footer)

