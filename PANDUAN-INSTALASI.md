# Panduan Instalasi — Putri Bali POS v3.7

> **Update ke v3.7** (tutup kas selisih, Arsip Transaksi Lama, filter rekap):
> 1. Apps Script: ganti seluruh isi **Kode.gs** dan **Notifikasi.gs**, lalu **tambah berkas baru**: tombol **+** di samping *Files* → *Script* → beri nama **Arsip** → tempel isi **Arsip.gs**. Simpan → **Deploy → Manage deployments → ✏️ → New version → Deploy**. Tanpa setup ulang (sheet ArsipBatch, ArsipTransaksi, ArsipKoreksi dibuat otomatis).
> 2. Frontend: salin isi ZIP ke repo (**pertahankan `js/config.js`**). Ada berkas/folder baru: `ArsipTransaksi/index.html` dan `404.html` — ikut di-push.
> 3. Buka **Menu → Migrasi Data & Arsip Transaksi → Arsip Transaksi Lama → Ubah** dan isi **tanggal aplikasi mulai dipakai** (mis. 1 Nov 2026).
>
> **Cara pakai Arsip Transaksi Lama** (alamat langsung: `https://dahnial.github.io/EMAS-POS/ArsipTransaksi`)
> 1. **Pilih periode** (bulan sebelum aplikasi dipakai) → *Buka / Buat Batch*.
> 2. **Input Manual** per baris, atau **Import Excel**: tekan *Unduh Template Excel*, isi, lalu *Pilih File*. Sistem menampilkan **validasi** (valid / duplikat / salah) sebelum menyimpan; hanya baris valid yang disimpan.
> 3. Kasir menekan **Ajukan ke Owner**; Owner menekan **Setujui & Kunci** (atau dari Pusat Persetujuan). Setelah dikunci, data masuk ke Laporan bulan tersebut & laporan tahunan.
> 4. Periode terkunci hanya bisa diubah lewat tombol **Koreksi** (wajib alasan). Semua koreksi tercatat; koreksi dari kasir menunggu persetujuan Owner.
> - Arsip **tidak** masuk ke transaksi kasir, kas laci, brankas, bank, maupun stok. Tanggal transaksi asli dipisah dari tanggal input. Setiap baris punya ID unik (HIS-…) dan ID batch (MIG-…); data yang sama diimpor dua kali otomatis ditolak.
>
> **Tutup kas:** bila uang fisik berbeda dari sistem, aplikasi meminta **hitung ulang**. Setelah dicek dan ditekan *Sudah Dicek, Simpan*, selisih dicatat dan saldo laci berikutnya mengikuti uang fisik.
>
> **Laporan:** pilih Hari ini / 7 hari / Bulan ini / Bulan lalu / Tahun ini, pilih bulan atau tahun, lalu buka **Filter Rekapan** (jenis transaksi, sumber data Operasional/Historis, logam, kadar, kasir, metode bayar, kata kunci). Daftar transaksi hasil filter tampil di bagian bawah.


> **Riwayat: update ke v3.6** (email notifikasi Owner, tambah kas laci, kamera absensi, login Gmail):
> 1. Apps Script: ganti seluruh isi **Kode.gs** dan **Notifikasi.gs** → **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. Tanpa setup ulang.
> 2. Frontend: salin isi ZIP ke repo (**pertahankan `js/config.js`**) → push → tutup–buka aplikasi di semua HP/PC.
> 3. **Login sekali sebagai Owner** setelah update: email notifikasi Owner otomatis diaktifkan dan pekerja latar pengirim email dipasang.
>
> **Email notifikasi Owner** dikirim ke (urutan): email di *Notifikasi → Konfigurasi → Email Owner* → email akun Owner → Gmail admin → akun Google pemilik Apps Script. Email dikirim oleh pekerja latar setiap ±1 menit, untuk kejadian: pengajuan batal/edit/hapus nota, pengeluaran besar, izin, **permintaan tambah kas**, selisih tutup kas, dan ringkasan harian pukul 21.00. Uji dengan tombol **Kirim Tes Email**. Cek juga folder Spam.
>
> **Login Gmail admin — bila gagal, periksa 4 hal ini (Pengaturan → Login Gmail Admin → Tes Login Google):**
> 1. Kolom **Gmail admin** wajib diisi (tanpa ini tombol Google tidak muncul).
> 2. Google Cloud → APIs & Services → Credentials → klik OAuth client Anda → **Authorized JavaScript origins** berisi persis `https://dahnial.github.io` (tanpa `/EMAS-POS`, tanpa `/` di akhir). Bukan di *Authorized redirect URIs*. Simpan, tunggu 5–10 menit.
> 3. **OAuth consent screen**: status *In production* (tekan **Publish app**), atau Gmail admin dimasukkan ke *Test users*.
> 4. Kode.gs sudah di-deploy **New version** (bukan hanya disimpan).


