(()=>{

    const cards = document.querySelectorAll('.reports__reports__card')
    const insides = document.querySelectorAll('.reports__reports__card__inside')
    const outsides = document.querySelectorAll('.reports__reports__card__outside')

    document.addEventListener('click', (e)=>{
        if (!e.composedPath()[0].className.includes('reports__reports__card__inside__form')){
            insides.forEach((inside)=>{
                inside.classList.remove('active')
            })
            outsides.forEach((outside)=>{
                outside.classList.remove('hidden')
            })
        }
    })

    cards.forEach(card => {
        const openBtn = card.querySelector('.reports__reports__card__outside')
        const inside = card.querySelector('.reports__reports__card__inside')
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            insides.forEach((inside)=>{
                inside.classList.remove('active')
            })
            outsides.forEach((outside)=>{
                outside.classList.add('hidden')
            })
            inside.classList.add('active')
        })

    })
})()