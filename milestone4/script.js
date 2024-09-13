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
            : "", "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, "</span> </p>\n    <p><strong>Father Name:</strong><span id=\"edit-edit\" class=\"editable\"> ").concat(fathername, "</span></p>\n    <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n    <p><strong>Address:</strong><span id=\"edit-address\" class=\"editable\"> ").concat(address, "</span></p>\n    \n    <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skill</h3>\n    <p id=\"edit-skill\" class=\"editable\">").concat(skill, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
function makeEditable() {
    var editableelements = document.querySelectorAll(".editable");
    editableelements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content;
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
