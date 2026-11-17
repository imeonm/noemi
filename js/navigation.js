document.querySelector("#navigation").innerHTML = `
    <nav>
        <a href="/portfolio/" class="logo">
            <img src="/portfolio/photos/LogoWeiss.png" alt="Logo">
        </a>

        <button class="menu-toggle" id="menuToggle">
            <span class="icon-open">☰</span>
            <span class="icon-close">✕</span>
        </button>

        <div class="menu-overlay" id="menuOverlay">
            <div class="menu-content">
                <a href="/portfolio/">HOME</a>
                <a href="/portfolio/aboutme.html">ABOUT ME</a>
                <a href="/portfolio/news.html">NEWS</a>
                <a href="/portfolio/contact.html">CONTACT</a>
            </div>
        </div>
    </nav>
`;
