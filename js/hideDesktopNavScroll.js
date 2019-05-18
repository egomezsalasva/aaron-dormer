//////////////////////////////////////////////////
// HIDE DESKTOP NAV ON SCROLL - ABOUT & CONTACT //
//////////////////////////////////////////////////

$(window).bind('scroll', function() {
    //Hide once 100vh is passed
    if ($(window).scrollTop() > $(window).height()) {
        $('header').hide();
    }
    else {
        $('header').show();
    }
});
