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

document.querySelectorAll(".show-modal").forEach(
    function(element){
        element.addEventListener(
            "click", function(e){
                e.preventDefault();
                showModal(this);
            }
        )
    }
)

function showModal(elem) {
    var idModal= elem.dataset.target;
    document.getElementById(idModal).style.display = "flex";
}


document.querySelectorAll(".close-modal").forEach(
    function(element){
        element.addEventListener(
            "click", function(e){
                e.preventDefault();
                closeModal(this);
            }
        )
    }
)

function closeModal(elem) {
    var idModal= elem.dataset.target;
    document.getElementById(idModal).style.display = "none";
}


document.addEventListener(
    'keyup', function(e){
        if(e.keyCode === 27){
            document.querySelectorAll(".modal").forEach(
                function(element){
                    element.style.display = "none";
                }
            )
        }
    }
)

