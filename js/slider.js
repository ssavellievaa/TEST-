
$(function () {
	// first slider
	$('.gallery__slider').slick({
		arrows: false,
		slidesToShow: 4.2,
		infinite: false,
		responsive: 
		[
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3.2,
				},
			},
			{
				breakpoint: 798,
				settings: {
					slidesToShow: 2.2,
				},
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	})
	$('.gallery__slider-next').on('click', function (e) {
		e.preventDefault()
		$('.gallery__slider').slick('slickNext')
	})

	// second slider
	$('.collection__slider').slick({
		arrows: false,
		slidesToShow: 3,
		infinite: true,
		appendArrows: $('.collection__arrow'),
		responsive: 
		[
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 798,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	})
	$('.collection__prev').on('click', function (e) {
		e.preventDefault()
		$('.collection__slider').slick('slickPrev')
	})
	$('.collection__next').on('click', function (e) {
		e.preventDefault()
		$('.collection__slider').slick('slickNext')
	})

	// third slider
	$('.suggestion__slider').slick({
		arrows: false,
		slidesToShow: 5,
		infinite: true,
		appendArrows: $('.collection__arrow'),
		responsive: 
		[
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 798,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	})
	$('.suggestion__prev').on('click', function (e) {
		e.preventDefault()
		$('.suggestion__slider').slick('slickPrev')
	})
	$('.suggestion__next').on('click', function (e) {
		e.preventDefault()
		$('.suggestion__slider').slick('slickNext')
	})

	// burger
	$('.burger').on('click', function (e) {
		e.preventDefault()
		$('.header__top').toggleClass('header__top--open')
	})

})

