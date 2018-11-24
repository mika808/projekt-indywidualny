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

document.getElementById("show-exit-btn1").addEventListener("click", function(e) {
    e.preventDefault();
    var idModal = this.dataset.target;
    document.getElementById(idModal).style.display = "flex";
  });
  
  document.getElementById("show-exit-btn2").addEventListener("click", function(e) {
    e.preventDefault();
    var idModal = this.dataset.target;
    document.getElementById(idModal).style.display = "flex";
  });

  document.getElementById("cancelBtn").addEventListener("click", function() {
    var idModal = this.dataset.target;
    document.getElementById(idModal).style.display = "none";
  });

  document.getElementById("quitBtn").addEventListener("click", function() {
    var idModal = this.dataset.target;
    document.getElementById(idModal).style.display = "none";
  });

  document.getElementById("enterBtn").addEventListener("click", function() {
    var idModal = this.dataset.target;
    document.getElementById(idModal).style.display = "none";
  });