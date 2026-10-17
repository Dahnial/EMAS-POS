# Putri Bali POS v3 — Frontend (GitHub Pages)

Kasir & operasional **Toko Emas & Perak Putri Bali**, Pasar Oyehe, Nabire.
Frontend statis (HTML/CSS/JS vanilla). Backend: Google Apps Script REST API (berkas `Kode.gs`, `Notifikasi.gs`, `Migrasi.gs`, `appsscript.json` dikirim terpisah).

```
index.html          <- harus di root repository
css/style.css
img/                <- logo & stempel Putri Bali (dipakai di nota)
js/config.js        <- ISI GAS_URL di sini sebelum push
js/api.js           <- klien fetch PRO (timeout, retry, idempoten)
js/app.js           <- seluruh logika aplikasi
```

Fitur v3: kasir emas/perak + tukar tambah, nota resmi Putri Bali, stok etalase, kas laci & tutup kas, brankas, bank & QRIS, absensi selfie + GPS, piutang/hutang/pinjaman, persetujuan Owner (edit/batal/hapus nota karyawan, pengeluaran besar, izin), tugas karyawan, notifikasi WhatsApp (Fonnte) & email + blast per batch, CRM pelanggan, migrasi data dari aplikasi lama, reset data dummy.

Panduan lengkap: `PANDUAN-INSTALASI.md`.
