import {Navigation, Swiper, Grid} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid"
(() => {
    const swiper = new Swiper('.index__news__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed:700,
        modules: [Navigation, Grid],
        centeredSlides: true,
        grid: {
            fill:'row',
            rows: 1,
        },
        breakpoints:{
            480:{
                centeredSlidesBounds: true,
                grid: {
                    fill:'row',
                    rows: 2,
                },
                centeredSlides: false,

            },
        },
        navigation: {
            nextEl: '.index__news__swiper-button-next',
            prevEl: '.index__news__swiper-button-prev',
        },

    });
})()