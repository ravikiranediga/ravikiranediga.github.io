const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".content");

function showSection(id) {
  sections.forEach(sec => {
    sec.style.display = "none";
    sec.classList.remove("visible");
  });

  buttons.forEach(btn => btn.classList.remove("active"));

  const section = document.getElementById(id);
  const button = document.querySelector(`[data-section="${id}"]`);

  if (section) {
    section.style.display = "block";
    setTimeout(() => section.classList.add("visible"), 50);
  }

  if (button) button.classList.add("active");
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    showSection(btn.dataset.section);
  });
});

window.addEventListener("load", () => {
  showSection("about");
});
