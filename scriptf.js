var interns = "internships from 2006-2009"
var courses = "Selected Courses"
function toggle(obj, text) {
  obj.innerHTML = (obj.innerHTML == "Hide "+text) ? "Show "+text : "Hide "+text ;
}

// https://www.sitepoint.com/community/t/highlight-the-active-link-in-a-navigation-menu/38169
window.onload = function() {
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
  var hash = window.location.hash || "";
  if (hash == "#expand") {
    document.getElementById("internsTrigger").click()
    document.getElementById("interns").classList.remove("collapse");
    document.getElementById("interns").scrollIntoView();
    window.location.hash = "";
    // $("interns").removeClass("collapse");
  }
}();

// https://stackoverflow.com/questions/31100690/using-bootstrap-data-toggle-collapse-and-scrollintoview-to-show-and-scroll-t
$('#interns').on('shown.bs.collapse', function () {
  this.scrollIntoView();
});
$('#mathCourses').on('shown.bs.collapse', function () {
  this.scrollIntoView();
});
$('#bcsCourses').on('shown.bs.collapse', function () {
  this.scrollIntoView();
});
