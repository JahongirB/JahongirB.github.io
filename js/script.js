$(document).ready(function () {
    new WOW().init();

    var $header = $('.header');
    var $nav = $('.nav-menu');
    var flag = false;

    function fixedNav() {
        if (scrollY >= $header.innerHeight() - $nav.innerHeight() && !flag) {
            $nav.addClass('fixed-top').css('opacity', 0)
            $nav.animate({
                opacity: 1
            }, 500)
            flag = true;
        } else if (scrollY < $header.innerHeight() - $nav.innerHeight() && flag) {

            $nav.animate({
                opacity: 0
            }, 500, function () {
                $nav.removeClass('fixed-top').css('opacity', 1)
            })
            flag = false;
        }
    }
    $(window).on('scroll', fixedNav);
    var $link = $('.nav-menu .nav-link');
    $link.click(function (e) {
        e.preventDefault();
        $link.removeClass('active');
        var id = $(this).addClass('active').attr('href'),
            target = $(id).offset().top - 60;
        $('html,body').animate({
            scrollTop: target
        }, 1000)
    });
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        $link.each(function () {
            var attr = $(this).attr('href'),
                selector = $(attr).offset().top - 70;
            if (scroll >= selector) {
                $link.removeClass('active');
                $(this).addClass('active')
            }
        });
    });

});
$(document).ready(function () {

});