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

// -M-O-D-A-L-E-

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
}

var sendAfterSlider = document.getElementById("send-after-slider");
prepareSlider(sendAfterSlider);
sendAfterSlider.addEventListener("change", function(evt) {
  var input = evt.target;
  prepareSlider(input);
});
