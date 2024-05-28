const TabMenu = [
  {
    link: "news.html",
    title: "All"
  },
  {
    link: "news-badminton.html",
    title: "Badminton"
  },
  {
    link: "news-tennis.html",
    title: "Tennis"
  },
  {
    link: "news-golf.html",
    title: "Golf"
  },
  {
    link: "news-general.html",
    title: "General"
  },

]

const TabMenuContainer = (tabItems) => {
  return `
    <div class="border-b-[1px] text-[#6e7677] font-[Oswald] uppercase font-[400] mb-[50px] overflow-x-auto">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <ul id="tab-all" class="flex items-center space-x-1 sm:space-x-[40px] md:space-x-[60px] lg:space-x-[90px] text-sm md:text-md lg:text-lg">
            ${tabItems.map((item) => `
              <li>
                <a href="${item.link}"
                  class="nav-link inline-block py-3 px-4 md:py-4 md:px-6 lg:px-8 hover:text-[#000000] hover:border-blue-500 border-b-2 border-transparent text-[14px] tracking-[3px]"
                  >
                  ${item.title}
                </a>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
};


class NewsTabMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = TabMenuContainer(TabMenu);
  }
}

customElements.define("news-tab-menu", NewsTabMenu);

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to highlight the current link based on the current URL
  function highlightCurrentLink() {
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('border-blue-500');
        link.classList.add('text-black');
      }
    });
  }

  highlightCurrentLink(); // Highlight the current link when the page loads

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(nav => nav.classList.remove('border-blue-500'));
      this.classList.add('border-blue-500');
    });
  });
});
