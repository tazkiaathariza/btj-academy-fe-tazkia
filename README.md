# Basic Web Development - Task 2 - Tazkia Athariza

Folder ini merupakan task kedua dari materi Basic Web Development. Pada tugas kali ini, file dibuat menggunakan HTML5 dan CSS3. Struktur dari folder adalah sebagai berikut :

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
|    |-- computer.avif
|    |-- myphoto.jpg
|-- README.md
```

### Penggunaan :
1. Download atau clone repository ini :
```
git clone https://github.com/tazkiaathariza/btj-academy-fe-tazkia.git
```
2. Buka file 'LandingPage.html' untuk melihat hasil
3. Pada navigation bar, tekan 'About' untuk melihat halaman 'AboutMe'

## Landing Page

Merupakan halaman web sederhana yang memuat sambutan, navigation bar, form untuk log in, foto, dan footer. Struktur dalam tag 'body' adalah sebagai berikut :

1. Header :
    - H1 (untuk sambutan)
    - Navigation bar (untuk melihat menu)
2. Main :
    - H2 dan p (untuk sambutan)
    - form (untuk log in)
    - figure (untuk media berupa gambar)
3. Footer :
    - p (hak cipta)

File CSS eksternal dipanggil pada tag 'head'.

## About Me

Merupakan halaman web sederhana yang memuat foto diri, nama, paragraf tentang diri sendiri, riwayat pendidikan, riwayat pekerjaan, dan motto. Struktur dalam tag 'body' adalah sebagai berikut :

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
        - table (untuk tabel)
    - section work:
        - h3 (untuk judul section) 
        - ol (untuk list ordered)
    - section motto :
        - h3 (untuk judul section) 
        - p (untuk isi)
3. Footer :
    - p (untuk quotes)

File CSS eksternal dipanggil pada tag 'head'.
