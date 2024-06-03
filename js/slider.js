
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

	$('.collection__slider').slick({
		arrows: false,
		slidesToShow: 3,
		infinite: true,
	})
})

