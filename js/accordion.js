var expanded = null;
var selected = null;

function accordionClick() {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  this.classList.toggle("active");
  /* Toggle between hiding and showing the active panel */
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
    expanded = null;
  } else {
    panel.style.display = "block";
    if (expanded) {
      expanded.click();
    }
    expanded = this;
  }
}

function navButtonClick() {
  if (selected) {
    selected.click();
  }

  this.classList.toggle("active");
  selected = this;
}

function deselect() {
  if (selected) {
    selected.click();
    selected = null;
  }
}

function setAccordion() {
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", accordionClick);
  }
  var navButtons = document.getElementsByClassName("left-nav-button");
  for (i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", navButtonClick);
  }
}

window.addEventListener("load", setAccordion);
