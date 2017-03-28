(function($){
	"use strict";

	if( document.cookie.indexOf('retina') === -1 && 'devicePixelRatio' in window && window.devicePixelRatio === 2 ){
		document.cookie = 'retina=' + window.devicePixelRatio + ';';
		window.location.reload();
	}

	$(document).ready(function(){


		if( $().responsiveSlides ){
			$("#portfolio-slider").responsiveSlides({
				auto: true,
				timeout: 4000,
				nav: true,
				speed: 500,
				maxwidth: 1170,
				pager: true,
				namespace: "portfolio-slides"
			});
		}

		$('#primary-menu').supersubs({
			minWidth: 14,
			maxWidth: 14,
			extraWidth: 1
		}).superfish({
			delay: 100,
			animation: {opacity:'show'},
			speed: 'fast',
			autoArrows: false,
			dropShadows: false
		});

		if ($("#primary-menu").length > 0){
			responsiveNav("#primary-menu", {
				label: '<i class="fa fa-bars"></i>',
				transition: 200
			});
		}

		//if( stag.menuState === "on" ) {
		if( true ) {
			$("#masthead").headroom({
			  "tolerance": 5,
			  "offset": 200,
			  "classes": {
			    "initial": "site-header",
			    "pinned": "site-header--pinned",
			    "unpinned": "site-header--unpinned"
			  }
			});

			var AnimatedHeader = (function(){
				var docElem = document.documentElement,
					header = $('.site-header'),
					didScroll = false,
					changeHeaderOn = 200;

				function init(){
					window.addEventListener( 'scroll', function() {
						if(!didScroll){
							didScroll = true;
							setTimeout(scrollPage, 250);
						}
					}, false);

				}

				function scrollPage(){
					var sy = scrollY();
					if ( sy >= changeHeaderOn && $(window).width() >= 992 ){
						header.addClass('header-shrink');
					}else{
						header.removeClass('header-shrink');
					}
					didScroll = false;
				}

				function scrollY() {
					return window.pageYOffset || docElem.scrollTop;
				}


				if ( $(window).width() >= 992 ){
					init();
				}

			})();
		}

		if(typeof jQuery().mixitup === "function"){
			$('#portfolio-filter').mixitup({
				effects: ["fade", "rotateX"],
				transitionSpeed: 400
			});
		}

		/*
		 * Static Content colors
		 */
		$('.page-template').find('.section-static-content').each(function(){
			var _this = $(this),
				bgColor = _this.find('.hentry').data('bg-color'),
				bgImage = _this.find('.hentry').data('bg-image'),
				bgOpacity = parseInt(_this.find('.hentry').data('bg-opacity'), 10),
				textColor = _this.find('.hentry').data('text-color'),
				linkColor = _this.find('.hentry').data('link-color');

			_this.prepend('<div class="static-content-cover" />');
			_this.find('.static-content-cover').css({ 'background-image' : 'url('+bgImage+')', 'opacity' : bgOpacity/100, '-ms-filter': '"alpha(opacity='+bgOpacity+')"' });

			_this.css({ 'background-color': bgColor, 'color' : textColor });
			_this.find('a').css('color', linkColor);
			_this.find('h1, h2, h3, h4, h5, h6').css('color', textColor);
		});

		/*
		 * Hero section background
		 */
		$('.page-template').find('.section-hero').each(function(){
			var _this = $(this);
			_this.find('.hero-content-wrapper').each(function(){
				var bgImage = $(this).data('background-image');
				_this.css('background-image', 'url(' + bgImage + ')');
			});
		});

		/*
		 * Fitvids
		 */
		$('.entry-content').fitVids();

	});
}(jQuery));
