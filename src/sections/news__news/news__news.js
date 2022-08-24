import {Navigation, Swiper} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default() => {
    const swiper = new Swiper('.news__news__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed:700,
        modules: [Navigation],
        navigation: {
            nextEl: '.news__news__swiper-button-next',
            prevEl: '.news__news__swiper-button-prev',
        },
    });

    swiper.on('click',(e)=>{
        // if (e.clickedIndex === undefined) return
        // swiper.slideTo(e.clickedIndex)
        //
        // for (let i = 0; i < e.wrapperEl.children.length; i++) {
        //     e.wrapperEl.children[i].classList.remove('active');
        // }
        // let contents = document.querySelectorAll('.index__stages__swiper-content');
        //
        // for (let i = 0; i < contents.length; i++) {
        //     contents[i].classList.remove('active');
        // }
        // e.wrapperEl.children[e.clickedIndex].classList.add('active')
        // contents[e.clickedIndex].classList.add('active');
    })
}