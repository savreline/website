$(function(){
  $("#nav").load("/nav.html", highlightNav);
});

// https://www.sitepoint.com/community/t/highlight-the-active-link-in-a-navigation-menu/38169
function highlightNav() {
  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL)
        document.links[i].className += " active";
    }
}

var courses = "Selected Courses"
function toggle(obj, text) {
  obj.innerHTML = (obj.innerHTML == "Hide "+text) ? "Show "+text : "Hide "+text ;
}

// https://stackoverflow.com/questions/31100690/using-bootstrap-data-toggle-collapse-and-scrollintoview-to-show-and-scroll-t
window.onload = function () {
  $('#mathCourses').on('shown.bs.collapse', function () {
    this.scrollIntoView({
      behavior: "smooth"
    });
  });
  $('#bcsCourses').on('shown.bs.collapse', function () {
    this.scrollIntoView({
      behavior: "smooth"
    });
  });
}
