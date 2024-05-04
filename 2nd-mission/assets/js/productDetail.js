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