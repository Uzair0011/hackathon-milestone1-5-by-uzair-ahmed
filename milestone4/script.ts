// listing element
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const fathernameElement = document.getElementById(
      "fathername"
    ) as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
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
      addressElement &&
      fathernameElement &&
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillElement
    ) {
      const name = nameElement.value;
      const fathername = fathernameElement.value;
      const email = emailElement.value;
      const address = addressElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skill = skillElement.value;

      // picture element
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // Create Resume Output
      const resumeOutput = `
    <h2>Resume</h2>
    ${
      profilePictureURL
        ? `<img src= "${profilePictureURL}" alt="Profile Pic" class="profilePicture">`
        : ""
    }
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name}</span> </p>
    <p><strong>Father Name:</strong><span id="edit-edit" class="editable"> ${fathername}</span></p>
    <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span></p>
    <p><strong>Address:</strong><span id="edit-address" class="editable"> ${address}</span></p>
    
    <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span></p>

    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>

    <h3>Skill</h3>
    <p id="edit-skill" class="editable">${skill}</p>
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
