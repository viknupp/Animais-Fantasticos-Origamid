export default function initAnimaScroll() {
  const sections = document.querySelectorAll(".js_scroll");
  if (sections.length) {
    const middleWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - middleWindow < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        } else if (section.classList.contains("active")) {
          section.classList.remove("active");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
