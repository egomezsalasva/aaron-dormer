////////////////////////////
// CONTACT BUTTON - ABOUT //
////////////////////////////

//Selectors
const $aboutContact = $(".aboutTitleContactContainer a");
const $aboutContactLine = $(".aboutTitleContactContainer a .thickLine");

//Initialize timeline and stop animation from triggering
const tlAboutContact = new TimelineMax({paused: true})

//Create Animation 
const contactLineAnimation = tlAboutContact.to( $aboutContactLine, 0.4, { width: "100%", ease: Power1.easeInOut } )

//Event listner on hover(mouseenter mouseleave) 
$aboutContact.on("mouseenter", function(){
    contactLineAnimation.play();
})
$aboutContact.on("mouseleave", function(){
    contactLineAnimation.reverse();
})