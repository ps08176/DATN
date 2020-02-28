import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";

function activeMenu() {
	$('.navbar-toggler').on('click', function() {
		if ($(this).on('clicked')) {
			$(this).toggleClass('change');
			$('body').toggleClass('noscroll');
			$(this).sildeRight('.navbar-nav').toggleClass('show-menu');
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Loading();
	activeMenu();
});