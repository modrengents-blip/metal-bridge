
// METAL BRIDGE - MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        menuToggle.textContent =
            navLinks.classList.contains("show") ? "✕" : "☰";
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        });
    });

}

// Smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";
