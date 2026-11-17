
// Begrüssung in der Browser-Konsole
console.log("Website erfolgreich geladen!");

const heroBg = document.querySelector(".hero-bg");

if (heroBg) {
    function updateScrollEffect() {
        const scroll = window.scrollY;

        heroBg.style.transform =
            `translateY(${scroll * 0.35}px)`;
    }

    window.addEventListener("scroll", updateScrollEffect, {
        passive: true
    });
}