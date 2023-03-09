$(function () {
	new WOW().init();

	$('.burger').click(function () {
		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$('.menu_top').slideDown(300);
		} else {
			$('.menu_top').slideUp(300);
		}
	});
});

/*reviews tabs*/
$('.nav_rev > div').click(function () {
	const revID = $(this).data('revid');

	$('.nav_rev > div').not(this).removeClass('active');
	$(this).addClass('active');

	$('.item_rev').not(revID).removeClass('active');
	$(revID).addClass('active');
});

/* yakor */

$('a.yakor').on('click', function (event) {
	const $anchor = $(this);
	$('html, body')
		.stop()
		.animate(
			{
				scrollTop: $($anchor.attr('href')).offset().top - 57,
			},
			{
				duration: 1000,
				specialEasing: {
					width: 'linear',
					height: 'easeInOutCubic',
				},
			}
		);
	event.preventDefault();
});
