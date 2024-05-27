import { categories } from "../data/see-full-story-data.js"

const blogData = {
    'categories' : categories,

}

const createBlog = (data) => {
    return `
        ${data.map((blog) => `
            <div class="w-full h-[100px] mt-[150px] mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-[16px] font-sans max-md:mt-0">
                <div class="flex-wrap gap-4 hidden sm:flex">
                    <div>
                        <a href="" class="text-blue-800">Home</a>
                        <span class="m-[7px]">/</span>
                    </div>
                    <div>
                        <a href="" class="text-blue-800">News</a>
                        <span class="m-[7px]">/</span>
                    </div>
                    <div>
                        <a href="" class="text-blue-800">${blog.titleCatgories}</a>
                        <span class="m-[7px]">/</span>
                    </div>
                    <div>
                        <div>${blog.titleSubCatgories}</div>
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
            ${blog.additionalContent.map(content => `
                <div class="article text-[16px] mb-[16px] max-w-full text-[#737A7E] font-sans mx-[13px]">
                    <p>${content}</p>
                </div>
            `).join('')}
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


































