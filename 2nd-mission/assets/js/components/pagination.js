// Function to calculate the page numbers to display
const pageNumbers = (total, max, current) => {
  const half = Math.floor(max / 2); // Calculate half of the max visible pages
  let to = max; // Default end page number

  // Adjust 'to' based on the current page position
  if (current + half >= total) {
    to = total; // If close to the end, set 'to' to total pages
  } else if (current > half) {
    to = current + half; // Otherwise, set 'to' relative to the current page
  }

  let from = Math.max(to - max, 0); // Calculate the starting page number

  // Create an array of page numbers to be displayed
  return Array.from({ length: Math.min(total, max) }, (_, i) => (i + 1) + from);
}

// PaginationButton constructor function
function PaginationButton(totalPages, maxPagesVisible = 10, currentPage = 1) {
  let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
  let currentPageBtn = null; // To keep track of the current page button
  const buttons = new Map(); // To store button elements and their update functions
  const disabled = {
    prev: () => currentPage === 1 || currentPage > totalPages, // Disable 'prev' if on the first page or invalid state
    next: () => currentPage >= totalPages // Disable 'next' if on the last page
  }
  const frag = document.createDocumentFragment(); // Create a document fragment to hold the buttons
  const paginationButtonContainer = document.createElement('div');
  paginationButtonContainer.className = 'pagination-buttons'; // Container for pagination buttons

  // Function to create and set up a button
  const createAndSetupButton = (label = '', cls = '', disabled = false, handleClick) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = label;
    buttonElement.className = `page-btn ${cls}`;
    buttonElement.disabled = disabled;
    buttonElement.addEventListener('click', e => {
      handleClick(e); // Handle click event
      this.update(); // Update pagination buttons
      paginationButtonContainer.value = currentPage; // Set current page value
      paginationButtonContainer.dispatchEvent(new CustomEvent('change', { detail: { currentPageBtn } })); // Dispatch change event
    });

    return buttonElement;
  }

  // Function to handle page button click
  const onPageButtonClick = e => currentPage = Number(e.currentTarget.textContent);

  // Function to update page button content
  const onPageButtonUpdate = index => (btn) => {
    btn.textContent = pages[index];

    if (pages[index] === currentPage) {
      currentPageBtn.classList.remove('active');
      btn.classList.add('active'); // Set active class to the current page button
      currentPageBtn = btn;
      currentPageBtn.focus(); // Focus on the current page button
    }
  };

  // Create and set up 'prev' button
  buttons.set(
    createAndSetupButton('<', 'prev-page', disabled.prev(), () => currentPage -= 1),
    (btn) => btn.disabled = disabled.prev()
  )

  // Create and set up page number buttons
  pages.map((pageNumber, index) => {
    const isCurrentPage = currentPage === pageNumber;
    const button = createAndSetupButton(
      pageNumber, isCurrentPage ? 'active' : '', false, onPageButtonClick
    );

    if (isCurrentPage) {
      currentPageBtn = button;
    }

    buttons.set(button, onPageButtonUpdate(index));
  });

  // Create and set up 'next' button
  buttons.set(
    createAndSetupButton('>', 'next-page', disabled.next(), () => currentPage += 1),
    (btn) => btn.disabled = disabled.next()
  )

  // Append buttons to the document fragment
  buttons.forEach((_, btn) => frag.appendChild(btn));
  paginationButtonContainer.appendChild(frag);

  // Method to render the pagination buttons
  this.render = (container = document.body) => {
    container.appendChild(paginationButtonContainer);
  }

  // Method to update pagination buttons
  this.update = (newPageNumber = currentPage) => {
    currentPage = newPageNumber;
    pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    buttons.forEach((updateButton, btn) => updateButton(btn));
  }

  // Method to add change event listener
  this.onChange = (handler) => {
    paginationButtonContainer.addEventListener('change', handler);
  }
}

// Create an instance of PaginationButton
const paginationButtons = new PaginationButton(7, 5);

// Render the pagination buttons
paginationButtons.render();

// Add an event listener for page change
paginationButtons.onChange(e => {
  console.log('-- changed', e.target.value)
});
