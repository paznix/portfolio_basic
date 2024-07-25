
function menuBurger() {
    var x = document.querySelector(".burger__menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function burgerClose() {
    var x = document.querySelector(".burger__menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}

function handleClose() {
    var x = document.querySelector(".burger__menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        }
}