document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.customSlider', {
        direction:'horizontal',
        // Default parameters
        slidesPerView: 2.5,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2.5,
                spaceBetween: 10
            }
        }
    })
})
