$(function() {
  $(document).scroll(function() {
    var $nav = $(".bg-transparent");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//Smooth Scrolling

var scroll = new SmoothScroll('a[href*="#"]');

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
