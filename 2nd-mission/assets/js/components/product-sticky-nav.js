class ProductStickyNav extends HTMLElement {
  connectedCallback(){
    const prodName = this.getAttribute("prodName");
    const menuLinks = JSON.parse(this.getAttribute("menuLinks")); // Parse menuLinks as JSON

    const createMenuItems = () => {
      return menuLinks.map(({ href, link }) => `
        <li>
          <a href="${href}" id="${href}" class="sticky-nav-element text-[#6e7677] relative uppercase transition duration-600 ease-linear">${link}</a>
        </li>
      `).join('');
    };


    this.innerHTML = `
    <div class="sticky-nav-container bg-white z-50 h-[90px] px-[60px] w-full flex items-center justify-center border absolute left-0 max-lg:p-0 max-lg:h-[50px]">
      <div class="navigation-bar flex justify-between items-center flex-1">
        <div class="product-name text-[#1f2427] text-[20px] uppercase tracking-widest max-lg:hidden">
          <span>${prodName}</span>
        </div>
        <ul class="sticky-nav-elements flex flex-1 items-center justify-around h-full mx-auto max-w-[700px]">
          ${createMenuItems()}
        </ul>
      </div>
      <a class="add-compare relative w-[11%] min-w-[130px] mx-[25px] max-lg:hidden text-nowrap">
        <span class="text-[#595959] text-[15px] font-bold relative capitalize font-['Lato']">Add To Compare</span>
      </a>
    </div>
    
    `;
  }
}

customElements.define('product-sticky-nav', ProductStickyNav)


const nav = document.querySelector(".sticky-nav-container");
const header = document.querySelector(".product-card");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("nav-sticky");
  else nav.classList.remove("nav-sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

// Page navigation
const navElements = document.querySelectorAll(".sticky-nav-element");
const sections = document.querySelectorAll("section");

// Add an event listener to the parent container of the navigation elements
document.querySelector(".sticky-nav-elements").addEventListener("click", function (e) {
  e.preventDefault();

  navElements.forEach(navEl => navEl.classList.remove("nav-active"));

  // Check if the clicked element has the class 'sticky-nav-element'
  if (e.target.classList.contains("sticky-nav-element")) {
    // Get the target section ID from the href attribute
    const id = e.target.getAttribute("href");
    
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });

    e.target.classList.add("nav-active");
  }
});

// Function to handle scroll and update active navigation element
const updateActiveNavOnScroll = function(entries, observer) {
  entries.forEach(entry => {
    const navEl = document.querySelector(`.sticky-nav-element[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      navElements.forEach(navEl => navEl.classList.remove("nav-active"));
      // navEl.classList.add("nav-active");
    }
  });
};

const sectionObserver = new IntersectionObserver(updateActiveNavOnScroll, {
  root: null,
  threshold: 0.5,
});


sections.forEach(section => {
  sectionObserver.observe(section);
});