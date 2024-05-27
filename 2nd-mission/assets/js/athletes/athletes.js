const pageNumbers = (total, max, current) => {
    const half = Math.floor(max / 2);
    let to = max;
    
    if(current + half >= total) {
      to = total;
    } else if(current > half) {
      to = current + half ;
    }
    
    let from = Math.max(to - max, 0);
  
    return Array.from({length: Math.min(total, max)}, (_, i) => (i + 1) + from);
  }
  
  function PaginationButton(totalPages, maxPagesVisible = 10, currentPage = 1) {
    let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    let currentPageBtn = null;
    const buttons = new Map();
    const disabled = {
      prev: () => currentPage === 1 || currentPage > totalPages,
      next: () => currentPage >= totalPages
    }
    const frag = document.createDocumentFragment();
    const paginationButtonContainer = document.createElement('div');
    paginationButtonContainer.className = 'pagination-buttons';
    
    const createAndSetupButton = (label = '', cls = '', disabled = false, handleClick) => {
      const buttonElement = document.createElement('button');
      buttonElement.textContent = label;
      buttonElement.className = `page-btn ${cls}`;
      buttonElement.disabled = disabled;
      buttonElement.addEventListener('click', e => {
        handleClick(e);
        this.update();
        paginationButtonContainer.value = currentPage;
        paginationButtonContainer.dispatchEvent(new CustomEvent('change', {detail: {currentPageBtn}}));
      });
      
      return buttonElement;
    }
    
    const onPageButtonClick = e => currentPage = Number(e.currentTarget.textContent);
    
    const onPageButtonUpdate = index => (btn) => {
      btn.textContent = pages[index];
      
      if(pages[index] === currentPage) {
        currentPageBtn.classList.remove('active');
        btn.classList.add('active');
        currentPageBtn = btn;
        currentPageBtn.focus();
      }
    };
    
    
    buttons.set(
      createAndSetupButton('<', 'prev-page', disabled.prev(), () => currentPage -= 1),
      (btn) => btn.disabled = disabled.prev()
    )
    
    pages.map((pageNumber, index) => {
      const isCurrentPage = currentPage === pageNumber;
      const button = createAndSetupButton(
        pageNumber, isCurrentPage ? 'active' : '', false, onPageButtonClick
      );
      
      if(isCurrentPage) {
        currentPageBtn = button;
      }
      
      buttons.set(button, onPageButtonUpdate(index));
    });
    
    buttons.set(
      createAndSetupButton('>', 'next-page', disabled.next(), () => currentPage += 1),
      (btn) => btn.disabled = disabled.next()
    )
    
    buttons.forEach((_, btn) => frag.appendChild(btn));
    paginationButtonContainer.appendChild(frag);
    
    this.render = (container = document.body) => {
      container.appendChild(paginationButtonContainer);
    }
    
    this.update = (newPageNumber = currentPage) => {
      currentPage = newPageNumber;
      pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
      buttons.forEach((updateButton, btn) => updateButton(btn));
    }
    
    this.onChange = (handler) => {
      paginationButtonContainer.addEventListener('change', handler);
    }
  }
  
  const paginationButtons = new PaginationButton(3, 3);
  
  paginationButtons.render();
  
  paginationButtons.onChange(e => {
    console.log('-- changed', e.target.value)
  });

  class AthleteCover extends HTMLElement {
    connectedCallback() {
        const athleteImages = {
        badminton: '../assets/images/athletes/Badminton_Athletes_Hero.webp',
        badminton2: '../assets/images/athletes/Badminton_Athletes_Hero2.webp',
        // Add more mappings as needed
};


//ANCHOR - Cover
    const id = this.getAttribute('id');
    const imageUrl = athleteImages[id] || '../assets/images/athletes/Badminton_Athletes_Hero.webp';

    this.innerHTML = `
    <div class="relative">
        <img class="object-cover h-[450px] w-full" src="${imageUrl}" alt="Athlete">
        <div class="flex justify-center">
        <p class="absolute top-[50%] text-white bg-[#00000060] text-4xl p-3 text-center">
            YONEX BADMINTON ATHLETES
        </p>
        <div class="absolute top-[88%] w-full px-[50px] max-md:px-0">
            <div class="bg-white shadow-lg md:flex mx-auto items-center justify-between md:max-w-[830px] py-5 px-[20px]">
            <div class="max-md:hidden">
                <p>FILTER BY</p>
            </div>
            <div class="max-md:flex py-1">
                <p class="pb-2 max-md:pr-8 max-md:py-2">Region</p>
                <div class="border max-md:grow">
                <select class="w-full h-[40px] px-[20px] py-[5px] max-md:grow">
                    <option value="">[Representing - All]</option>
                    <option value="Canada">
                                                Canada                        
                                            </option>
                                            <option value="China">
                                                China                        
                                            </option>
                                            <option value="Chinese Taipei">
                                                Chinese Taipei                        
                                            </option>
                                            <option value="Denmark">
                                                Denmark                        
                                            </option>
                                            <option value="France">
                                                France                        
                                            </option>
                                            <option value="India">
                                                India                        
                                            </option>
                                            <option value="Indonesia">
                                                    Indonesia                        
                                                </option>
                                            <option value="Japan">
                                                Japan                        
                                            </option>
                                            <option value="Korea">
                                                Korea                        
                                            </option>
                                            <option value="Malaysia">
                                                Malaysia                        
                                            </option>
                                            <option value="Spain">
                                                Spain                        
                                            </option>
                                            <option value="Thailand">
                                                Thailand                        
                                            </option>
                </select>
                </div>
            </div>
            <div class="max-md:flex py-1">
                <p class="pb-2 max-md:pr-8 max-md:py-2">Athlete</p>
                <div class="border max-md:grow">
                <select class="w-full h-[40px] px-[20px] py-[5px] max-md:grow">
                    <option value="">[Representing - All]</option>
                    <option value="Canada">
                                                Canada                        
                                            </option>
                                            <option value="China">
                                                China                        
                                            </option>
                                            <option value="Chinese Taipei">
                                                Chinese Taipei                        
                                            </option>
                                            <option value="Denmark">
                                                Denmark                        
                                            </option>
                                            <option value="France">
                                                France                        
                                            </option>
                                            <option value="India">
                                                India                        
                                            </option>
                                            <option value="Indonesia">
                                                    Indonesia                        
                                                </option>
                                            <option value="Japan">
                                                Japan                        
                                            </option>
                                            <option value="Korea">
                                                Korea                        
                                            </option>
                                            <option value="Malaysia">
                                                Malaysia                        
                                            </option>
                                            <option value="Spain">
                                                Spain                        
                                            </option>
                                            <option value="Thailand">
                                                Thailand                        
                                            </option>
                </select>
                </div>
            </div>
            <div class="pt-3">
                <button class="bg-black text-white px-8 py-3 hover:bg-white hover:text-black hover:border-2 hover:border-black">
                APPLY
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
}
}

customElements.define('athlete-cover', AthleteCover);