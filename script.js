// ==========================================
// MENU MOBILE
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");

        menuToggle.textContent =
            nav.classList.contains("active") ? "×" : "☰";
    });

    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}


// ==========================================
// HEADER AO ROLAR
// ==========================================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


// ==========================================
// ANIMAÇÕES AO ENTRAR NA TELA
// ==========================================

const animatedElements = document.querySelectorAll(
    ".section-header, .project-text, .stat, .process-item, .tech-card, .challenge, .challenge-image, .impact-card, .partner, .firmware-box, .timeline-item"
);

if (animatedElements.length > 0) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {
        element.classList.add("animate");
        observer.observe(element);
    });

}


// ==========================================
// EFEITO SUAVE NO HERO
// ==========================================

const hero = document.querySelector(".hero");

if (hero) {

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight) {

            const heroBg = document.querySelector(".hero-bg");

            if (heroBg) {
                heroBg.style.transform =
                    `translateY(${scrollPosition * 0.12}px)`;
            }

        }

    });

}