const SPEC_BTN = document.querySelector('.specsBtn')
const DETAIL_CARD = document.querySelector('.detailCard')
const PLUS_ICON = document.querySelector('.plusIcon')
const MINUS_ICON = document.querySelector('.minusIcon')
// show card and close card function
function showCard(){
    if (DETAIL_CARD.classList.contains('hidden')){
        DETAIL_CARD.classList.remove('hidden')
        PLUS_ICON.classList.add('hidden')
    }
    else{
        DETAIL_CARD.classList.add('hidden')
        PLUS_ICON.classList.remove('hidden')
    }
    
}

SPEC_BTN.addEventListener('click', showCard)