> **Riwayat: update ke v3.5** (cetak struk/nota bersih, pratinjau nota pas layar, WhatsApp rapi, sedekah nominal cepat, struk pemasukan, bunyi notifikasi, login Gmail admin):
> 1. Apps Script: ganti seluruh isi **Kode.gs** → **Deploy → Manage deployments → ✏️ → New version → Deploy**. Tanpa setup ulang.
> 2. Frontend: salin isi ZIP ke repo (**pertahankan `js/config.js`**) → push. Muat ulang paksa di HP/PC (tutup–buka aplikasi).
>
> **Mengaktifkan Login Gmail Admin (opsional, sekali saja ±10 menit):**
> 1. Buka https://console.cloud.google.com dengan Gmail admin → buat/pilih proyek (mis. "Putri Bali POS").
> 2. Menu **APIs & Services → OAuth consent screen** → User type **External** → isi nama aplikasi & email → simpan. Di bagian *Test users* / *Audience*, tekan **Publish app** (agar tidak kedaluwarsa tiap 7 hari).
> 3. Menu **APIs & Services → Credentials → Create credentials → OAuth client ID** → Application type **Web application**.
>    - *Authorized JavaScript origins*: isi alamat aplikasi Anda **tanpa garis miring di akhir**, mis. `https://dahnial.github.io` (tambahkan juga domain sendiri bila ada).
>    - Tekan **Create** → salin **Client ID** (berakhiran `.apps.googleusercontent.com`).
> 4. Di aplikasi: **Pengaturan Toko → Login Gmail Admin → Atur Login Gmail** → isi Gmail admin (boleh lebih dari satu, pisahkan koma) dan Client ID → **Simpan**.
> 5. Cara pakai: di halaman login tekan tab **Owner / Direksi**. Bila Gmail admin sudah masuk di browser itu, aplikasi langsung masuk tanpa kata sandi. Di HP/PC lain atau bila Gmail belum masuk, tekan **Lanjutkan dengan Google** atau isi username & kata sandi Owner seperti biasa.
> 6. Setelah menekan **Keluar**, login otomatis dimatikan di perangkat itu sampai Anda menekan tombol Google lagi (supaya bisa ganti akun / login manual).
>
> Catatan cetak di HP Android: tekan **Cetak Struk** → pilih printer atau **Simpan sebagai PDF**. Untuk printer thermal Bluetooth gunakan tombol **Bluetooth**.


> **Riwayat: update ke v3.4** (hutang emas sesuai gram nota, kadar baru bisa disimpan/dihapus, tombol Install aplikasi, notifikasi di tengah layar HP):
> 1. Apps Script: ganti seluruh isi **Kode.gs** saja → **Deploy → Manage deployments → ✏️ → New version → Deploy**. Tanpa setup ulang.
> 2. Frontend: salin isi ZIP ke repo (**pertahankan `js/config.js`**). Ada berkas baru: `manifest.webmanifest`, `sw.js`, `img/icon-180.png`, `img/icon-192.png`, `img/icon-512.png` — pastikan ikut di-push.
> 3. Install di HP Android (Chrome): buka situs → tombol **Install** di kanan atas (atau di halaman login) → **Install**. Setelah terpasang tombolnya hilang sendiri. iPhone: Safari → Bagikan → *Tambahkan ke Layar Utama*.
> 4. Hutang emas yang dicatat di v3.3 (dengan konversi kadar) tidak berubah otomatis. Bila perlu, hapus lalu catat ulang sesuai gram di nota.


