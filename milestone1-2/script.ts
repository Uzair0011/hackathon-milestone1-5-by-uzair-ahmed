const toggleButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skillsHide = document.getElementById("skill-section") as HTMLElement;

toggleButton.addEventListener("click", () => {
  if (skillsHide.style.display === "none") {
    skillsHide.style.display = "block";
  } else {
    skillsHide.style.display = "none";
  }
});
