var toggleButton = document.getElementById("toggle-skills");
var skillsHide = document.getElementById("skill-section");
toggleButton.addEventListener("click", function () {
    if (skillsHide.style.display === "none") {
        skillsHide.style.display = "block";
    }
    else {
        skillsHide.style.display = "none";
    }
});
