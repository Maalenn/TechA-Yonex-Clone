// show card and close card function
const specsBtn = document.querySelector('.specsBtn')
const detailCard = document.querySelector('.detailCard')
const plusIcon = document.querySelector('.plusIcon')
const minusIcon = document.querySelector('.minusIcon')
function showCard(){detailCard
    if (detailCard.classList.contains('hidden')){
        detailCard.classList.remove('hidden')
        plusIcon.classList.add('hidden')
    }
    else{
        detailCard.classList.add('hidden')
        plusIcon.classList.remove('hidden')
    }
    
}
specsBtn.addEventListener('click', showCard)
// show modal and close modal
const stringBtn = document.querySelector('#stringBtn')
const modal = document.querySelector('#modal')
const overlay =  document.querySelector('.overlay')
const closeBtn = document.querySelector('#xBtn')
function showModal(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeModal(){
    console.log('close');
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
stringBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', 
closeModal)
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
// img frame 
const imageClick = document.querySelector('#imageClick')
const imgZoom = document.querySelector('#imgZoom')
const xClose = document.querySelector('#xClose')

function showImg() {
    imgZoom.classList.remove('hidden')
}
function closeImg() {
    imgZoom.classList.add('hidden')
}
  
  
  
let currentZoom = 1; 
let minZoom = 1; 
let maxZoom = 3; 
let stepSize = 0.1;
let container = document.querySelector('#image-container'); 

// Zoom image function
function zoomImage(direction) { 
    let newZoom = currentZoom + direction * stepSize; 

    // Limit the zoom level to the minimum and maximum values 
    if (newZoom < minZoom || newZoom > maxZoom) { 
        return; 
    } 

    currentZoom = newZoom; 
    console.log(currentZoom);

    // Update the CSS transform of the image to scale it 
    let image = document.querySelector('#image-container img'); 
    image.style.transform = 'scale(' + currentZoom + ')'; 
}

container.addEventListener('wheel', function (event) { 
    // Zoom in or out based on the scroll direction 
    let direction = event.deltaY > 0 ? -1 : 1; 
    // console.log(direction)
    zoomImage(direction); 
});