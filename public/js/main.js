AOS.init({
	duration: 800,
	easing: 'slide',
});

(function ($) {
	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll',
	});

	var fullHeight = function () {
		$('body').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// Scrollax
	$.Scrollax();

	// Burger Menu
	var burgerMenu = function () {
		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
			if ($('#ddnazzah-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	};
	burgerMenu();

	var onPageClick = function () {
		$(document).on('click', '#ddnazzah-nav a[href^="#"], a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate(
				{
					scrollTop: $($.attr(this, 'href')).offset().top - 70,
				},
				500,
				function () {
					// window.location.hash = href;
				},
			);
		});
	};

	onPageClick();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 1,
				},
			},
		});
	};
	carousel();

	$('nav .dropdown').hover(
		function () {
			var $this = $(this);
			// 	 timer;
			// clearTimeout(timer);
			$this.addClass('show');
			$this.find('> a').attr('aria-expanded', true);
			// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').addClass('show');
		},
		function () {
			var $this = $(this);
			// timer;
			// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
			// }, 100);
		},
	);

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.giphitie_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();
})(jQuery);
