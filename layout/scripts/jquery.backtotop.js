
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

jQuery("#down").click(function () {
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

jQuery("#theteam").click(function () {
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
});

jQuery("#email").click(function () {
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
});

jQuery("#mobile").click(function () {
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
});
