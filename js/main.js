'use strict'

// Selectors
var $imageVid = $(".imageVid");
var $hamburguerMenuLine = $(".hamburguerMenu .line");

// Timeline Variables
var tlEnter;
var tlEnterTwo;
var isTweening;


//*****************//
//**Video Overlay**//
//*****************//


$('.lightbox_trigger01').click(function(e) {

	//prevent default action (hyperlink)
	e.preventDefault();


	//Get clicked link href
	// var image_href = $(this).attr("href");

	/*
	If the lightbox window HTML already exists in document,
	change the img src to to match the href of whatever link was clicked

	If the lightbox window HTML doesn't exists, create it and insert it.
	(This will only happen the first time around)
	*/

		if ($('#lightbox').length > 0) { // #lightbox exists

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
      $('#lightbox iframe').attr('src', 'https://player.vimeo.com/video/137898988?autoplay=1&color=000&title=0&byline=0&portrait=0');
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/137898988?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'

			//insert lightbox HTML into page
			$('body').append(lightbox);
		}

	});
  //Click anywhere on the page to get rid of lightbox window
	$("body").on('click touchstart', '#lightbox', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
    // stop playing video when clicked;
    $('#lightbox iframe').attr('src', '');
  });
  

  $('.lightbox_trigger02').click(function(e) {
  	e.preventDefault();
  	if ($('#lightbox02').length > 0) {
  		$('#lightbox02').show();
      $('#lightbox02 iframe').attr('src', 'https://player.vimeo.com/video/336391184?autoplay=1&color=000&title=0&byline=0&portrait=0');
  	} else {
  		var lightbox =
  		'<div id="lightbox02">' +
  			'<p>Click to close</p>' +
  			'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/336391184?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'
  		$('body').append(lightbox);
  	}
  });
  $("body").on('click touchstart', '#lightbox02', function() {
    $('#lightbox02').hide();
    $('#lightbox02 iframe').attr('src', '');
  });


  $('.lightbox_trigger03').click(function(e) {
  	e.preventDefault();
  	if ($('#lightbox03').length > 0) {
  		$('#lightbox03').show();
      $('#lightbox03 iframe').attr('src', 'https://player.vimeo.com/video/299492406?autoplay=1&color=000&title=0&byline=0&portrait=0');
  	} else {
  		var lightbox =
  		'<div id="lightbox03">' +
  			'<p>Click to close</p>' +
  			'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/299492406?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'
  		$('body').append(lightbox);
  	}
  });
  $("body").on('click touchstart', '#lightbox03', function() {
    $('#lightbox03').hide();
    $('#lightbox03 iframe').attr('src', '');
  });


  $('.lightbox_trigger04').click(function(e) {
  	e.preventDefault();
  	if ($('#lightbox04').length > 0) {
  		$('#lightbox04').show();
      $('#lightbox04 iframe').attr('src', 'https://player.vimeo.com/video/262873207?autoplay=1&color=000&title=0&byline=0&portrait=0');
  	} else {
  		var lightbox =
  		'<div id="lightbox04">' +
  			'<p>Click to close</p>' +
  			'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/262873207?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'
  		$('body').append(lightbox);
  	}
  });
  $("body").on('click touchstart', '#lightbox04', function() {
    $('#lightbox04').hide();
    $('#lightbox04 iframe').attr('src', '');
  });


  $('.lightbox_trigger05').click(function(e) {
  	e.preventDefault();
  	if ($('#lightbox05').length > 0) {
  		$('#lightbox05').show();
      $('#lightbox05 iframe').attr('src', 'https://player.vimeo.com/video/262872756?autoplay=1&color=000&title=0&byline=0&portrait=0');
  	} else {
  		var lightbox =
  		'<div id="lightbox05">' +
  			'<p>Click to close</p>' +
  			'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/262872756?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'
  		$('body').append(lightbox);
  	}
  });
  $("body").on('click touchstart', '#lightbox05', function() {
    $('#lightbox05').hide();
    $('#lightbox05 iframe').attr('src', '');
  });


  $('.lightbox_trigger06').click(function(e) {
  	e.preventDefault();
  	if ($('#lightbox06').length > 0) {
  		$('#lightbox06').show();
      $('#lightbox06 iframe').attr('src', 'https://player.vimeo.com/video/149365956?autoplay=1&color=000&title=0&byline=0&portrait=0');
  	} else {
  		var lightbox =
  		'<div id="lightbox06">' +
  			'<p>Click to close</p>' +
  			'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/149365956?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" data-vimeo-responsive="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'
  		$('body').append(lightbox);
  	}
  });
  $("body").on('click touchstart', '#lightbox06', function() {
    $('#lightbox06').hide();
    $('#lightbox06 iframe').attr('src', '');
	});
	

	$('.lightbox_trigger07').click(function(e) {
  	e.preventDefault();
  	if ($('#lightbox07').length > 0) {
  		$('#lightbox07').show();
      $('#lightbox07 iframe').attr('src', 'https://player.vimeo.com/video/269386603?autoplay=1&color=000&title=0&byline=0&portrait=0');
  	} else {
  		var lightbox =
  		'<div id="lightbox07">' +
  			'<p>Click to close</p>' +
  			'<iframe class="vimeoFrame" src="https://player.vimeo.com/video/269386603?autoplay=1&color=000&title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" data-vimeo-responsive="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
      '</div>'
  		$('body').append(lightbox);
  	}
  });
  $("body").on('click touchstart', '#lightbox07', function() {
    $('#lightbox07').hide();
    $('#lightbox07 iframe').attr('src', '');
  });



//***************************//
//**Change Color Scroll Nav**//
//***************************//

$(window).bind('scroll', function() {
  if ($(window).scrollTop() > $(window).height() - 50) {
  	TweenMax.to($hamburguerMenuLine, 0.4, {background:"#000"});
  }
  else {
  	TweenMax.to($hamburguerMenuLine, 0.4, {background:"#fff"});
  }
});
