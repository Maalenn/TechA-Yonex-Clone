const LatestNews = [
  {
    img: "https://www.yonex.com/media/wysiwyg/news/badminton/news_240322_960.jpg",
    date: "March 17, 2024",
    des: "YONEX All England 2024: Team Yonex Collecting titles and trophies",
    link: "",
  },
  {
    img: "https://www.yonex.com/media/wysiwyg/news/badminton/news_240322_960.jpg",
    date: "March 17, 2024",
    des: "YONEX All England 2024: Team Yonex Collecting titles and trophies",
    link: "",
  },
  {
    img: "https://www.yonex.com/media/wysiwyg/news/badminton/news_240322_960.jpg",
    date: "March 17, 2024",
    des: "YONEX All England 2024: Team Yonex Collecting titles and trophies",
    link: "",
  },
  



]

const LatestNewCard = (contents) => {
  return `
  ${contents.map((content) => `
    <div class="latest-posts__item__image-wrapper w-full bg-white">
        <img
          src="${content.img}"
          alt="image"
          title=""
          class="latest-posts__item__image img-center-auto max-w-auto h-100%"
        />
      </div>
      <div
        class="latest-posts__item__content-wrapper bg-[#fff] pl-[21px] pb-[44px] relative w-full"
      >
        <p
          class="latest-posts__item__date text-[#595959] font-[400] text-[14px] mt-[30px] mb-[10px] tracking-[.2px]"
        >
          ${content.date}
        </p>
        <h3
          class="latest-posts__item__title md:h-[50px] md:overflow-hidden text-[#1f2427] text-[20px] font-[700] leading-[26px] mb-[24px] pr-[10%]"
        >
        ${content.des}
        </h3>
        <a
          href="${content.link}"
          class="latest-posts__item__link"
          aria-label="YONEX All England 2024:  Team Yonex Collecting titles and trophies"
        >
          <span
            class="latest-posts__item__link__text text-[#006cb7] text-[16px] font-[700] tracking-[.3px]"
            >Read Full Story ></span
          >
        </a>
      </div>
    </div>
      `).join("")}
  
  `
}


class LatestNewsSmCard extends HTMLElement {
  connectedCallback(){
    this.innerHTML = LatestNewCard(LatestNews)
  }
}


customElements.define('latest-news-sm-card', LatestNewsSmCard)