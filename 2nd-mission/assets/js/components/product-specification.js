class ProductSpecifications extends HTMLElement {

  connectedCallback(){

    const specImg  = this.getAttribute('specImg');
    const specTitle  = this.getAttribute('specTitle');
    const specDes  = this.getAttribute('specDes');

    this.innerHTML = `

    <div class="flex">
      <img src="${specImg}" alt="3D POWER CARBON" width="170" height="170">
      <div>
        <p>${specTitle}</p>
        <p class="text-[#808080]">${specDes}</p>
      </div>
    </div>
    
    `
  }
}

customElements.define('product-specifications', ProductSpecifications)
