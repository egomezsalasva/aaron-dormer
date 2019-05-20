///////////////////////////////////
// ARROW ANIMATION - CAMMERCIALS //
///////////////////////////////////

$('.arrowFooterRight').click(function() {
    event.preventDefault();
    $('.container').animate({
        // scrollLeft: "+=300"
        scrollLeft: "+=800"
    }, "slow");
});

$('.arrowFooterLeft').click(function() {
    event.preventDefault();
    $('.container').animate({
        // scrollLeft: "-=300"
        scrollLeft: "-=800"
    }, "slow");
});