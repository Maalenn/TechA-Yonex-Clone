import { LatestNews, LatestNews2, LatestNews3, LatestNews4, LatestNews5 } from '../data/all-news-data.js';
import { LatestNewsBat, LatestNewsBat2, LatestNewsBat3, LatestNewsBat4 } from '../data/news-badminton-data.js';
import { LatestNewsTen, LatestNewsTen2, LatestNewsTen3, LatestNewsTen4  } from '../data/news-tennis-data.js';
import { LatestNewsGolf, LatestNewsGolf2, LatestNewsGolf3, LatestNewsGolf4 } from '../data/news-golf-data.js';
import { LatestNewsGen, LatestNewsGen2, LatestNewsGen3, LatestNewsGen4 } from '../data/news-general-data.js';


        const dataSources = {
            'card-data': LatestNews,
            'card-data2': LatestNews2,
            'card-data3': LatestNews3,
            'card-data4': LatestNews4,
            'card-data5': LatestNews5,

            'news-bat-data': LatestNewsBat,
            'news-bat-data2': LatestNewsBat2,
            'news-bat-data3': LatestNewsBat3,
            'news-bat-data4': LatestNewsBat4,

            'news-ten-data': LatestNewsTen,
            'news-ten-data2': LatestNewsTen2,
            'news-ten-data3': LatestNewsTen3,
            'news-ten-data4': LatestNewsTen4,

            'news-golf-data': LatestNewsGolf,
            'news-golf-data2': LatestNewsGolf2,
            'news-golf-data3': LatestNewsGolf3,
            'news-golf-data4': LatestNewsGolf4,
            
            'news-gen-data': LatestNewsGen,
            'news-gen-data2': LatestNewsGen2,
            'news-gen-data3': LatestNewsGen3,
            'news-gen-data4': LatestNewsGen4,
        };

  const LatestNewCard = (contents) => {
    // Split contents into chunks of 3 items each
    const chunkedContents = [];
    for (let i = 0; i < contents.length; i += 3) {
      chunkedContents.push(contents.slice(i, i + 3));
    }
  
    return chunkedContents.map(chunk => `
      <div class="latest-posts__group md:mb-[80px] md:flex justify-between gap-[20px] items-center pb-[25px]">
        ${chunk.map(content => `
          <div class="md:max-w-[360px] relative latest-posts__item shadow-md hover:shadow-xl transition-shadow duration-300">
            <div class="latest-posts__item__image-wrapper bg-white">
              <img
                src="${content.img}"
                alt="image"
                title=""
                class="latest-posts__item__image img-center-auto">
              <div class="latest-posts__item__content-wrapper bg-[#fff] pl-[21px] pb-[44px]">
                <p class="latest-posts__item__date text-[#595959] font-[400] text-[14px] mb-[10px] tracking-[.2px]">
                  ${content.date}
                </p>
                <h3 class="latest-posts__item__title md:h-[50px] md:overflow-hidden text-[#1f2427] text-[20px] font-[700] leading-[26px] mb-[24px] pr-[10%]">
                  ${content.des}
                </h3>
                <a
                  href="${content.link}"
                  class="latest-posts__item__link"
                  aria-label="${content.title}">
                  <span class="latest-posts__item__link__text text-[#006cb7] text-[16px] font-[700] tracking-[.3px]">Read Full Story</span>
                </a>
              </div>
            </div>
            
            <div class="social-logo flex justify-between w-[92px] absolute top-[43%] right-3 hidden">

              <a href="https://www.facebook.com/yonexbadminton/" class="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full">
                <img class="w-[16px] h-[16px]" src="../assets/images/news-img/facebook-app-symbol.png" alt="facebook's logo">
              </a>
              <a href="https://x.com/yonex_com?lang=en" class="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full">
                <img class="w-[16px] h-[16px]" src="../assets/images/news-img/twitter.png" alt="twitter's logo">
              </a>
              <a href="#" class="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full">
                <img class="w-[16px] h-[16px]" src="../assets/images/news-img/email.png" alt="email's logo">
              </a>

            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  };
  
  class LatestNewsSmCard extends HTMLElement {
    connectedCallback() {
      const dataSource = this.getAttribute('data-source');
      const data = dataSources[dataSource] || LatestNews;
      this.innerHTML = LatestNewCard(data);
  
      // Add hover event listeners for all groups and items
      this.querySelectorAll('.latest-posts__item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.querySelector('.social-logo').classList.remove('hidden');
        });
        item.addEventListener('mouseleave', () => {
          item.querySelector('.social-logo').classList.add('hidden');
        });
      });
    }
  }
  
  customElements.define('latest-news-sm-card', LatestNewsSmCard);
  