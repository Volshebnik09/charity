import {Navigation, Swiper} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default() => {
    const swiper = new Swiper('.news__MM__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 25,
        speed:700,
        modules: [Navigation],
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: '.news__MM__swiper-button-next',
            prevEl: '.news__MM__swiper-button-prev',
        },
    });

    let curPage = 0;
    let contents = document.querySelectorAll('.news__MM__swiper-content');
    let slides = document.querySelectorAll('.news__MM__swiper .swiper-slide');


    swiper.navigation.prevEl.onclick = function() {
        updatePage(curPage-1)
    }
    swiper.navigation.nextEl.onclick = function() {
        updatePage(curPage+1)
    }



    const updatePage = (page) => {
        if (page < 0) return
        if (page >= contents.length) return
        for (let i = 0; i < contents.length; i++) {
            contents[i].classList.remove('active');
            slides[i].classList.remove('active');

        }
        curPage = page
        contents[curPage].classList.add('active');
        slides[curPage].classList.add('active');
    }


    swiper.on('click',(e)=>{
        if (e.clickedIndex === undefined) return
        updatePage(e.clickedIndex)
    })

}