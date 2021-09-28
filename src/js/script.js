import SwiperCore, {Scrollbar, Navigation} from "swiper";
SwiperCore.use([Scrollbar, Navigation]);

const swiper = new SwiperCore('.blog-slider', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 73,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    watchSlidesVisibility: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});