import {Navigation, Swiper} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default() => {
    const swiper = new Swiper('.news__news__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed:700,
        modules: [Navigation],
        centeredSlides: true,
        centeredSlidesBounds: true,
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

    let categories = document.querySelectorAll('.news__news__categories__category')

    let swiperWrapper = document.querySelector('.news__news__swiper .swiper-wrapper')

    swiperWrapper.setAttribute('cat', 0)
    for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click',(e)=>{
            categories.forEach((category)=>{
                category.classList.remove('active')
            })
            categories[i].classList.add('active')
            swiperWrapper.setAttribute('cat', i)
            swiper.update()
        })

    }
    swiper.update()
}