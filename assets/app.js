$(function () {
    $('[data-slider]').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,

        dots: true,
        appendDots:$('.team'),

        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }

                
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
            }
        ]
    });


    // Header fixed
    var header = $('#header'),
        headerH = $(header).innerHeight();
        scrollOffset = $(window).scrollTop();
    
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset)
    });

    function checkScroll(scrollOffset) {
        if ( scrollOffset >= headerH ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


    // Scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        var scrollId = $(this).data('scroll'),
        scrollTop = $(scrollId).offset().top;

        $('html, body').animate({
            scrollTop: scrollTop
        }, 500);
    });
});

