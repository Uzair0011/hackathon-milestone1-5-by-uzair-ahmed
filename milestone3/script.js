var _a;
// listing element
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var fathernameElement = document.getElementById("fathername");
    var emailElement = document.getElementById("email");
    var addressElement = document.getElementById("address");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (addressElement &&
        fathernameElement &&
        profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillElement) {
        var name_1 = nameElement.value;
        var fathername = fathernameElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Create Resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL
            ? "<img src= \"".concat(profilePictureURL, "\" alt=\"Profile Pic\" class=\"profilePicture\">")
            : "", "\n    <p><strong>Name:</strong> ").concat(name_1, "</p>\n    <p><strong>Father Name:</strong> ").concat(fathername, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    \n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skill</h3>\n    <p>").concat(skill, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
