$(document).ready(function () {
    /* Slider */
    $(".responsive").slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: false,
        rows: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/back-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/next-arrow.png'>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
    /* Slider */

    /* Pruebas-bug-slider */
    /* var $window = $(window);
    checkWidth();
    function checkWidth() {
        var pantalla = $window.width();
        if (pantalla < 960) {
            $('.hide').removeClass("hide")
            $('.card-primary').removeClass("card-primary")
        }else{
            $('.hide').addClass("hide")
            $('.card-primary').addClass("card-primary")
        }
        checkWidth();
        $(window).resize(checkWidth);
    } */
    /* Pruebas-bug-slider */
});

