export default ()=>{
    const selects = document.querySelectorAll('.contacts__contacts__select')
    const contacts = document.querySelectorAll('.contacts__contacts__contact')

    setTimeout(()=>{
        contacts.forEach(contact=>{
            contact.classList.add('ready')
        })
    },1000)

    for (let i = 0; i < selects.length;i++){

        selects[i].addEventListener('click', ()=>{
            selects.forEach(select=>{
                select.classList.remove('active')
            })
            contacts.forEach(contact=>{
                contact.classList.remove('active')
            })
            selects[i].classList.add('active')
            contacts[i].classList.add('active')
        })
    }
}