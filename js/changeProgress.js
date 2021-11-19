var skillsIcons = document.querySelectorAll(".box-skills>i");

//animates the elements as they appear
function animations() {
  
    if (isInViewport(hrSkills)) {
    hrSkills.classList.add("separator-line");
    }else if(isInViewport(hrAbout)){
        hrAbout.classList.add("separator-line");
    }else if(isInViewport(hrProjects)){
        hrProjects.classList.add("separator-line");
    }

  skillsIcons.forEach((element) => {
      if(isInViewport(element)){
        element.classList.add("scale");
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
