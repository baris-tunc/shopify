document.addEventListener("DOMContentLoaded", function () {

    const swiperProductTwo = new Swiper('.slider', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: "",
            clickable: true
        },
        navigation: {
            nextEl: '',
            prevEl: ''
        },
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true
        },
        slidesPerView: 3,
        spaceBetween: 49,
        breakpoints: {
            320: {
                slidesPerView: 1.5
            },
            767: {
                slidesPerView: 3.1
            },
            1024: {
                slidesPerView: 3.1
            },
            1280: {
                slidesPerView: 3.1
            }
        },
        resizeObserver: true
    });
});