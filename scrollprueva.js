// Si quieres animaciones al hacer scroll, puedes usar esto como base
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".scene");
  const trigger = window.innerHeight * 0.6;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
