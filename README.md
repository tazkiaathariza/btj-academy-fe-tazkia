# Basic Web Development - Task 3 - Tazkia Athariza

Folder ini merupakan task ketiga dari materi Basic Web Development. Pada task kali ini, file dibuat menggunakan HTML5 dan CSS3. Desain yang dibuat berbeda dari desain pada task sebelumnya. Selain itu, website juga sudah responsif pada device ukuran kecil. Struktur dari folder ini adalah sebagai berikut :

```
btj-academy-fe-tazkia
|-- src/
|  |-- css/
|    |-- style_aboutme.css
|    |-- style_landing.css
|  |-- html/
|    |-- AboutMe.html
|    |-- LandingPage.html
|  |-- img/
|    |-- screenshot
|    |-- background.svg
|    |-- icon.svg
|    |-- myphoto.jpg
|-- README.md
```

### Penggunaan :
1. Download atau clone repository ini :
```
git clone https://github.com/tazkiaathariza/btj-academy-fe-tazkia.git
```
2. Buka file 'LandingPage.html' untuk melihat hasil (disarankan menggunakan chrome).
3. Pada navigation bar, tekan 'About' untuk melihat halaman 'AboutMe'.

## Landing Page (Foto preview, penjelasan HTML dan CSS Task 3)

Merupakan halaman web sederhana yang memuat sambutan, navigation bar, form untuk log in, foto, dan footer. 

Preview landing page after modification:
![Landing page](/src/img/screenshot/landing_after.png)
It's already responsive!

![Landing page - responsive](/src/img/screenshot/responsive_landing.png)

Struktur dalam tag 'body' adalah sebagai berikut :

1. Header :
    - H1 (untuk sambutan)
    - Navigation bar (untuk melihat menu)
2. Main :
    - H2 dan p (untuk sambutan)
    - form (untuk log in)
    - figure (untuk media berupa gambar)
3. Footer :
    - p (hak cipta)

File CSS eksternal dipanggil pada tag 'head'. Dengan menggunakan CSS, berikut perubahan yang dilakukan:
1. Header : Membuat posisi tulisan menjadi sejajar, dan mengubah warna pada menu yang hover atau aktif.
2. Main : Membuat container, row, dan column untuk mengatur tata letak. Form juga diberi style (ukuran box input, warna button, ukuran item pada form, dll). Untuk mempermudah pengaturan, digunakan flexbox.
```
display: flex;
```
3. Footer : Memberi warna dan mengatur agar tulisan berada di tengah.
4. Mengatur responsivitas web dengan menggunakan 'media query' (untuk ukuran layar device kecil).
5. Memberikan animasi dan transisi pada komponen di dalam 'main'. 

```
/* Salah satu contoh animasi yang digunakan dalam landing page : */

@keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
}

/* penggunaan */

.part2 {
    animation: scaleUp 1.5s ease-in-out; 
}
```
6. Untuk selengkapnya, dapat dilihat pada file CSS (../src/css/style_landing.css).


## About Me (Foto preview, penjelasan HTML dan CSS Task 3)
Merupakan halaman web sederhana yang memuat foto diri, nama, paragraf tentang diri sendiri, riwayat pendidikan, riwayat pekerjaan, dan motto. 

Preview about me page after modification:
![About Me page](/src/img/screenshot/aboutme_after.png)
Preview 'motto section' after modification :
![Edu page](/src/img/screenshot/motto_after.png)
Preview 'education section' after modification :
![Edu page](/src/img/screenshot/education_after.png)
Preview 'work section' after modification :
![Edu page](/src/img/screenshot/work_after.png)

It's already responsive!

![About Me page - responsive](/src/img/screenshot/responsive_aboutme.png)

Struktur dalam tag 'body' adalah sebagai berikut :

1. Header :
    - H1 (untuk sambutan)
    - Navigation bar (untuk melihat menu)
2. Main :
    - H2 (untuk perkenalan nama)
    - figure (untuk media berupa gambar)
    - section introduction :
        - h3 (untuk judul section) 
        - p (untuk isi)
    - section education:
        - h3 (untuk judul section) 
        - div class="card" (untuk membuat card)
    - section work:
        - h3 (untuk judul section) 
        - table (untuk tabel)
    - section motto :
        - h3 (untuk judul section) 
        - p (untuk isi)
3. Footer :
    - p (untuk quotes)

File CSS eksternal dipanggil pada tag 'head'. Dengan menggunakan CSS, berikut perubahan yang dilakukan:
1. Header : Membuat posisi tulisan menjadi sejajar, dan mengubah warna pada menu yang hover atau aktif.
2. Main : Membuat container, row, dan column untuk mengatur tata letak. Untuk mempermudah pengaturan, digunakan flexbox.
    - Section introduction : dalam 1 container, terdapat 1 row dan 2 kolom (kolom foto dan tulisan). Styling warna, ukuran font, button, button hover, dll.
    - Section motto : menggunakan background-image. Tulisan diletakkan di tengah.
    - Section education : menggunakan card.
    - Section work : menggunakan tabel.
3. Footer : Memberi warna dan mengatur agar tulisan berada di tengah.
4. Mengatur responsivitas web dengan menggunakan 'media query' (untuk ukuran layar device kecil).
```
    @media (max-width: 768px) { 
        ....
    }
```
5. Memberikan animasi dan transisi pada komponen di dalam 'main'. 

```
/* Salah satu contoh animasi yang digunakan dalam about me page : */

@keyframes slideRight {
    0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
}
/* penggunaan */

.part2 {
    animation: scaleUp 1.5s ease-in-out; 
}
```
6. Untuk selengkapnya, dapat dilihat pada file CSS (../src/css/style_aboutme.css).