> **Riwayat: update ke v3.3** (emas brankas, hutang emas toko, kartu karyawan di HP):
> 1. Apps Script: ganti seluruh isi **Kode.gs** dan **Migrasi.gs** (Notifikasi.gs & appsscript.json tidak berubah).
> 2. **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. URL `/exec` tetap. **Jangan** jalankan setup lagi — sheet baru `EmasBrankas` & `HutangEmas` serta kolom baru dibuat otomatis.
> 3. Frontend: salin isi ZIP baru ke repo (**pertahankan `js/config.js` Anda**) → `git add .` → `git commit -m "v3.3"` → `git push`. Lalu muat ulang paksa di setiap HP/komputer.
> 4. Buka menu **Hutang Emas** → tekan **Ubah** untuk mengisi harga emas murni supplier hari ini.
>
> **Cara pakai singkat**
> - **Buyback / tukar tambah**: pilih *Barang disimpan ke* → Stok etalase, Brankas emas, atau Tidak dicatat; dan kondisinya (Baik/Rusak/Model kembar).
> - **Brankas → tab Emas & Perak**: *Masukkan* (barang kembalian, saldo awal), *Tarik dari Etalase* (barang rusak/kembar), lalu *Keluarkan* ke: etalase (perbaikan/sepuh/custom, isi berat hasil & ongkos), lebur (jadi leburan di brankas), jual, atau setor supplier.
> - **Hutang Emas** (v3.4): *Ambil Barang* → isi berat sesuai nota (nota 10 gr = hutang 10 gr). *Bayar Uang* → isi uang disetor dan **nilai gram dari supplier** (contoh 2 jt = 2 gr → sisa 8 gr; gram terisi otomatis dari harga hari ini dan bisa diubah). *Setor Emas* → gram disetor langsung mengurangi hutang. Tombol **Isi untuk Lunas** mengisi sisa otomatis.
> - Semua operasi bisa dibatalkan utuh (ikon tempat sampah); emas, stok, kas & bank ikut kembali.


> **Riwayat: update v3.0 / v3.1 ke v3.2** (sedekah, riwayat piutang, stok dengan nilai acuan, logo struk, tampilan HP):
> 1. Di proyek Apps Script: ganti seluruh isi **Kode.gs**, **Notifikasi.gs**, dan **Migrasi.gs** dengan versi baru (appsscript.json tetap).
> 2. **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. URL `/exec` tetap sama. **Jangan** jalankan setup lagi — sheet baru `RiwayatBayar` dibuat otomatis saat pertama dipakai.
> 3. Frontend: salin isi ZIP baru ke folder repo (termasuk berkas baru `img/logo-struk.jpg`), **tetapi pertahankan `js/config.js` milik Anda**, lalu `git add .` → `git commit -m "v3.2"` → `git push`.
> 4. Di setiap HP/komputer: muat ulang paksa (Ctrl+Shift+R, atau tutup-buka tab di HP). Data tidak hilang.
>
> Catatan: pembayaran piutang/pinjaman yang dicatat **sebelum** v3.2 tidak punya riwayat rinci (hanya jumlah terbayarnya). Pembayaran berikutnya tercatat lengkap di tab **Riwayat**.

Toko Emas & Perak Putri Bali · Pasar Oyehe, Nabire

Aplikasi terdiri dari dua bagian:

- **Backend**: proyek Google Apps Script (4 berkas: `Kode.gs`, `Notifikasi.gs`, `Migrasi.gs`, `appsscript.json`). Menyimpan data di Google Sheets dan foto di Google Drive.
- **Frontend**: isi ZIP ini (`index.html`, `css/`, `js/`, `img/`), di-host di GitHub Pages.

Urutan wajib: **A. Backend** → **B. Isi config.js** → **C. Push ke GitHub** → **D. Aktifkan Pages** → **E. Uji** → **F. Pindahkan data lama** → **G. Notifikasi WA** → **H. Go-live**.

> Buat **proyek Apps Script BARU** untuk versi ini. Jangan menimpa proyek lama: data lama dipindahkan lewat menu **Migrasi Data** (langkah F), sehingga aplikasi lama tetap aman sampai Anda siap pindah.

---

## A. Backend (Google Apps Script)

Gunakan akun Google **yang sama** dengan aplikasi lama, supaya foto lama tetap terbaca.

