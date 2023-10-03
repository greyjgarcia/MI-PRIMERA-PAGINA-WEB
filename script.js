alert:("Hola este es mi Javascript");
//alert("Hola este es mi Javascript");
let nombre = "grey";
let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };