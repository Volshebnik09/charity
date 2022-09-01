
(()=>{

    const selects = document.querySelectorAll('.requisites__requisites__select')
    const cards = document.querySelectorAll('.requisites__requisites__card')

    selects[0].classList.add('active')
    cards[0].classList.add('active')

    for (let i = 0 ; i<selects.length; i++){
        selects[i].addEventListener('click', ()=>{
            selects.forEach((item)=>{
                item.classList.remove('active')
            })
            cards.forEach((item)=>{
                item.classList.remove('active')
            })

            selects[i].classList.add('active')
            cards[i].classList.add('active')
        })
    }
    console.log(1)
})()

