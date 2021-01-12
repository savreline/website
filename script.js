$(function(){
  $("#header").load("/header.html"); 
  $("#nav").load("/nav.html", highlightNav);
  $("#footer").load("/footer.html"); 
});

// https://www.sitepoint.com/community/t/highlight-the-active-link-in-a-navigation-menu/38169
function highlightNav() {
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
}

var interns = "internships from 2006-2009"
var courses = "Selected Courses"
function toggle(obj, text) {
  obj.innerHTML = (obj.innerHTML == "Hide "+text) ? "Show "+text : "Hide "+text ;
}

var shiftWindow = function() { scrollBy(0, -50) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }

// https://stackoverflow.com/questions/31100690/using-bootstrap-data-toggle-collapse-and-scrollintoview-to-show-and-scroll-t
window.onload = function () {
  $('#mathCourses').on('shown.bs.collapse', function () {
    this.scrollIntoView();
  });
  $('#bcsCourses').on('shown.bs.collapse', function () {
    this.scrollIntoView();
  });
}