1. Buka https://script.google.com → **Proyek baru** → beri nama `Putri Bali POS`.
2. Ganti nama `Code.gs` menjadi `Kode`, hapus isinya, lalu tempel seluruh isi **Kode.gs**.
3. Klik **＋ → Script**, beri nama `Notifikasi`, tempel isi **Notifikasi.gs**.
4. Klik **＋ → Script**, beri nama `Migrasi`, tempel isi **Migrasi.gs**.
5. ⚙️ **Project Settings** → centang **Show "appsscript.json" manifest file in editor** → buka `appsscript.json` → ganti seluruh isinya dengan **appsscript.json** yang diberikan.
6. Kembali ke `Kode.gs` → dropdown fungsi pilih **`setupAppEnvironment`** → ▶ **Run** → **Review permissions** → pilih akun → *Advanced* → *Go to Putri Bali POS* → **Allow** (Sheets, Drive, kirim email, akses luar untuk WhatsApp, pemicu).
   - Buka **Execution log**: harus muncul `✅ SETUP SELESAI` beserta link Spreadsheet dan folder Drive.
   - Setup juga mengisi **contoh data 14 hari** dan memasang 2 pekerja latar (antrean notifikasi tiap menit, tugas per jam).
   - Menjalankan ulang aman: setup mendeteksi bahwa database sudah ada dan tidak membuat ganda.
7. **Deploy → New deployment → ⚙️ Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - **Deploy** → salin URL yang berakhiran **`/exec`**.
8. Uji di browser: buka `URL_EXEC?action=health` → harus tampil JSON `{"success":true,…}`.
   Bila yang tampil halaman login Google atau HTML, akses deploy belum **Anyone**.

> **Setiap kali kode backend diubah:** Deploy → **Manage deployments** → ✏️ → Version: **New version** → Deploy. URL `/exec` tetap sama. Jangan membuat *New deployment* karena URL akan berubah.

## B. Isi alamat backend di frontend

Buka `js/config.js`, ganti `XXXX` dengan URL `/exec` Anda:

```js
window.APP_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfy...abc/exec'
};
```

## C. Push ke GitHub (lewat terminal)

**Folder kerja = folder hasil ekstrak ZIP ini** (folder yang langsung berisi `index.html`, `css`, `js`, `img`). Jalankan `git init` di folder inilah: bukan di folder induknya, dan jangan masuk lebih dalam.

