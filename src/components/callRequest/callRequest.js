(()=>{
    const btn = document.querySelector('.callRequest__phone')
    const form = document.querySelector('.callRequest')

    btn.addEventListener('click', ()=>{
        form.classList.toggle('active')
    })
})()