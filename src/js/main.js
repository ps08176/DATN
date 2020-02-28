import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";

function activeMenu() {
	$('.navbar-toggler').on('click', function() {
		if ($(this).on('clicked')) {
			$(this).toggleClass('change');
			$('body').toggleClass('noscroll');
			$(this).siblings('.navbar-nav').toggleClass('show-menu');
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Loading();
	activeMenu();
});


//tan
var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
    //   centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
        ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    });
    document.querySelector('.append-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    });
    document.querySelector('.append-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
        ]);
	});

