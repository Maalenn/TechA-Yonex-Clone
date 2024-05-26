import { LatestNews, LatestNews2 } from '../data/all-news-data.js';

        const dataSources = {
            'card-data': LatestNews,
            'card-data2': LatestNews2
        };

const LatestNewCard = (contents) => {
  return `
  <div class="latest-posts__item md:mb-[80px] md:flex justify-between gap-[20px] items-center pb-[25px]">
      ${contents.map((content) => `
          <div class="md:max-w-[360px]">
              <div class="latest-posts__item__image-wrapper bg-white">
                <img
                  src="${content.img}"
                  alt="image"
                  title=""
                  class="latest-posts__item__image img-center-auto">
              <div
                  class="latest-posts__item__content-wrapper bg-[#fff] pl-[21px] pb-[44px]">
                  <p
                    class="latest-posts__item__date text-[#595959] font-[400] text-[14px] mb-[10px] tracking-[.2px]">
                    ${content.date}
                  </p>
                  <h3
                    class="latest-posts__item__title md:h-[50px] md:overflow-hidden text-[#1f2427] text-[20px] font-[700] leading-[26px] mb-[24px] pr-[10%]">
                  ${content.des}
                  </h3>
                  <a
                    href="${content.link}"
                    class="latest-posts__item__link"
                    aria-label="YONEX All England 2024:  Team Yonex Collecting titles and trophies">
                    <span
                      class="latest-posts__item__link__text text-[#006cb7] text-[16px] font-[700] tracking-[.3px]">Read Full Story></span>
                  </a>
              </div>
          </div>
        </div>

        <div class="social-logo flex-row justify-between w-[92px] absolute top-[43%] right-3 hidden">
            <div class="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full "><img
                class="w-[16px] h-[16px] " src="../assets/images/news-img/facebook-app-symbol.png " alt="facebook's logo">
            </div>
            <div class="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full ">
              <img class="w-[16px] h-[16px] " src="../assets/images/news-img/twitter.png " alt="twitter's logo">
            </div>
            <div class="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full ">
              <img
                class="w-[16px] h-[16px] " src="../assets/images/news-img/email.png " alt="email's logo">
            </div>
        </div>

      `).join("")}
    </div>
  `;
};

class LatestNewsSmCard extends HTMLElement {
  connectedCallback() {
      const dataSource = this.getAttribute('data-source');
      const data = dataSources[dataSource] || LatestNews;
      this.innerHTML = LatestNewCard(data);
  }
}

customElements.define('latest-news-sm-card', LatestNewsSmCard);