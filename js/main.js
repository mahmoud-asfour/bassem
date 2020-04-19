
jQuery(document).ready(function () {

    //main-slider-sec height
    jQuery('.main-slider-sec').css('height', jQuery(window).height());

    jQuery(window).resize(function(){
        jQuery('.main-slider-sec').css('height', jQuery(window).height());
    });



    //main gallery
    var mainswiper = new Swiper('#main-gallery', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        speed: 2500,
        effect: 'fade',
        simulateTouch: false
    });

    //media appearance slider
    var firstswiper = new Swiper('#first-slider', {
        slidesPerView: 4.48,
        centeredSlides: true,
        spaceBetween: 53,
        grabCursor: true,
        loop: true,
        autoplay:true,
        speed:1000,
        loopAdditionalSlides: 100, // slidesNum contains the initial slides number
        loopedSlides: 100,
        pagination: {
            el: '.first-slider .swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.first-slider .swiper-button-next',
            prevEl: '.first-slider .swiper-button-prev',
        },

        breakpoints: {
            // when window width is >= 320px
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 1199px
                    1200: {
                        slidesPerView: 1,
                    }
        },
    });

    //shop slider
    var secswiper = new Swiper('#sec-slider', {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 35,
        grabCursor: true,
        loop: true,
        autoplay:true,
        speed:1000,
        loopAdditionalSlides: 100, // slidesNum contains the initial slides number
        loopedSlides: 100,
        pagination: {
            el: '.sec-slider .swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.sec-slider .swiper-button-next',
            prevEl: '.sec-slider .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 1,
            },
        },
    });

    var firstWidth = jQuery('.first-slider .swiper-slide:not(.swiper-slide-duplicate)').length * 50
    var winWidth = jQuery(window).width()

    if (firstWidth >= 850) {
        jQuery(".first-slider .swiper-pagination-progressbar").css("width", "850px");
    } else {
        jQuery(".first-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
    }

    if (jQuery(window).width() <= 991) {
        if (firstWidth >= 500) {
            jQuery(".first-slider .swiper-pagination-progressbar").css("width", "500px");
        } else {
            jQuery(".first-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
        }
    };
    if (jQuery(window).width() <= 767) {
        if (firstWidth >= winWidth) {
            jQuery(".first-slider .swiper-pagination-progressbar").css("width", "100%");
        } else {
            jQuery(".first-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
        }
    };


    var secWidth = jQuery('.sec-slider .swiper-slide:not(.swiper-slide-duplicate)').length * 50
    var winWidth = jQuery(window).width()

    if (secWidth >= 850) {
        jQuery(".sec-slider .swiper-pagination-progressbar").css("width", "850px");
    } else {
        jQuery(".sec-slider .swiper-pagination-progressbar").css("width", secWidth + "px");
    }

    if (jQuery(window).width() <= 991) {
        if (secWidth >= 500) {
            jQuery(".sec-slider .swiper-pagination-progressbar").css("width", "500px");
        } else {
            jQuery(".sec-slider .swiper-pagination-progressbar").css("width", firstWidth + "px");
        }
    };
    if (jQuery(window).width() <= 767) {
        if (secWidth >= winWidth) {
            jQuery(".sec-slider .swiper-pagination-progressbar").css("width", "100%");
        } else {
            jQuery(".sec-slider .swiper-pagination-progressbar").css("width", secWidth + "px");
        }
    };

    //upcoming show and livestram
    var shows_streams = new Swiper('#shows_streams ', {
        slidesPerView: 1,
        spaceBetween: 29,
        lazy: true,
        loop: true,
        autoplay: true,
        speed: 1300,
        navigation: {
            nextEl: '.shows_streams .swiper-button-next',
            prevEl: '.shows_streams .swiper-button-prev',
        },
        pagination: {
            el: '.shows_streams .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
            },
            // when window width is >= 1199px
            1200: {
                slidesPerView: 1,
            }
        }
    });

    //press slider
    var press = new Swiper('.press .swiper-container', {
        effect: 'fade',
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        autoplay:true,
        speed:1000,
        loopAdditionalSlides: 100, // slidesNum contains the initial slides number
        loopedSlides: 100,
        pagination: {
            el: '.press .swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.press .swiper-button-next',
            prevEl: '.press .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
        },
    });

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

    var a = 0;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() >= 20) {
            jQuery('header').addClass("fixed-header");
        } else {
            jQuery('header').removeClass("fixed-header");
        }
        jQuery(this).scrollTop() >= 500 ? jQuery(".scroll-top").addClass("show-scroll") : jQuery(".scroll-top").removeClass("show-scroll");

        if (jQuery("div").hasClass("about-numbers")) {
            if (a == 0 && jQuery(this).scrollTop() >= (jQuery(".about-numbers").offset().top) - 1000) {
                jQuery('.number span').each(function () {
                    jQuery(this).prop('Counter', 0).animate({
                        Counter: jQuery(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            jQuery(this).text(Math.ceil(now));
                        }
                    });
                });
                console.log(jQuery(window).scrollTop());
                a++
            }
        }
    });

    jQuery(".scroll-top").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    if (jQuery(window).width() <= 991) {
        jQuery(".sec-head").wrap("<div class='xs-nav'></div>");
        jQuery('.menu-opner').click(function () {
            jQuery('body').addClass('overflow');
            jQuery('.xs-nav').fadeIn(400);
            jQuery('.sec-head').addClass('nav-open');
        });
        jQuery('.xs-nav').click(function () {
            jQuery('body').removeClass('overflow');
            jQuery('.xs-nav').fadeOut(500);
            jQuery('.sec-head').removeClass('nav-open');
        });
        jQuery('.sec-head').click(function (e) {
            e.stopPropagation();
        });
        jQuery('.close-btn').click(function () {
            jQuery('body').removeClass('overflow');
            jQuery('.xs-nav').fadeOut(500);
            jQuery('.sec-head').removeClass('nav-open');
        });

        //plant b
        var plant = new Swiper('.plant_b_items .swiper-container', {
            slidesPerView: 1,
            centeredSlides: true,
            // spaceBetween: 40,
            grabCursor: true,
            loop: true,
            autoplay:true,
            speed:1000,
            loopAdditionalSlides: 100, // slidesNum contains the initial slides number
            loopedSlides: 100,
            pagination: {
                el: '.plant_container .swiper-pagination',
                type: 'progressbar',
            },

            breakpoints: {
                500: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
            },
        });

    }

    //owl carousel
    if ($(window).width() < 991) {

        // $('.pict_of_me.home').addClass('owl-carousel');
        //
        // $('.pict_of_me.home').owlCarousel({
        //     stagePadding: 50,
        //     loop:true,
        //     margin:14,
        //     nav:false,
        //     responsive:{
        //         0:{
        //             items:1
        //         },
        //         600:{
        //             items:2
        //         },
        //         1000:{
        //             items:5
        //         }
        //     }
        //
        // });

        // $('.media_tabs').addClass('owl-carousel');
        // $('.media_tabs').owlCarousel({
        //     stagePadding: 20,
        //     loop:true,
        //     margin:30,
        //     nav:false,
        //     responsive:{
        //         0:{
        //             items:1
        //         },
        //         600:{
        //             items:3
        //         },
        //         1000:{
        //             items:5
        //         }
        //     }
        //
        // });

        //hide photo by class who am i
        jQuery('.me_photo.hidden-xs').parent().hide();

    }


    // new WOW().init();
    AOS.init();

    //typejs
    var typed = new Typed('.signature', {
        strings: ["Dr/Political Satirist/Vegan"],
        typeSpeed: 150
    });


});