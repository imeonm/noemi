
document.querySelector("#navigation").innerHTML = `
    <nav>
        <a href="index.html" class="logo">
            <img src="photos/LogoWeiss.png" alt="Logo">
        </a>

        <button class="menu-toggle" id="menuToggle">
            <span class="icon-open">☰</span>
            <span class="icon-close">✕</span>
        </button>

        <div class="menu-overlay" id="menuOverlay">
            <div class="menu-content">
                <a href="index.html">HOME</a>
                <a href="aboutme.html">ABOUT ME</a>
                <a href="news.html">NEWS</a>
                <a href="contact.html">CONTACT</a>
            </div>
        </div>
    </nav>
`;

document.querySelector("#footer").innerHTML = `
    <footer>
        <p>© 2026 Noémi Meister</p>
    </footer>
`;

const menuToggle = document.querySelector("#menuToggle");
const menuOverlay = document.querySelector("#menuOverlay");

menuToggle.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

document.querySelectorAll(".menu-content a").forEach(link => {
    link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});
