jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // Adjust the pixel value as needed
            $('header').addClass('scroll-shadow');
        } else {
            $('header').removeClass('scroll-shadow');
        }
    });
});
