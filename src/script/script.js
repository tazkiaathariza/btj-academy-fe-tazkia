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
        pesanError += "6 character (minimum), "
    }

    if (passwordInput.length > 30) { // maximum length validation
        pesanError = "less than 30 character, "
    }

    if (!/\d/.test(passwordInput)) {
        pesanError += "1 number, "; // number validation
    }

    if (!/[a-z]/.test(passwordInput)) { // lowercase validation
        pesanError += "1 lowercase letter, ";
    }
    
    if (!/[A-Z]/.test(passwordInput)) { // uppercase validation
        pesanError += "1 uppercase letter, ";
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) { // symbol validation
        pesanError += "1 symbol, ";
    }

    pesanError = pesanError.slice(0, -2);

    if(pesanError.length < 2) { // respond if password's correct
        document.getElementById("pesanPassword").innerText = "Everything's OK"; 
        document.getElementById("pesanPassword").style.color = "green";
    } else { // respond if password isn't correct
        document.getElementById("pesanPassword").innerText = "Should be " + pesanError;
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

// function to remind user if they use capslock

function remindCapslock(event){
    let pesanCaps = document.getElementById("reminderCapslock");

    if (event.getModifierState('CapsLock')){
        pesanCaps.innerHTML = "Your capslock is on";
        pesanCaps.style.color = "orange";
    } else {
        pesanCaps.innerHTML = null; // if user doesn't use caps
    }
}

// Function to validate form

function formValidation(event) {
    event.preventDefault(); // prevent when user to click submit

    console.log("Form submitted!"); // just checking

    let nameInput = document.getElementById("nama").value;
    let passwordInput = document.getElementById("password").value;
    let nameError = "";
    let passwordError = "";

    if (nameInput.trim() == "") { // check name
        nameError = "Please fill your name correctly";
    }

    if (passwordInput.trim() === "") { // check password
        passwordError = "Please fill your password correctly";
    }

    if (nameError !== "" || passwordError !== "") { // respond when form isn't filled properly
        document.getElementById("pesanNama").innerHTML = nameError;
        document.getElementById("pesanNama").style.color = "red";
        document.getElementById("pesanPassword").innerHTML = passwordError;
        document.getElementById("pesanPassword").style.color = "red";
    } else { // respond if form already filled properly
        alert("Welcome to my world," + " " + nameInput)
        location.replace("../html/AboutMe.html"); // redirect to aboutme page
    }

}

// function to spin logo in navbar

let degree = 0; // declare the degree
function spinLogo() {
    let logoFlower = document.getElementById("logo"); 
    degree += 360; // make it spin 360 degree
    logoFlower.style.transform =`rotate(${degree}deg)`; // transform when logo's clicked.
}