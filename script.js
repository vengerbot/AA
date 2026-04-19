

function validateForm() {

    // CLEAR ALL ERRORS FIRST
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("birthError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("userError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("issueError").innerHTML = "";
    document.getElementById("actionError").innerHTML = "";
    document.getElementById("freqError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    let isValid = true;


    let name = document.getElementById("fullName").value.trim();
    if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Name must be at least 2 characters.";
        isValid = false;
    }

    let birthdate = document.getElementById("birthdate").value;
    if (birthdate === "") {
        document.getElementById("birthError").innerHTML = "Birthdate is required.";
        isValid = false;
    } else {
        let age = new Date().getFullYear() - new Date(birthdate).getFullYear();
        if (age < 13) {
            document.getElementById("birthError").innerHTML = "You must be at least 13 years old.";
            isValid = false;
        }
    }

    let sex = document.getElementsByName("sex");
    let sexSelected = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sexSelected = true;
        }
    }
    if (!sexSelected) {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        isValid = false;
    }

    let email = document.getElementById("email").value.trim();
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Enter a valid email.";
        isValid = false;
    }



    let username = document.getElementById("username").value.trim();
    let pattern = /^[a-zA-Z0-9]+$/;

    if (username.length < 8 || username.length > 20) {
        document.getElementById("userError").innerHTML = "Username must be 8–20 characters.";
        isValid = false;
    }
    if (!pattern.test(username)) {
        document.getElementById("userError").innerHTML = "Only letters and numbers allowed.";
        isValid = false;
    }

    let password = document.getElementById("password").value;

    if (password.length < 10) {
        document.getElementById("passError").innerHTML = "Password must be at least 10 characters.";
        isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
        document.getElementById("passError").innerHTML += "<br>Must include uppercase.";
        isValid = false;
    }
    if (!/[a-z]/.test(password)) {
        document.getElementById("passError").innerHTML += "<br>Must include lowercase.";
        isValid = false;
    }
    if (!/[0-9]/.test(password)) {
        document.getElementById("passError").innerHTML += "<br>Must include a number.";
        isValid = false;
    }

    let confirm = document.getElementById("confirmPassword").value;
    if (confirm !== password) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match.";
        isValid = false;
    }


    let issue = document.getElementById("issue").value;
    if (issue === "") {
        document.getElementById("issueError").innerHTML = "Please choose an issue.";
        isValid = false;
    }

    let actions = document.getElementsByName("actions");
    let checked = false;
    for (let i = 0; i < actions.length; i++) {
        if (actions[i].checked) {
            checked = true;
        }
    }
    if (!checked) {
        document.getElementById("actionError").innerHTML = "Select at least one action.";
        isValid = false;
    }

    let freq = document.getElementsByName("frequency");
    let freqSelected = false;
    for (let i = 0; i < freq.length; i++) {
        if (freq[i].checked) {
            freqSelected = true;
        }
    }
    if (!freqSelected) {
        document.getElementById("freqError").innerHTML = "Select your frequency.";
        isValid = false;
    }

    // SUCCESS MESSAGE
    if (isValid) {
        document.getElementById("successMessage").innerHTML = "🎉 Successfully signed up!";
    }

    return isValid;
}