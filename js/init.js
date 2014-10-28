

jQuery(document).ready(function(){
	$('.site-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 300,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: true
	});

	//Menu Button
	var btnmenu = $('#btn-menu');
	var menulist = $('#menu-list');

	btnmenu.click(function(){
		// menulist.toggleClass('hidden');
		menulist.slideToggle();
	});

	//Snowfall
        $(document).snowfall({
        	collection : '.collectonme',
        	deviceorientation : true,
        	round : true,
        	flakeCount : 40,
        	minSize: 5,
        	maxSize: 15
        });

 
});