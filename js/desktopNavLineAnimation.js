/////////////////////////////////
// DESKTOP MENU LINE ANIMATION //
/////////////////////////////////

//Selectors
var $deskNavLink = $(".deskNav a")
var $deskNavLine = $(".deskNav a .line")

//Loop though each nav link
$.each($deskNavLink, function(i, e){

    //Initialize timeline and stop animation from triggering
    var tlNav = new TimelineMax({paused: true})

    //Create Animation 
    tlNav.to($(e).find($deskNavLine), 0.4, { width: "100%", ease: "Power1.easeInOut"})
    e.animation = tlNav;

    //Event listner on hover(mouseenter mouseleave) 
    $(e).on("mouseenter", function(){
        this.animation.play();
    })
    $(e).on("mouseleave", function(){
        this.animation.reverse();
    })

});


