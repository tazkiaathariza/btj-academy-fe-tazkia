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

    if(pesanError.length < 2) {
        document.getElementById("pesanPassword").innerText = "Everything's OK";
        document.getElementById("pesanPassword").style.color = "green";
    } else {
        document.getElementById("pesanPassword").innerText = "Should be " + pesanError;
        document.getElementById("pesanPassword").style.color = "red";
    }
}

// function to spin logo in navbar
let degree = 0;

function spinLogo() {
    let logoFlower = document.getElementById("logo");
    degree += 360;
    logoFlower.style.transform =`rotate(${degree}deg)`;
}


// redirect (still not working. Will fix this later)
function redirect() {
    window.location.replace("../html/AboutMe.html");
}
