$(document).ready(function() {

    // name validation

    $("#nama").on("input", function() {
        let nameInput = $("#nama").val();
        let pesanError = $("#pesanNama");

        if (nameInput.length < 2) { // minimum length validation
            pesanError.text("Minimum 2 character.") // insert some line in pesanError
            pesanError.css("color", "red")  // change the color into red
        } else if (nameInput.length > 30) { // maximum length validation
            pesanError.text("Should be less than 30 character.")
            pesanError.css("color", "red")
        } else {
            pesanError.text("Everything's OK") // message if everything is correct
            pesanError.css("color", "green")
        }
    });


    // password validation & capslock reminder

    $("#password").on({
        input: function(){
            let passwordInput = $("#password").val();
            let pesanError = "";

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
            let pesanPassword = $("#pesanPassword")

            if(pesanError.length < 2) { // respond if password's correct
                pesanPassword.text("Everything's OK")
                pesanPassword.css("color", "green")
            } else { // respond if password isn't correct
                pesanPassword.text("Should be " + pesanError)
                pesanPassword.css("color", "red")
            }
        },
        keydown: function(e){ // capslock reminder
            let pesanCaps = $("#reminderCapslock");
            
            if (event.getModifierState('CapsLock')){
                pesanCaps.text("Your capslock is on");
                pesanCaps.css("color", "orange");
            } else {
                pesanCaps.text(null); // if user doesn't use caps
            }
        }

    })


    // show password (error)
    $(".showPassword").on("click", function(){
        let passwordInput = $("#password");
        let inputType = passwordInput.attr("type");

        if (inputType === "password"){
            passwordInput.attr("type", "text");
        } else {
            passwordInput.attr("type", "password");;     
        }
    })

    // spin logo

    let degree = 0;

    $("#logo").on("click", function(){
        degree += 360; 
        $("#logo").css("transform", `rotate(${degree}deg)`);
    })

});




