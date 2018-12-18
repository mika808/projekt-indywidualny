"use strict";
var iconHam = document.querySelector(".icon-hamburger");

function showMenu() {
  var x = document.getElementById("sidebarNav");
  if (x.className === "sidebar") {
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
}

iconHam.addEventListener("click", showMenu);

// -- M-O-D-A-L-S --

var modals = document.querySelectorAll(".modal");
modals.forEach(function(modal) {
  modal.addEventListener("click", function(e) {
    if (e.target === this) {
      modal.style.display = "none";
    }
  });
});

document.querySelectorAll(".show-modal").forEach(function(element) {
  element.addEventListener("click", function(e) {
    e.preventDefault();
    showModal(this);
  });
});

function showModal(elem) {
  var idModal = elem.dataset.target;
  document.getElementById(idModal).style.display = "flex";
}

document.querySelectorAll(".close-modal").forEach(function(element) {
  element.addEventListener("click", function(e) {
    e.preventDefault();
    closeModal(this);
  });
});

function closeModal(elem) {
  var idModal = elem.dataset.target;
  document.getElementById(idModal).style.display = "none";
}

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 27) {
    document.querySelectorAll(".modal").forEach(function(element) {
      element.style.display = "none";
    });
  }
});

function prepareSlider(input) {
  var label = input.parentElement.querySelector("#slider-value-label");
  label.innerHTML = input.value + " hours";
  var inputMin = input.getAttribute("min");
  var inputMax = input.getAttribute("max");
  var unit = (inputMax - inputMin) / 100;
  var percent = (input.value - inputMin) / unit;
  input.style.setProperty("--value", percent);
  label.style.setProperty("--value", percent);
}

var sendAfterSlider = document.getElementById("send-after-slider");
prepareSlider(sendAfterSlider);
sendAfterSlider.addEventListener("change", function(evt) {
  var input = evt.target;
  prepareSlider(input);
});

// -FLAG-
const flagComponents = document.querySelectorAll(".flagselect");
flagComponents.forEach(function(component) {
  const flagChosen = component.querySelector(".flagselect__chosen");
  const flagsList = component.querySelector(".flagselect__flags");
  const flagInput = component.querySelector("input");

  flagChosen.addEventListener("click", function() {
    if (flagsList.style.display !== "block") flagsList.style.display = "block";
    else flagsList.style.display = "none";
  });

  flagsList.addEventListener("click", function(e) {
    var elem;
    if (e.target.tagName === "IMG") elem = e.target.parentNode;
    else elem = e.target;
    flagChosen.innerHTML = elem.innerHTML;
    flagInput.value = elem.dataset.index;
    flagsList.style.display = "none";
  });
});
