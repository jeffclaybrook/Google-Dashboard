const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("expanded");
})

window.addEventListener("scroll", (e) => {
    const header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("add-shadow");
    } else {
        header.classList.remove("add-shadow");
    }
})

let navLink = document.querySelectorAll(".navlink");
for (let i = 0; i < navLink.length; i++) {
   navLink[i].onclick = function() {
      let j = 0;
      while (j < navLink.length) {
         navLink[j++].className = "navlink";
      }
      navLink[i].className = "navlink active";
   }
}