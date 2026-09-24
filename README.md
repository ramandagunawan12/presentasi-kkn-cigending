# Presentasi Digital KKN Cigending 2026

Template presentasi website untuk KKN Reguler Universitas Muhammadiyah Bandung.

## Struktur
- `index.html` — isi presentasi
- `style.css` — desain dan responsive layout
- `script.js` — navigasi, animasi, progress bar
- `assets/` — tempat foto/logo

## Cara upload ke GitHub Pages
1. Buat repository baru, misalnya `presentasi-kkn-cigending`.
2. Upload `index.html`, `style.css`, `script.js`, dan folder `assets`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu Save.
6. Tunggu deployment. URL biasanya:
   `https://USERNAME.github.io/presentasi-kkn-cigending/`

## Mengganti foto
Template saat ini memakai kartu placeholder agar langsung tampil tanpa file foto.
Jika ingin memakai foto asli, ubah elemen `.photo` di `index.html` menjadi contoh:
`<div class="photo" style="background:url('assets/foto-01.jpg') center/cover"> ... </div>`

## Catatan data ATS
Template menggunakan total **25 anak** sesuai data KKN Cigending yang diberikan. Rincian usia/jenis kelamin/RT-RW belum diisi karena belum tersedia di template ini.
