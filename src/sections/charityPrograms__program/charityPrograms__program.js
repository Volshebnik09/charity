import {Navigation, Swiper} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default() => {
    const swiper = new Swiper('.charityPrograms__program__desc__slider__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 25,
        speed:700,
        modules: [Navigation],
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: '.charityPrograms__program__swiper-button-next',
            prevEl: '.charityPrograms__program__swiper-button-prev',
        },
    });

    let selects = document.querySelectorAll('.charityPrograms__program__select')
    let desc = document.querySelectorAll('.charityPrograms__program__desc')
    for (let i = 0; i <selects.length; i++){
        selects[i].addEventListener('click', function(){
            selects.forEach(select => {
                select.classList.remove('active')
            })
            desc.forEach(desc => {
                desc.classList.remove('active')
            })
            selects[i].classList.add('active')
            desc[i].classList.add('active')
        })
    }
}