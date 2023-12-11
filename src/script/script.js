// Function to validate name

function validateName() {
    let nameInput = document.getElementById("nama").value // take value from box input "nama"
    let pesanError = document.getElementById("pesanNama") // will manipulate element with this Id

    if (nameInput.length < 2) { // minimum length validation
        pesanError.innerHTML = "Minimum 2 character." // insert some line in pesanError
        pesanError.style.color = "red"  // change the color into red
    } else if (nameInput.length > 30) { // maximum length validation
        pesanError.innerHTML = "Should be less than 30 character."
        pesanError.style.color = "red"
    } else {
        pesanError.innerHTML = "Everything's OK" // message if everything is correct
        pesanError.style.color = "green" 
    }
}

// Function to validate password

function validatePassword() {
    let passwordInput = document.getElementById("password").value // take value from box input "password"
    let pesanError = "" // declare message

    if (passwordInput.length < 6) { // minimum length validation
        pesanError += "Minimum 6 character. "
    }

    if (passwordInput.length > 30) { // maximum length validation
        pesanError = "Should be less than 30 character. "
    }

    if (!/\d/.test(passwordInput)) {
        pesanError += "Minimum 1 number. "; // number validation
    }

    if (!/[a-z]/.test(passwordInput)) { // lowercase validation
        pesanError += "Minimum 1 lowercase letter. ";
    }
    
    if (!/[A-Z]/.test(passwordInput)) { // uppercase validation
        pesanError += "Minimum 1 uppercase letter. ";
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) { // symbol validation
        pesanError += "Minimum 1 symbol. ";
    }


    if(pesanError.length < 2) {
        document.getElementById("pesanPassword").innerText = "Everything's OK";
        document.getElementById("pesanPassword").style.color = "green";
    } else {
        document.getElementById("pesanPassword").innerText = pesanError;
        document.getElementById("pesanPassword").style.color = "red";
    }
}


// Function to show password on input box

function showPassword() {
    let passwordInput = document.getElementById("password");

    // check input type
    if (passwordInput.type === "password") { // if input type is still password (encrypted)
      passwordInput.type = "text"; // change into text
      return passwordInput
    } else { // if input type is already 'text'
      passwordInput.type = "password"; // change into password
      return passwordInput
    }
    
}


// redirect (still not working. Will fix this later)
function redirect() {
    window.location.replace("../html/AboutMe.html");
}
