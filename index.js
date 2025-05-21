const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    let opacity = 1 - scrollY / (heroHeight / 1.5);
    if (opacity < 0) opacity = 0;
    document.documentElement.style.setProperty("--text-opacity", opacity);

    let overlayOpacity = 0.6 + (scrollY / heroHeight) * 0.4;
    if (overlayOpacity > 1) overlayOpacity = 1;
    document.documentElement.style.setProperty(
        "--overlay-opacity",
        overlayOpacity
    );
});

// Intersection Observer para fade-up
const fadeElements = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Evita reanimar si ya se mostró
            }
        });
    },
    { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    fadeElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach((card) => {
        const image = card.querySelector(".team-image");
        const description = card.querySelector(".team-description");

        image.addEventListener("click", () => {
            description.classList.toggle("active");
        });
    });
});