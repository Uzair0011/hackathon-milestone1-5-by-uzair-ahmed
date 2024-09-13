document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submission triggered"); // Debugging

    // Get form elements
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
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      !nameElement ||
      !fathernameElement ||
      !profilePictureInput ||
      !emailElement
    ) {
      console.error("Some form elements are missing");
      return; // Stop execution if any element is missing
    }

    console.log("All form elements found");

    const name = nameElement.value;
    const fathername = fathernameElement.value;
    const email = emailElement.value;
    const address = addressElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skill = skillElement.value;

    // Output the form values to console for debugging
    console.log({
      name,
      fathername,
      email,
      address,
      phone,
      education,
      experience,
      skill,
    });

    // Create Resume Output
    const resumeOutput = `
    <h2>Resume</h2>
    ${
      profilePictureInput.files?.[0]
        ? `<img src="${URL.createObjectURL(
            profilePictureInput.files[0]
          )}" alt="Profile Pic" class="profilePicture">`
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
    <h3>Skills</h3>
    <p>${skill}</p>
  `;

    // Insert into DOM
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      resumeOutputElement.classList.remove("hidden");

      console.log("Resume output updated");

      // Download as PDF button
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download as PDF";
      downloadButton.addEventListener("click", () => {
        window.print(); // open print dialog box
      });

      resumeOutputElement.appendChild(downloadButton);

      // Shareable Link Button
      const shareLinkButton = document.createElement("button");
      shareLinkButton.textContent = "Copy Shareable Link";
      shareLinkButton.addEventListener("click", async () => {
        try {
          // Generate a simple shareable link with user data
          const shareableLink = `https://yourdomain.com/resumes/${name.replace(
            /\s+/g,
            "_"
          )}_cv.html`;
          await navigator.clipboard.writeText(shareableLink); // Copy to clipboard
          alert("Shareable Link copied to Clipboard: " + shareableLink);
        } catch (err) {
          console.error("Failed to copy link: ", err);
          alert("Failed to copy the link. Please try again.");
        }
      });

      resumeOutputElement.appendChild(shareLinkButton);
    } else {
      console.error("Resume output container not found");
    }
  });
