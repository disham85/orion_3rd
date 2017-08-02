$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
    });
    $('.humb').click(function(){
       $('.menu ul').toggleClass('active'); 
    });
    $('.workSlick').slick({
        slidesToShow:2,
        slidesToScroll:2,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});