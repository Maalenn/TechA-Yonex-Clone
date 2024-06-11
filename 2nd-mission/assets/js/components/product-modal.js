class ProductModal extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <section id="modal" class="w-full h-full fixed top-[20%] flex justify-center z-[100] hidden">
                <!-- modal -->
                <div class="modal bg-white max-w-[710px] max-h-[1835px] md:max-h-[719px] relative shadow-lg">
                    <!-- x button -->
                    <button id="xBtn" class="bg-white absolute right-[-40px] top-[-40px] z-10 w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="px-[30px] pb-[30px] flex flex-col gap-5">
                        <!-- upper content -->
                        <div class="flex flex-col md:flex-row md:justify-between font-semibold uppercase my-[35px]">
                            <div class="flex flex-col items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" width="25" height="25" fill="#F5EB43">
                                <path d="M490,474.459H0L245.009,15.541L490,474.459z"></path>
                                </svg>
                                <span>Main start</span>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="25" height="25" fill="#F5EB43">
                                <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"></path>
                                </svg>
                                <span>Main tie off</span>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" width="25" height="25" fill="#c5d0db">
                                <path d="M490,474.459H0L245.009,15.541L490,474.459z"></path>
                                </svg>
                                <span>Cross Start</span>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="25" height="25" fill="#c5d0db">
                                <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"></path>
                                </svg>
                                <span>Cross Tie off</span>
                            </div>
                        </div>
                        <!-- bottom content -->
                        <div class="flex flex-col md:flex-row md:justify-between font-oswald">
                            <div class="flex flex-col">
                                <h3 class="mb-[11px] mt-[22px] font-extrabold text-[24px] uppercase">Astrox 88 D game</h3>
                                <table>
                                <tr>
                                    <td class="p-[11px] border">
                                    <h5 class="my-[22px] font-semibold uppercase">Main tie off:</h5>
                                    <p class="font-sans text-[14px] text-secondary-200">b8, B8</p>
                                    </td>
                                    <td class="p-[11px] border">
                                    <h5 class="my-[22px] font-semibold uppercase">Cross tie off:</h5>
                                    <p class="font-sans text-[14px] text-secondary-200">A5</p>
                                    </td>
                                </tr>
                                </table>
                                <h4 class="my-[18px] font-bold text-[18px] uppercase">Mains</h4>
                                <p class="font-sans text-[14px] text-secondary-200">
                                Start from top center, keep on stringing until B9 (skip A7, A9 & A11). Go through B12, directly to A16, and then straight to A14, down to B10 and tie off at B8. (Opposite side: the same procedure).
                                </p>
                                <h4 class="my-[18px] font-bold text-[18px] uppercase">Crosses</h4>
                                <p class="font-sans text-[14px] text-secondary-200">
                                Make a knot at B6 and start crosses from B9. Keep on stringing until A7 (skip A12 & A10), then directly to A5 and tie off .
                                </p>
                            </div>
                            <div class="shrink-0">
                                <img src="../assets/images/productPage/stringDetail.png" class="md:w-[345px] md:h-[527px]" alt="String detail image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define('product-modal', ProductModal)