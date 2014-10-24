

jQuery(document).ready(function(){
	$('.mobile-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 300,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	//Menu Button
	var btnmenu = $('#btn-menu');
	var menulist = $('#menu-list');

	btnmenu.click(function(){
		// menulist.toggleClass('hidden');
		menulist.slideToggle();
	});
});