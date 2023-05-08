$('.slider-lot').slick({
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                adaptiveHeight:true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                adaptiveHeight:true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                adaptiveHeight:true,
            }
        }
    ]
});
$('.slider-lot-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                adaptiveHeight:true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                adaptiveHeight:true,
            }
        },
        {
            breakpoint: 481,
            settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                adaptiveHeight:true,
            }
        }
    ]
});

$( document ).ready(function() {
    $(".burger-button").click(function(){
        $(".burger-button").toggleClass("active");
        $(".burger-menu").toggleClass("active");
    });
});
