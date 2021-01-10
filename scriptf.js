// https://www.sitepoint.com/community/t/highlight-the-active-link-in-a-navigation-menu/38169
var elements = document.getElementById("toggleNav").children[0].children
for (var i = 0; i < elements.length; i++) {
    var url = document.URL;
    var href = elements[i].href;
    var index = url.indexOf("/", 22);
    url = url.substring(22, index);
    if ((index == -1 && elements[i].innerHTML == "Home")
        || (index != -1 && href.includes(url)))
        document.links[i].className += " active";
}

var volunteer = "volunteer experience"
var interns = "internships from 2006-2009"
var courses = "Selected Courses"
function toggle(obj, text) {
  obj.innerHTML = (obj.innerHTML == "Hide "+text) ? "Show "+text : "Hide "+text ;
}