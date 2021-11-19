//change the toggler
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });
});
$(".nav .nav-link").on("click", function () {
  $(".nav").find(".active").removeClass("active");
  $(this).addClass("active");
});

//remove all nav-item active class
function removeActive() {
  var elems = document.querySelectorAll(".nav-item");

  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
}

var hrSkills = document.getElementById("hrSkills");
var hrAbout = document.getElementById("hrAbout");
var hrProjects = document.getElementById("hrProjects");

//change the active nav-item to the one in the viewport
function navbarActiveElements() {
  removeActive();

  isInViewport(hrSkills)
    ? document.getElementById("two").classList.add("active")
    : isInViewport(hrAbout)
    ? document.getElementById("three").classList.add("active")
    : isInViewport(hrProjects)
    ? document.getElementById("four").classList.add("active")
    : isInViewport(document.getElementById("form"))
    ? document.getElementById("five").classList.add("active")
    : document.getElementById("one").classList.add("active");
}

var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetHeight;
var fixed = navbar.offsetTop;
var parallaxWindow = document.getElementById("parallaxContainer");

//fixes the navbar
function navbarFixed() {
  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed-top");
    parallaxWindow.style.marginTop = navbarHeight + "px";
  } else {
    navbar.classList.remove("fixed-top");
    parallaxWindow.style.marginTop = "0px";
  }
}
