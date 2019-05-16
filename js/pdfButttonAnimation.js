
//////////////////////////////////
// PDF BUTTON ANIMATION - ABOUT //
//////////////////////////////////

//Selectors
const $aboutPDF = $(".aboutPDF .aboutParagraphs a");
const $aboutPDFLine = $(".aboutPDF .aboutParagraphs a .pdfLine");

//Initialize timeline and stop animation from triggering
const tlAboutPDF = new TimelineMax({paused: true})

//Create Animation 
const pdfLineAnimation = tlAboutPDF.to($aboutPDFLine, 0.4, { width: "100%", ease: "Power1.easeInOut"})

//Event listner on hover(mouseenter mouseleave) 
$aboutPDF.on("mouseenter", function(){
    pdfLineAnimation.play();
})
$aboutPDF.on("mouseleave", function(){
    pdfLineAnimation.reverse();
})

