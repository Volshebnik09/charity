(function setup(){
    const customValueRadio = document.querySelector('#customValue')
    const customValueInput = document.querySelector('#customValueLabel input')

    customValueInput.addEventListener('click', ()=>{
        customValueRadio.checked = true;
    })

    const publicOffer = document.querySelector('#publicOffer')
    const treatment = document.querySelector('#treatment')
    const submitBtn = document.querySelector('#submitBtn')
    submitBtn.disabled = true

    const checkСondition = ()=>{
        submitBtn.disabled = !((publicOffer.checked) && (treatment.checked));
    }

    publicOffer.addEventListener('click', checkСondition)
    treatment.addEventListener('click', checkСondition)
}())