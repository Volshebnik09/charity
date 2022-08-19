export default ()=>{

    const teammate = document.querySelectorAll('.team__teammates__teammate')

    teammate.forEach(item=>{
        const btn = item.querySelector('.team__teammates__teammate__showMore-btn')

        btn.addEventListener('click',()=>{
            item.classList.toggle('open')
        })
    })
}