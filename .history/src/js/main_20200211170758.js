import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";

function active_header(){
	$('header').click('nav-link').addClass('active')
}
document.addEventListener('DOMContentLoaded', () => {
	Loading();
});