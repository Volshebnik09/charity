(function setup(){

    const selects = document.querySelectorAll('.helpNow__section__select')
    const contents = document.querySelectorAll('.helpNow__section__content-holder > div, .helpNow__section__content-holder > form')

    selects[0].classList.add('active')
    contents[0].classList.add('active')

    for (let i = 0; i < selects.length; i ++){
        selects[i].addEventListener('click', ()=>{
            selects.forEach(item => {
                item.classList.remove('active')
            })
            contents.forEach(item => {
                item.classList.remove('active')
            })
            selects[i].classList.add('active')
            contents[i].classList.add('active')

        })
    }
})()