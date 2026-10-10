# Panduan Instalasi — Permata POS (GAS API + GitHub Pages)

Arsitektur: **Frontend** di GitHub Pages (`https://USERNAME.github.io/NAMA-REPO/`) → `fetch()` → **Backend** Google Apps Script (Web App `/exec`) → Google Sheets + Drive.

Urutan wajib: **A. Backend dulu** → **B. Isi config.js** → **C. Push ke GitHub** → **D. Aktifkan Pages** → **E. Uji**.

---

## A. Backend (Google Apps Script)

1. Buka https://script.google.com → **Proyek baru**.
2. Rename `Code.gs` → `Kode`, hapus isinya, tempel seluruh isi **Kode.gs** (berkas backend yang dikirim terpisah).
3. Project Settings (⚙️) → centang **Show "appsscript.json"** → buka berkasnya → ganti isinya dengan **appsscript.json** yang dikirim.
4. Dropdown fungsi → pilih **`setupAppEnvironment`** → ▶ Run → **Review permissions** → izinkan (Drive, Sheets, Gmail kirim email).
   - Buka *Execution log*: harus muncul `✅ SETUP SELESAI`.
   - ⚠️ **Jalankan HANYA SEKALI.** Menjalankan lagi akan menambah data dummy ganda.
5. **Deploy → New deployment → ⚙️ Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy → **salin URL yang berakhiran `/exec`**.
6. Uji di browser: buka `URL_EXEC?action=health` → harus tampil JSON `{"success":true,...}`.
   Kalau yang tampil halaman login Google atau HTML → akses belum "Anyone".

> Setiap kali Kode.gs diubah: **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. URL `/exec` tidak berubah.
>
> Kalau sebelumnya sudah memakai versi lama (yang punya `Index`, `Stylesheet`, `JavaScript`): hapus ketiga file HTML itu, ganti `Kode`, lalu deploy versi baru. Jangan jalankan `setupAppEnvironment()` lagi.

## B. Isi alamat backend di frontend

Buka `js/config.js` dan ganti `XXXX` dengan URL `/exec` Anda:

```js
window.APP_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfy...abc/exec'
};
```

## C. Push ke GitHub (lewat terminal)

**Folder kerja = folder hasil ekstrak ZIP `permata-pos-frontend`** (folder yang langsung berisi `index.html`, `css`, `js`). Di folder inilah `git init` dijalankan — bukan folder di atasnya, bukan masuk lebih dalam.

1. Install Git (Windows: https://git-scm.com/download/win, pengaturan default) → buka PowerShell → `git --version`.
2. Buat akun di https://github.com (username jadi bagian URL situs).
3. Identitas Git (sekali saja):
   ```bash
   git config --global user.name "Nama Anda"
   git config --global user.email "email-akun-github@contoh.com"
   ```
4. Di GitHub: **+ → New repository** → nama mis. `permata-pos` → **Public** → **jangan** centang README/.gitignore/license → Create.
5. Buka PowerShell **di folder `permata-pos-frontend`** (Explorer → klik address bar → ketik `powershell` → Enter), lalu cek:
   ```powershell
   dir
   ```
   Harus terlihat `index.html`, `css`, `js`. Kalau tidak → jangan lanjut.
6. Satu per satu:
   ```bash
   git init
   git add .
   git commit -m "Upload pertama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/permata-pos.git
   git push -u origin main
   ```
   Saat diminta password → tempel **Personal Access Token** (bukan password akun):
   https://github.com/settings/tokens → *Generate new token (classic)* → centang **repo** → salin `ghp_...`.
   Layar tidak menampilkan karakter saat paste — itu normal.

## D. Aktifkan GitHub Pages

Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch **main** / **(root)** → **Save** → centang **Enforce HTTPS**.
Tunggu 1–2 menit → situs live di `https://USERNAME.github.io/permata-pos/`.

> HTTPS wajib: kamera dan GPS absensi diblokir browser tanpa HTTPS.

## E. Uji

1. Buka URL situs → layar login tampil, nama toko terisi (artinya backend terhubung).
2. Login Owner `hj_ratna` / `Permata@2026`, Kasir `kasir_siti` / `123456`.
3. Buat satu transaksi → buka Google Sheets (sheet `Transaksi`) → baris muncul.
4. DevTools (F12) → Network → tidak ada error CORS.

## F. Update / redeploy

- Ubah frontend: `git add .` → `git commit -m "keterangan"` → `git push` → tunggu 1–2 menit → Ctrl+Shift+R.
- Ubah backend: edit Kode.gs → *New version* (lihat bagian A).

## G. Operasional backend (jalankan dari editor Apps Script)

| Fungsi | Kegunaan |
|---|---|
| `resetPasswordSuperAdmin()` | Reset password Owner (isi `PASSWORD_BARU_SUPERADMIN` dulu, atau kosong = `Permata@2026`). Semua sesi login keluar. |
| `resetDataDummy()` | Hapus semua data transaksi, isi ulang dummy. |
| `hapusSemuaDataTransaksi()` | Kosongkan data (go-live). |
| `matikanDemoMode()` | **Wajib sebelum dipakai nyata**: menyembunyikan password demo dari layar login. |
| `kunciProduksi()` | Cegah reset tak sengaja. |

**Go-live:** `hapusSemuaDataTransaksi()` → isi Pengaturan → ganti password Owner → `matikanDemoMode()` → `kunciProduksi()`.

## Troubleshooting

| Gejala | Penyebab | Solusi |
|---|---|---|
| Login: "GAS_URL belum diisi" | `config.js` masih `XXXX` | Isi URL `/exec`, push ulang |
| Login: "Backend tidak mengembalikan JSON" | Deploy bukan "Anyone", atau URL bukan `/exec` | Deploy ulang: Execute as Me, Anyone |
| Layar login nama toko kosong, error "Database belum dibuat" | `setupAppEnvironment()` belum dijalankan | Jalankan di editor |
| Perubahan Kode.gs tidak berpengaruh | Belum *New version* | Manage deployments → New version |
| 404 di GitHub Pages, repo berisi folder di root | `git init` di folder yang salah | Push ulang dari folder yang berisi `index.html` (`git push -u origin main --force`) |
| Halaman tanpa styling | `css/` `js/` rata di root | Pastikan struktur folder utuh sebelum `git init` |
| `Password authentication is not supported` | Perlu token | Buat Personal Access Token (langkah C.6) |
| Situs lama setelah push | Cache | Ctrl+Shift+R / Incognito |
| GPS/kamera tidak muncul | Bukan HTTPS / izin ditolak | Pakai URL `https://…github.io`, izinkan lokasi |

## Istilah singkat
- **Repository** — folder proyek di GitHub. **Commit** — simpan perubahan + catatan. **Push** — kirim ke GitHub. **Token** — "password khusus" GitHub untuk terminal.
