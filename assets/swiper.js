document.addEventListener("DOMContentLoaded", function () {

    const topRated = new Swiper('.customSlider', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-arrows .next',
            prevEl: '.swiper-arrows .prev'
        },
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true
        },
        slidesPerView: 2,
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
