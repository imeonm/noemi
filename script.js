
// Begrüssung in der Browser-Konsole
console.log("Website erfolgreich geladen!");

// Beispiel: Klick auf einen Projekt-Button
const projects = document.querySelectorAll(".project-card");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        console.log("Projekt angeklickt:", project.querySelector("h3").textContent);
    });
});