1. Install Git (Windows: https://git-scm.com/download/win, pengaturan bawaan) → buka PowerShell → `git --version`.
2. Identitas Git (sekali saja):
   ```bash
   git config --global user.name "Nama Anda"
   git config --global user.email "email-akun-github@contoh.com"
   ```
3. Di GitHub: **+ → New repository** → nama mis. `putri-bali-pos` → **Public** → **jangan** centang README/.gitignore/license → Create.
4. Buka PowerShell **di folder hasil ekstrak** (Explorer → klik address bar → ketik `powershell` → Enter), lalu cek isinya:
   ```powershell
   dir
   ```
   Harus terlihat `index.html`, `css`, `js`, `img`. Kalau yang terlihat folder lain, jangan lanjut dulu.
5. Jalankan satu per satu:
   ```bash
   git init
   git add .
   git commit -m "Putri Bali POS v3"
   git branch -M main
   git remote add origin https://github.com/USERNAME/putri-bali-pos.git
   git push -u origin main
   ```
   Saat diminta password, tempel **Personal Access Token**, bukan password akun:
   https://github.com/settings/tokens → *Generate new token (classic)* → centang **repo** → salin `ghp_...`.
   Layar memang tidak menampilkan karakter saat token ditempel. Itu normal.

> **Sudah punya repo EMAS-POS lama?** Ganti saja isinya: salin semua isi ZIP ini ke folder repo lama (timpa), lalu `git add .` → `git commit -m "Upgrade v3 Putri Bali"` → `git push`.

## D. Aktifkan GitHub Pages

Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch **main** / **(root)** → **Save** → centang **Enforce HTTPS**.
Tunggu 1–2 menit. Situs aktif di `https://USERNAME.github.io/putri-bali-pos/`.

> HTTPS wajib: kamera (selfie absensi) dan GPS diblokir browser tanpa HTTPS.

## E. Uji

1. Buka URL situs → layar login tampil, nama toko terisi (artinya backend terhubung).
2. Login **Owner** `owner` / `PutriBali@2026` · **Kasir** `kasir_siti` / `123456` atau `kasir_rina` / `123456`.
3. Kasir: buat satu penjualan dengan No. HP pelanggan → struk & nota Putri Bali tampil → buka Google Sheets (sheet `Transaksi`) → baris baru muncul.
4. Kasir: buka nota → **Ajukan Pembatalan** → login Owner → **Pusat Persetujuan** → Setujui.
5. DevTools (F12) → Console → ketik `Perf.table()` untuk melihat waktu respons server.

## F. Pindahkan data dari aplikasi lama (Migrasi Data)

Login sebagai Owner → menu **Migrasi Data**.

**Sumber A, spreadsheet lama (data paling lengkap):**
1. Tempel URL spreadsheet database aplikasi lama.
2. Centang data yang dipindahkan → **Pindai (tanpa menulis)** → periksa angka *Ditambah / Diperbarui / Dilewati*.
3. **Jalankan Migrasi**.
4. Cek transaksi, stok, saldo kas, dan foto. Uji login 1 akun karyawan dengan PIN sementara **123456**.

**Sumber B, file cadangan JSON:** dari menu *Backend & Basis Data → Unduh Backup JSON* di aplikasi lama. Isinya hanya riwayat yang sedang tampil, jadi gunakan sumber A bila tersedia.

Catatan migrasi:
- Aman diulang: data yang sama **tidak dobel**. Tepat sebelum pindah, jalankan migrasi sekali lagi untuk menangkap transaksi terbaru (delta sync).
- Akun Owner lama tidak diimpor; riwayatnya dialihkan ke Owner aplikasi ini.
- Sandi lama tidak bisa dipindahkan. Karyawan lama mendapat **PIN sementara 123456** dan perlu menggantinya.
- Bila ingin mulai bersih tanpa data contoh, jalankan dulu **Kosongkan Semua Data** (menu Backend) sebelum migrasi.

## G. Notifikasi WhatsApp (Fonnte) & Email

1. Daftar di https://fonnte.com → **Device** → tambah nomor WA toko → scan QR → salin **token**.
2. Aplikasi → **WhatsApp & Notifikasi → Konfigurasi**:
   - Tempel token → isi **Nomor WA Owner** → **Cek Perangkat** (status harus `connect`) → **Kirim Tes WA**.
   - Nyalakan saklar WhatsApp dan/atau Email → isi Email Owner → **Kirim Tes Email**.
   - Atur **Matriks Notifikasi**: pilih kejadian mana yang dikirim lewat WA/Email, dan ubah isi pesan bila perlu → **Simpan Konfigurasi**.
3. Kejadian otomatis yang tersedia: nota ringkas ke WA pelanggan, pengeluaran besar, pengajuan batal/edit/hapus nota, izin karyawan, keputusan Owner ke karyawan, tugas baru, selisih tutup kas, ringkasan harian pukul 21.00 (termasuk piutang jatuh tempo).
4. **Blast promo**: tab *Blast WhatsApp* → Muat Penerima (dari CRM) → Deteksi Nomor WA → tulis pesan dengan `{nama}`, `{toko}` → pilih batch 10/20/50 → Mulai Blast. Server tetap mengirim 1 batch per menit walau halaman ditutup.
   Tips anti-blokir: mulai dari batch 10, jeda acak "3-8" detik, dan jangan kirim tautan yang sama ke ratusan orang dalam 1 jam.
5. **CRM Pelanggan** terisi otomatis dari transaksi yang mencantumkan No. HP. Pelanggan dengan belanja ≥ Rp50 juta atau ≥ 5 transaksi masuk segmen **VIP**.

Batasan: email akun Gmail biasa ±100 penerima/hari; pengiriman WA bergantung status perangkat Fonnte; balasan WA dari pelanggan tidak tercatat otomatis.

## H. Go-live (mulai dipakai nyata)

Berurutan, dari editor Apps Script (dropdown fungsi → ▶ Run) atau menu Backend:

1. `hapusSemuaDataTransaksi()` (atau tombol **Kosongkan Semua Data**), lalu jalankan migrasi (langkah F) bila perlu.
2. Isi **Pengaturan**: profil toko, titik GPS toko (tombol *Pakai lokasi saya*), radius absensi, rekening, harga kadar, format nota.
3. Ganti sandi Owner dari menu **Ubah Kata Sandi**. Tambah/ubah akun karyawan, dan **reset PIN** akun demo atau nonaktifkan akun yang tidak dipakai.
4. `matikanDemoMode()` → tombol akun demo hilang dari layar login.
5. `kunciProduksi()` → reset & kosongkan data tidak bisa dijalankan lagi tanpa `bukaKunciProduksi()`.

## I. Fungsi pemeliharaan (editor Apps Script)

| Fungsi | Kegunaan |
|---|---|
| `setupAppEnvironment()` | Instalasi pertama (database, folder, contoh data, pekerja latar) |
| `resetDataDummy()` | Hapus semua data transaksi lalu isi ulang contoh data 14 hari. Akun & sandi yang ada tidak diubah (akun demo yang terhapus dibuat lagi). |
| `resetPasswordSuperAdmin()` | Reset sandi Owner. Isi konstanta `PASSWORD_BARU_SUPERADMIN` di Kode.gs, atau biarkan kosong untuk `PutriBali@2026`. Semua sesi Owner keluar. |
| `hapusSemuaDataTransaksi()` | Kosongkan data transaksi (akun & pengaturan tetap) |
| `matikanDemoMode()` / `nyalakanDemoMode()` | Sembunyikan / tampilkan tombol akun demo di login |
| `kunciProduksi()` / `bukaKunciProduksi()` | Kunci / buka kunci reset data |
| `pasangTrigger()` | Pasang ulang pekerja latar bila hilang |
| `cekStatusSistem()` | Ringkasan jumlah baris, pemicu, kuota email di log |

Dari aplikasi (Owner → **Backend & Basis Data → Pemeliharaan Data**): Status Sistem, Log Audit, **Reset ke Data Dummy** (ketik `RESET`), dan **Kosongkan Semua Data** (ketik `KOSONGKAN`). Keduanya otomatis mengunduh cadangan JSON sebelum menghapus.

## Hak akses

| Tindakan | Owner | Karyawan |
|---|---|---|
| Buat transaksi | Langsung | Langsung |
| Edit / batalkan / hapus transaksi | Langsung | **Ajukan → menunggu ACC Owner** |
| Pengeluaran ≥ batas persetujuan (bawaan Rp20 juta) | Langsung | Menunggu ACC; kas baru berkurang setelah disetujui |
| Stok, Brankas, Bank, Piutang, Laporan, Pengaturan, Notifikasi, CRM, Migrasi | ✅ | ❌ |
| Absensi selfie + GPS (dalam radius toko) | ✅ | ✅ |

## Troubleshooting

| Gejala | Penyebab | Solusi |
|---|---|---|
| Login: "GAS_URL belum diisi" | `config.js` masih `XXXX` | Isi URL `/exec`, push ulang |
| Login: "Backend tidak mengembalikan JSON" | Deploy bukan "Anyone", atau URL bukan `/exec` | Deploy: Execute as **Me**, akses **Anyone** |
| "Database belum dibuat" | `setupAppEnvironment()` belum dijalankan | Jalankan di editor |
| Perubahan Kode.gs tidak berpengaruh | Belum *New version* | Manage deployments → ✏️ → New version |
| Notifikasi menumpuk di antrean | Pekerja latar belum aktif / token salah / perangkat Fonnte putus | `pasangTrigger()`, cek token, Cek Perangkat |
| "Terlalu banyak percobaan salah" | 6× salah sandi dalam 10 menit | Tunggu 10 menit, atau `resetPasswordSuperAdmin()` untuk Owner |
| Semua sesi Owner keluar | Sandi direset | Login ulang dengan sandi baru |
| 404 di GitHub Pages | `git init` di folder yang salah | Push ulang dari folder yang berisi `index.html` (`git push -u origin main --force`) |
| Halaman tanpa warna/gaya | Struktur `css/` `js/` `img/` rusak | Pastikan struktur utuh sebelum `git init` |
| Situs masih versi lama | Cache browser | Ctrl+Shift+R atau jendela Incognito |
| GPS/kamera tidak muncul | Bukan HTTPS / izin ditolak | Pakai URL `https://…github.io`, izinkan lokasi & kamera |

## Catatan keamanan

- Sandi disimpan dalam bentuk hash bergaram (SHA-256). Sesi memakai token bertanda tangan (HMAC) yang berlaku 30 hari dan otomatis dicabut saat PIN/sandi direset.
- Hak akses diperiksa di server, bukan hanya disembunyikan di tampilan.
- Token Fonnte disimpan di Script Properties dan tidak pernah dikirim ke browser.
- Foto (selfie, bukti transfer, nota/KTP buyback) disimpan di Drive dengan akses "siapa pun yang punya tautan" agar bisa tampil di aplikasi. Selfie absensi otomatis dihapus setelah 48 jam.
- `GAS_URL` di `config.js` memang terlihat publik. Keamanan bergantung pada login, token, dan pemeriksaan peran di server.
