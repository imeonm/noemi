
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

//slider
document.querySelectorAll(".gallery").forEach(gallery => {

    const track = gallery.querySelector(".gallery-track");
    const prevBtn = gallery.querySelector(".left");
    const nextBtn = gallery.querySelector(".right");

    let currentIndex = 0;

    function getVisibleSlides() {
        return window.innerWidth <= 700 ? 1 : 3;
    }

    function updateSlider() {
        const slides = track.querySelectorAll(".gallery-item");

        if (!slides.length) return;

        const containerWidth = gallery.querySelector(".gallery-container").clientWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;

        let offset = 0;

        for (let i = 0; i < currentIndex; i++) {
            offset += slides[i].getBoundingClientRect().width + gap;
        }

        const maxOffset = track.scrollWidth - containerWidth;

        if (offset >= maxOffset) {
            offset = maxOffset;

            let total = 0;
            currentIndex = 0;

            for (let i = 0; i < slides.length; i++) {
                total += slides[i].getBoundingClientRect().width + gap;

                if (total > maxOffset) {
                    currentIndex = i;
                    break;
                }
            }
        }

        track.style.transform =
            `translate3d(-${offset}px, 0, 0)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < track.children.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
});


/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("lightbox-close");

// Alle Galeriebilder anklickbar machen
document.querySelectorAll(".gallery-item img").forEach(img => {

    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });

});

// Lightbox schliessen
function closeImage() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

closeLightbox.addEventListener("click", closeImage);

// Beim Klick auf den dunklen Hintergrund schliessen
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeImage();
    }
});

// Mit Escape schliessen
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeImage();
    }
});
