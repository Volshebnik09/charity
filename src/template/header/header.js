const burgerBtn = document.querySelector('.header__burger')
const headerPopup = document.querySelector('.header__popup')

burgerBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    burgerBtn.toggleAttribute('active')
    headerPopup.toggleAttribute('active')
})



