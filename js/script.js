function showMenu() {
    var x = document.getElementById("sidebarNav");
    if (x.className === "sidebar") {
        x.className += " responsive";
    } else {
        x.className = "sidebar";
    }
}



