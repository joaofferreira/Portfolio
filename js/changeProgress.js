var skillsIcons = document.querySelectorAll(".box-skills>i");
var progressBars = document.querySelectorAll(".progress-bar");
var resumeBtn = document.getElementById("resumeBtn");

//animates the elements as they appear
function animations() {
  if (isInViewport(hrSkills)) {
    hrSkills.classList.add("separator-line");
  } else if (isInViewport(hrAbout)) {
    hrAbout.classList.add("separator-line");
  } else if (isInViewport(hrProjects)) {
    hrProjects.classList.add("separator-line");
  }
  if (isInViewport(resumeBtn)) {
    resumeBtn.classList.add("shake");
  }
  skillsIcons.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("scale");
    }
  });

  progressBars.forEach((element) => {
    if (isInViewport(element)) {
      str = element.getAttribute("width");
      width = str.match(/\d+/g)[0];
        element.classList.add("progressBar");
        element.style.setProperty('--w', width+'%');

    }
  });
}

function changeProgress() {
  var progressBar = document.querySelectorAll(".progress-bar");
  progressBar.forEach((element) => {
    var bool = isInViewport(element);
    if (bool) {
      console.log(element.getAttribute("style"));
    }
  });
}
