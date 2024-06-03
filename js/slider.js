
$(function () {
	// first slider
	$('.gallery__slider').slick({
		arrows: false,
		slidesToShow: 4.2,
		infinite: false,
		appendArrows: $('.gallery__slider-arrows'),
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
	})
	$('.suggestion__prev').on('click', function (e) {
		e.preventDefault()
		$('.suggestion__slider').slick('slickPrev')
	})
	$('.suggestion__next').on('click', function (e) {
		e.preventDefault()
		$('.suggestion__slider').slick('slickNext')
	})

})

