/******************************************** toggle in header ********************************************/

let icon = document.querySelector(".t-icon");
let ul = document.querySelector("nav-toggle a");
icon.addEventListener("click", () => {
    navbar .classList.toggle("showData");
    if (navbar .classList.contains("showData")) {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
});

