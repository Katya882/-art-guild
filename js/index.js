// const swiper = new Swiper('.slider-lot', {
//     // Optional parameters
//     loop: true,
//     slidesPerView: 2,
//     spaceBetween: 30,
//
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     // slideToClickedSlide: true,
//     // autoHeight: true,
// });
//
$('.slider-lot').slick({
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2000,
                adaptiveHeight:true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                adaptiveHeight:true,
            }
        }
    ]
});
$('.slider-lot-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2000,
                adaptiveHeight:true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                adaptiveHeight:true,
            }
        }
    ]
});