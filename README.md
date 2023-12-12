# Basic Web Development - Task 4 - Tazkia Athariza

Folder ini merupakan task keempat dari materi Basic Web Development. Pada task kali ini, file dibuat menggunakan HTML5, CSS3, dan javascript. Struktur dari folder ini adalah sebagai berikut :

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
|    |-- script.js
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

## Penjelasan script (foto preview dan penjelasan)

Penjelasan kali ini berfokus tentang javascript. Untuk penjelasan mengenai CSS dan HTML, bisa dilihat di README pada branch sebelumnya (web-basic-day1, web-basic-day2, dan web-basic-day3). 

File eksternal JS disertakan pada file html dengan script :
    ```
    <script src="../script/script.js"></script>
    ```

### 1. Rotasi 360 derajat pada logo di navbar

Untuk memberikan efek rotasi pada gambar, langkahnya adalah sebagai berikut :

1. Membuat function 'spinLogo' pada file script.js
    ```
    let degree = 0; // declare the degree
    function spinLogo() {
        let logoFlower = document.getElementById("logo"); // get logo by id
        degree += 360; // make it spin 360 degree
        logoFlower.style.transform =`rotate(${degree}deg)`; // transform when logo's clicked
    }
    ```
2. Memanggil fungsi tersebut pada tag html yang akan berjalan ketika logo diklik
    ```
    <img src="../img/flower-pic.svg" alt="Logo" id="logo" onclick="spinLogo()">
    ```
3. Hasil :
    ![Rotation](/src/img/screenshot/rotation.png)

### 2. Validasi form

Ketika form masih kosong dan user klik button 'Log In', maka akan muncul validasi di bawah box input. Langkah :

1. Membuat fungsi
    ```
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
    ```
2. Memanggil fungsi dalam tag yang akan berjalan ketika user melakukan submit
    ```
    <form id ="formLogin" onsubmit="formValidation(event)" novalidate>
    ```
3. Hasil :
    ![Landing page](/src/img/screenshot/formvalidation.png)

### 3. Fitur show password

Agar bisa menampilkan password sebagai teks, langkahnya adalah sebagai berikut :

1. Membuat function show password
    ```
    function showPassword() {
    let passwordInput = document.getElementById("password"); // get password by id

    // check input type
    if (passwordInput.type === "password") { // if input type is still password (encrypted)
      passwordInput.type = "text"; // change into text
      return passwordInput
    } else { // if input type is already 'text'
      passwordInput.type = "password"; // change into password
      return passwordInput
    }
    }
    ```
2. Memanggil fungsi tersebut di icon 'eye' yang akan berjalan ketika icon diklik
    ```
    <span class="showPassword" onclick="showPassword()">👁️</span>
    ```
3. Hasil :
    ![Show](/src/img/screenshot/showpass.png)

### 4. Panduan mengisi password

Ketika user mulai typing, akan muncul validasi di bawah box input untuk memandu user. User akan diingatkan bila password harus berisi minimal 6 karakter, 1 simbol, 1 angka, 1 lowercase, dan 1 uppercase. Langkah :

1. Membuat fungsi validasi password
    ```
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

        // menghapus koma terakhir
        pesanError = pesanError.slice(0, -2);

        if(pesanError.length < 2) { // respond if password's correct
            document.getElementById("pesanPassword").innerText = "Everything's OK"; 
            document.getElementById("pesanPassword").style.color = "green";
        } else { // respond if password isn't correct
            document.getElementById("pesanPassword").innerText = "Should be " + pesanError;
            document.getElementById("pesanPassword").style.color = "red";
        }
    }
    ```
2. Memanggil fungsi yang akan berjalan saat user typing password
    ```
    <input type="password" id="password" name="password" placeholder="Insert your password" oninput="validatePassword()" onkeydown="remindCapslock(event)" required>
    ```
3. Hasil :
    ![Pass](/src/img/screenshot/panduanpassswordcaps.png)

### 5. Pengingat jika user menggunakan capslock

Ketika user mulai typing dan menggunakan capslock, maka akan muncul reminder di bawah box input. Langkah :

1. Membuat fungsi remindCapslock
    ```
    function remindCapslock(event){
        let pesanCaps = document.getElementById("reminderCapslock"); // get by id

        if (event.getModifierState('CapsLock')){
            pesanCaps.innerHTML = "Your capslock is on";
            pesanCaps.style.color = "orange";
        } else {
            pesanCaps.innerHTML = null; // if user doesn't use caps
        }
    }
    ```
2. Memanggil fungsi yang akan berjalan saat user typing password
    ```
   <input type="password" id="password" name="password" placeholder="Insert your password" oninput="validatePassword()" onkeydown="remindCapslock(event)" required>
    ```
3. Hasil :
    ![Capslock](/src/img/screenshot/panduanpassswordcaps.png)

### 6. Panduan mengisi username

Ketika user mulai typing, akan muncul validasi di bawah box input untuk memandu user. User akan diingatkan bila username harus lebih dari 2 karakter dan maksimal 30 karakter. Langkah :

1. Membuat fungsi validasi nama
    ```
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
    ```
2. Memanggil fungsi yang akan berjalan saat user typing username
    ```
    <input type="text" id="nama" name="nama" placeholder="Insert your username"  oninput="validateName()" required>
    ```
3. Hasil :
    ![Validasi Nama](/src/img/screenshot/panduannama.png)

### 7. Alert dan Redirect

Bila user berhasil submit, maka akan langsung muncul alert dan otomatis redirect ke halaman AboutMe.

1. Pada fungsi formValidation, terdapat perintah berikut yang memungkinkan munculnya alert untuk menyapa user dan redirect ke halaman aboutme.
    ```
        alert("Welcome to my world," + " " + nameInput)
        location.replace("../html/AboutMe.html"); // redirect to aboutme page
    ```
2. Hasil :
    ![Capslock](/src/img/screenshot/alert.png)