import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";
function select(){
	$(".my-select").chosen({
        width:"100%",
        html_template: '{text} <img style="border:3px solid #ff703d;padding:0px;margin-right:4px"  class="{class_name}" src="{url}" />'
});
}
document.addEventListener('DOMContentLoaded', () => {
	Loading();
});