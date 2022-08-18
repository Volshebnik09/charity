import {Swiper, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

export default() => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 70,
        centeredSlides: true,
        centeredSlidesBounds: true,
        modules: [Navigation],
    });
    swiper.on('click',(e)=>{
        swiper.slideTo(e.clickedIndex)
    })
}