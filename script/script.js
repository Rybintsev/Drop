$(document).ready(function() {
	$('#burgerBut').on('click', function() {
		$('body').toggleClass('lock');
		$('#burgerBut,.topnav__menu').toggleClass('activ');
	}),
	$('.services__slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1700,
		adaptiveHeight:true,
		easing:'ease',
		autoplay:true,
		autoplaySpeed:3700,
		infinite:true,
		swipe:true
	}),
	$('a').click(function() {
		var c = $(this).attr("href");
		var d = $(c).offset().top;
		$('html,body').animate({scrollTop: d}, 900);
	});
});