window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".section-nav-bar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Add background after scrolling 50px
    } else {
        navbar.classList.remove("scrolled"); // Keep it transparent at the top
    }
});
