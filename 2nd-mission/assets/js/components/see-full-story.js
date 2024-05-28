import { categories, categoriesRoland } from "../data/see-full-story-data.js"

const blogData = {
    'categories' : categories,
    'categories-roland' : categoriesRoland,

}

const createBlog = (data) => {
    return `
        ${data.map((blog) => `
            <div class="w-full h-[100px] mt-[150px] mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-[13px] font-sans max-md:mt-0">
                <div class="flex-wrap gap-4 hidden sm:flex">
                    <div>
                        <a href="" class="text-blue-800 mr-[5px] hover:underline">Home</a>
                        <span class="mr-[5px]">/</span>
                    </div>
                    <div>
                        <a href="" class="text-blue-800 mr-[5px] hover:underline">News</a>
                        <span class="mr-[5px]">/</span>
                    </div>
                    <div>
                        <a href="" class="text-blue-800 mr-[5px] hover:underline">${blog.titleCatgories}</a>
                        <span class="mr-[5px]">/</span>
                    </div>
                    <div>
                        <div class="uppercase">${blog.titleSubCatgories}</div>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 sm:px-6 lg:px-8">
                <div class="content-img max-w-[950px] mb-[90px] mx-auto font-sans-serif">
                    <div class="date-and-title">
                        <div class="text-gray-400 text-[12px] sm:text-[14px] md:text-[16px] mb-[5px] sm:mb-[10px]">
                            <p>${blog.title}</p>
                        </div>
                        <div class="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] mb-[10px] sm:mb-[15px] md:mb-[20px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[50px]">
                            <h1 class="text-center sm:text-left">${blog.titleSubCatgories}</h1>
                        </div>
                        <div class="flex justify-center sm:justify-start">
                            <img class="w-full max-w-md sm:max-w-full" src="${blog.img}" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional content loop -->
            <div class="content flex md:max-w-[950px] mx-auto justify-between">
                <div class="socail-media max-lg:hidden mr-20">
                    <div class="social-logo w-[46px] h-[135px]">
                        <div class="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-full mb-2"><a href=""><img
                                class="w-[20px] h-[20px] hover:opacity-45" src="../assets/images/news-img/facebook-app-symbol.png "
                                alt="facebook's logo" ></a>
                        </div>
                        <div class="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-full mb-2"><a href=""><img
                                class="w-[20px] h-[20px] hover:opacity-45" src="../assets/images/news-img/twitter.png "
                                alt="twitter's logo"></div ></a>
                        <div class="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-full mb-2"><a href=""><img
                                class="w-[20px] h-[20px] hover:opacity-45" src="../assets/images/news-img/email.png " alt="email's logo"></a>
                        </div >
                    </div>
                </div>
            ${blog.additionalContent.map(content => `
                <div class="article md:max-w-[950px] px-[20px] mx-auto text-[16px] mb-[16px] text-[#737A7E] font-sans">
                    <p class="mb-[40px]">${content.info}</p>
                    <p class="mb-[40px]">${content.info2}</p>
                    <p class="mb-[40px]">${content.info3}</p>
                    <p class="mb-[40px]">${content.info4}</p>
                    <p class="mb-[40px]">${content.info5}</p>
                    <p class="mb-[40px]">${content.info6}</p>
                    <p class="mb-[40px]">${content.info7}</p>
                    <p class="mb-[40px]">${content.info8}</p>
                    <p class="mb-[40px]">${content.info9}</p>
                    <p class="mb-[40px]">${content.info10}</p>
                    <p class="mb-[40px]">${content.info11}</p>

                    <p class="mb-[5px] font-bold">${content.infoTitle}</p>
                    <p>${content.infoSubTitle}
                        <a class="text-blue-700 hover:underline" href="#">${content.infoLink}</a>
                    </p>
                    <p>${content.infoSubTitle2}
                        <a class="text-blue-700 hover:underline" href="#">${content.infoLink2}</a>
                    </p>
                    <p>${content.infoSubTitle3}
                        <a class="text-blue-700 hover:underline" href="#">${content.infoLink3}</a>
                    </p>

                    <div class="socail-media flex items-center mt-[80px] gap-6">
                            <h3 class="font-bold text-black">SHARE:</h3>
                            <div class="flex gap-3">
                                <div class=" w-[30px] h-[30px] flex justify-center items-center rounded-full mb-2"><a href="">
                                    <img
                                    class="w-[30px] h-[30px] hover:opacity-45" src="../assets/images/icons/facebook-icon.svg"
                                    alt="facebook's logo" ></a>
                                </div>
                                <div class=" w-[30px] h-[30px] flex justify-center items-center rounded-full mb-2"><a href="">
                                        <img
                                        class="w-[30px] h-[30px] hover:opacity-45" src="../assets/images/icons/twitter_icon.svg"
                                        alt="twitter's logo"></div></a>
                                <div class=" w-[30px] h-[30px] flex justify-center items-center rounded-full mb-2"><a href=""><img
                                        class="w-[30px] h-[30px] hover:opacity-45" src="../assets/images/icons/mail_icon.svg" alt="email's logo"></a>
                                </div >
                            </div>       
                        </div> 
                </div>
            `).join('')}   
            </div> 
        </div>
        `).join('')}
    `;
};



class CreateBlog extends HTMLElement {
    connectedCallback () {
        const dataSource = this.getAttribute("categories")
        const data = blogData[dataSource] || []
        this.innerHTML = createBlog(data)


    }
}



customElements.define('title-categories', CreateBlog )


































