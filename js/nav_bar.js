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

var y = window.scrollY;

var navbar = document.getElementById("navbar");
var fixed = navbar.offsetTop;

var navbarHeight=navbar.offsetHeight;
var parallaxWindow=document.getElementById("parallaxContainer");
var parallaxHeight=parallaxWindow.offsetHeight;


function removeActive() {
  var elems = document.querySelectorAll(".nav-item");

  [].forEach.call(elems, function(el) {
      el.classList.remove("active");
  }
  );}


function navbarActiveElements() {
    var two = isInViewport(document.getElementById("hrSkills")),
        three = isInViewport(document.getElementById("hrAbout")),
        four = isInViewport(document.getElementById("hrProjects")),
        five = isInViewport(document.getElementById("form"));

    removeActive();

    two ? document.getElementById("two").classList.add("active") :
        three ? document.getElementById("three").classList.add("active") :
        four ? document.getElementById("four").classList.add("active") :
        five ? document.getElementById("five").classList.add("active") :
        document.getElementById("one").classList.add("active");
}

function navbarFixed() {

  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed-top")
    parallaxWindow.style.marginTop = navbarHeight+"px";
    console.log(  navbarHeight);
  } else {
    navbar.classList.remove("fixed-top");
    parallaxWindow.style.marginTop = "0px";
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
