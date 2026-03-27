const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle mobile menu
toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Optional: Add shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const offset = 100; // header height

        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

const tabs = document.querySelectorAll(".role-tab");
const contents = document.querySelectorAll(".role-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.role).classList.add("active");
    });
});

$(document).ready(function () {
    $('.openDemo').on('click', function (e) {
        e.preventDefault();
        $('#demoPopup').addClass('active');
        $('#demoOverlay').addClass('active');
    });

    // CLOSE POPUP
    function closePopup() {
        $('#demoPopup').removeClass('active');
        $('#demoOverlay').removeClass('active');
    }

    $('#closeDemo, #demoOverlay').on('click', function () {
        closePopup();
    });

    // FORM SUBMIT
    $('#demoForm').on('submit', function (e) {
        e.preventDefault();

        $('#successMsg').addClass('active');
        this.reset();

        setTimeout(function () {
            $('#successMsg').removeClass('active');
            closePopup();
        }, 5000);
    });
})




