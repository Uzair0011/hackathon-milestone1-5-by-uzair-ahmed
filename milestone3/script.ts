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
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Father Name:</strong> ${fathername}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}</p>
    
    <p><strong>Phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skill</h3>
    <p>${skill}</p>
    `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.error("The resume output element is missing");
      }
    } else {
      console.error("One or more form elements are missing");
    }
  });
