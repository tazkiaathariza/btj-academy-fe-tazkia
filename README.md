# Basic Web Development - Task 5 - Tazkia Athariza

Folder ini merupakan task kelima dari materi Basic Web Development. Pada task kelima, file dibuat menggunakan HTML5, CSS3, javascript, dan library jQuery. Struktur dari folder ini adalah sebagai berikut :

```
btj-academy-fe-tazkia
|-- src/
|  |-- css/
|    |-- style_aboutme.css
|    |-- style_landing.css
|  |-- html/
|    |-- AboutMe.html
|    |-- LandingPage.html
|  |-- script/
|    |-- index.js (untuk jQuery)
|    |-- script.js (untuk code javascript biasa)
|  |-- img/
|-- README.md
```

### Penggunaan :
1. Download atau clone repository ini :
```
git clone https://github.com/tazkiaathariza/btj-academy-fe-tazkia.git
```
2. Buka file 'LandingPage.html' untuk melihat hasil (disarankan menggunakan chrome).
3. Pada navigation bar, tekan 'About' untuk melihat halaman 'AboutMe'.

## Penjelasan index.js (penjelasan dan foto preview)

Penjelasan kali ini berfokus tentang jquery. Penjelasan mengenai CSS, HTML, dan javascript bisa dilihat di README pada branch sebelumnya (web-basic-day1, web-basic-day2, dst). 

File eksternal JS disertakan pada akhir file html dengan script :

    ```
    <script src="../script/index.js"></script>
    ```
jQuery CDN disertakan langsung pada tag head HTML :

    ```
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    ```

### Update script JS menggunakan jQuery!

1. Spin logo
    Untuk memberikan efek rotasi pada gambar, codenya sebagai berikut :

    ```
    let degree = 0;
    $("#logo").on("click", function(){
        degree += 360; 
        $("#logo").css("transform", `rotate(${degree}deg)`);
    })
    ```

    Hasil :
    ![Rotation](/src/img/screenshot/rotation.png)

2. Validasi form
    Ketika form masih kosong dan user klik button 'Log In', maka akan muncul validasi di bawah box input.

    ```
    $("#formLogin").on("submit", function(event){
        event.preventDefault();

        console.log("Form submitted!");

        let nameInput = $("#nama").val();
        let passwordInput = $("#password").val();
        let pesanNama = $("#pesanNama");
        let pesanPassword = $("#pesanPassword");
       
        if(nameInput == ""){ // check name
            pesanNama.text("Please fill your name correctly")
            pesanNama.css("color", "red")
        }

        if(passwordInput == ""){ // check password
            pesanPassword.text("Please fill your password correctly")
            pesanPassword.css("color", "red")
        }

    });
    ```
    Hasil :
    ![Landing page](/src/img/screenshot/formvalidation.png)

3. Fitur show password

Agar bisa menampilkan password sebagai teks. Code :

    ```
    $(".showPassword").on("click", function(){
        let passwordInput = $("#password"); // get password by id
        let inputType = passwordInput.attr("type");

        if (inputType === "password"){ // if input type is still password (encrypted)
            passwordInput.attr("type", "text"); // change into tex
        } else {
            passwordInput.attr("type", "password");;     
        }
    });
    ```

Hasil :
![Show](/src/img/screenshot/showpass.png)

5. Panduan mengisi password dan capslock reminder

Ketika user mulai typing, akan muncul validasi di bawah box input untuk memandu user. User akan diingatkan bila password harus berisi minimal 6 karakter, 1 angka, 1 lowercase, dan 1 uppercase. User juga akan diingatkan bila menggunakan capslock. Code :

    ```
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
        
            pesanError = pesanError.slice(0, -2); // delete the last ","
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

    });
    ```

Hasil :

![Pass](/src/img/screenshot/panduanpassswordcaps2.png)

5. Panduan mengisi username

Ketika user mulai typing, akan muncul validasi di bawah box input untuk memandu user. User akan diingatkan bila username harus lebih dari 2 karakter dan maksimal 30 karakter. Langkah :

    ```
        $("#nama").on("input", function() {
        let nameInput = $("#nama").val();
        let pesanError = $("#pesanNama");

        if (nameInput.length < 2) { // minimum length validation
            pesanError.text("Minimum 2 character.") // insert a line in pesanError
            pesanError.css("color", "red")  // change the color into red
        } else if (nameInput.length > 30) { // maximum length validation
            pesanError.text("Should be less than 30 character.")
            pesanError.css("color", "red")
        } else {
            pesanError.text("Everything's OK") // message if everything is correct
            pesanError.css("color", "green")
        }
    });
    ```

Hasil :

![Validasi Nama](/src/img/screenshot/panduannama.png)

### Tambahkan penggunaan fake API dan redirect ke halaman About Me!

Bila user berhasil submit, maka akan langsung muncul alert dan otomatis redirect ke halaman AboutMe. Username dan password harus sesuai dengan yang ada di 'https://dummyjson.com/users'.

    ```
    // code ini adalah bagian dari function formValidation (nomor 2). Diletakkan di akhir fungsi.

    if(pesanPassword.text() === "Everything's OK" && pesanNama.text() === "Everything's OK"){
                let url = "https://dummyjson.com/auth/login"
                $.ajax({
                    type: "POST",
                    url: url,
                    contentType: "application/json",
                    data: JSON.stringify ({
                        username: nameInput,
                        password: passwordInput,
                    }),
                    success: function(response) {  // Status 200, show alert and redirect
                    console.log(response);
                    alert("Welcome to my world," + " " + nameInput);
                    location.replace("../html/AboutMe.html");
                    },
                    error: function(error) { // status 400
                    console.log(error);
                    alert("Login failed. Please, insert the right username or password");
                    }
                });
            } 
    ```

Hasil :

![Alert](/src/img/screenshot/alert2.png)

### Update Halaman About Me

Membuat animasi yang diaplikasikan pada foto diri. Ketika diklik, foto akan memudar kemudian kembali lagi (opacity penuh) secara otomatis. Code : 

    ```
    $("#myphoto").on("click", function() {
        $(this).animate({ opacity: 0 }, 1000, function() { // fade out animation
          // Reset the opacity to the maximum
          $(this).css("opacity", 1).animate({ opacity: 1 }, 1000); //
        });
      });

    ```
Preview hasil (lebih baik coba langsung untuk melihat animasinya):

![Alert](/src/img/screenshot/jquery.png)

         