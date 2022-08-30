(function setup(){
    const customValueRadio = document.querySelector('#customValue')
    const customValueInput = document.querySelector('#customValueLabel input')

    customValueInput.addEventListener('click', ()=>{
        customValueRadio.checked = true;
    })
}())