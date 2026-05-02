# Pixora Studio — Landing Page

Website landing page untuk jasa pembuatan website profesional.  
Dibangun dengan **React 18** + **Create React App**.

---

## 🍎 Panduan Setup dari Nol di Mac

Ikuti langkah-langkah berikut jika kamu baru pindah ke Mac dan belum pernah setup project React sebelumnya.

---

### LANGKAH 1 — Install Homebrew (Package Manager untuk Mac)

Homebrew adalah tool wajib di Mac untuk menginstall software lewat Terminal.

Buka **Terminal** (tekan `Cmd + Space`, ketik "Terminal", Enter), lalu jalankan:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Ikuti petunjuk di layar. Setelah selesai, verifikasi dengan:

```bash
brew --version
```

---

### LANGKAH 2 — Install Node.js

React membutuhkan Node.js. Install versi LTS (Long Term Support) via Homebrew:

```bash
brew install node
```

Verifikasi instalasi:

```bash
node --version   # harusnya v20.x.x atau lebih baru
npm --version    # harusnya v10.x.x atau lebih baru
```

---

### LANGKAH 3 — Install VS Code (Code Editor)

Download VS Code dari: https://code.visualstudio.com/

Setelah install, buka VS Code lalu tekan `Cmd + Shift + P`, ketik:
```
Shell Command: Install 'code' command in PATH
```
Ini memungkinkan kamu buka folder di VS Code langsung dari Terminal.

---

### LANGKAH 4 — Pindahkan / Clone Project Ini

**Opsi A — Jika kamu sudah punya folder project ini:**
```bash
# Pindah ke folder project (sesuaikan path-nya)
cd ~/Downloads/pixora-studio
```

**Opsi B — Jika menggunakan Git:**
```bash
git clone <url-repo-kamu>
cd pixora-studio
```

---

### LANGKAH 5 — Install Dependencies

Di dalam folder project, jalankan:

```bash
npm install
```

Perintah ini akan menginstall semua package yang dibutuhkan (React, dll).  
Tunggu hingga selesai — biasanya 1–2 menit.

---

### LANGKAH 6 — Jalankan Development Server

```bash
npm start
```

Browser akan otomatis terbuka di **http://localhost:3000**  
Website akan auto-refresh setiap kali kamu save perubahan.

---

### LANGKAH 7 — Build untuk Production

Jika sudah siap deploy ke hosting:

```bash
npm run build
```

Hasil build ada di folder `/build` — upload isi folder ini ke hosting kamu (cPanel, Netlify, Vercel, dll).

---

## 📁 Struktur File

```
pixora-studio/
├── public/
│   └── index.html          ← HTML template utama
├── src/
│   ├── index.js            ← Entry point React
│   ├── index.css           ← Global styles & CSS variables
│   ├── App.js              ← Root component, menyusun semua section
│   ├── components/
│   │   ├── Navbar.js       ← Navigation bar (fixed, scroll-aware)
│   │   └── Footer.js       ← Footer
│   └── sections/
│       ├── Hero.js         ← Hero / banner utama
│       ├── Marquee.js      ← Ticker berjalan
│       ├── Paket.js        ← Kartu paket harga
│       ├── Industri.js     ← Grid industri yang dilayani
│       ├── WhyUs.js        ← Keunggulan layanan
│       ├── Proses.js       ← Alur proses pengerjaan
│       ├── Testimoni.js    ← Testimonial klien
│       └── CtaFinal.js     ← Call-to-action penutup
├── package.json
└── README.md
```

---

## ✏️ Cara Kustomisasi

### Ganti nomor WhatsApp
Cari teks `6281234567890` di semua file dan ganti dengan nomor WA bisnis kamu.

### Ganti nama company
Cari `Pixora Studio` dan `Pixora<span>.</span>Studio` lalu sesuaikan.

### Ganti warna aksen
Di `src/index.css`, ubah nilai variabel:
```css
--accent:  #C8F04E;   /* warna hijau-kuning, ganti sesuai brand */
--accent2: #A8D93A;
```

### Update konten paket
Edit array `paketData` di `src/sections/Paket.js`.

### Update testimoni
Edit array `testimonials` di `src/sections/Testimoni.js`.

---

## 🌐 Deploy ke Vercel (Gratis & Mudah)

1. Daftar di https://vercel.com dengan akun GitHub
2. Push project ke GitHub
3. Di Vercel, klik "New Project" → import repo kamu
4. Klik "Deploy" — selesai! Website live dalam hitungan menit.

---

## 🛠 Tips Terminal Mac untuk Pemula

| Perintah | Fungsi |
|----------|--------|
| `pwd` | Lihat lokasi folder saat ini |
| `ls` | Tampilkan isi folder |
| `cd nama-folder` | Masuk ke folder |
| `cd ..` | Kembali ke folder sebelumnya |
| `code .` | Buka folder di VS Code |
| `Ctrl + C` | Hentikan server yang sedang berjalan |

---

Dibuat dengan ❤️ untuk Pixora Studio
