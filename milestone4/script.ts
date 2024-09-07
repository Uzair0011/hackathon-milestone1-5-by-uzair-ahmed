// listing element
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillElement = document.getElementById(
      "skill"
    ) as HTMLTextAreaElement;

    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skill = skillElement.value;

      // Create Resume Output
      const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit-name" class="editable">${name} </span></p>
    <p><strong>Email:</strong>  <span id="edit-edit" class="editable"> ${email}  </span> </p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone}  </span> </p>

    <h3>Education</h3>
    <p  class="education">${education}</p>

    <h3>Experience</h3>
    <p  class="experience" >${experience}</p>

    <h3>Skill</h3>
    <p  class="skills" >${skill}</p>
    `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
      }
    } else {
      console.error("One or more form elements are missing");
    }
  });
function makeEditable() {
  const editableelements = document.querySelectorAll(".editable");
  editableelements.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";
      // replace content;
      if (currentElement.tagName === "p" || currentElement.tagName === "span") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
