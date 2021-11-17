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
var parallaxWindow=document.getElementById("parallax");
var parallaxHeight=parallaxWindow.offsetHeight;

function navbarActiveElements() {
  y = window.scrollY;
  if(y>240){
    document.getElementById("hrSkills").classList.add("separator-line");
  }
  if(y>300){
    document.getElementById("hrAbout").classList.add("separator-line");
  }
  switch (y) {
    case (y > 0 && y > 0) :
      break;
    case (y > 0 && y > 0):
     // console.log('Mangoes and papayas are $2.79 a pound.');
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
    //  console.log(`Sorry, we are out of`);
  }
}


function navbarFixed() {

  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed-top")
    parallaxWindow.style.marginTop = navbarHeight+"px";
  } else {
    navbar.classList.remove("fixed-top");
    parallaxWindow.style.marginTop = "0px";
  }
}
