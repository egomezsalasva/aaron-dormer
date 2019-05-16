/////////////////////////////////////
// HOVER VIDEO SLIDESHOW ANIMATION //
/////////////////////////////////////

//Selectors
const $imgVidContainer = $(".imageVidContainer")
const $overlayVid = $(".imageVidContainer .overlayVid")
const $vimeoIcon = $(".vimeoIcon")

//Loop though each image in video slideshow
$.each($imgVidContainer, function(i, e){

    //Initialize timeline and stop animation from triggering
    var tlOverlayVid = new TimelineMax({paused: true})

    //Create Animation 
    tlOverlayVid.to($(e).find($overlayVid), 0.4, { opacity: "0.33", ease: "Power1.easeInOut" })
    tlOverlayVid.to( $(e).find($vimeoIcon), 0.4, { opacity: "1", ease: Power1.easeInOut, delay: "-0.4" })
    e.animation = tlOverlayVid;

    //Event listner on hover(mouseenter mouseleave) 
    $(e).on("mouseenter", function(){
        this.animation.play();
    })
    $(e).on("mouseleave", function(){
        this.animation.reverse();
    })

});