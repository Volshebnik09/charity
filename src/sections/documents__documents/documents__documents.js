(()=>{
    const selectors = document.querySelectorAll('.documents__documents__selector')
    const documentFrame = document.querySelector('.documents__documents__document')


    selectors[0].classList.add('active')
    documentFrame.src = selectors[0].dataset.src

    selectors.forEach(selector => {
        selector.addEventListener('click', ()=>{
            selectors.forEach(selector => {
                selector.classList.remove('active')
            })
            selector.classList.add('active')
            documentFrame.src = selector.dataset.src
            documentFrame.scrollIntoView()
        })
    })
})()