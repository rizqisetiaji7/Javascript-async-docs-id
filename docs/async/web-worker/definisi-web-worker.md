---
title: Definisi Web Worker
---

# Web Worker

## Definisi
Web Worker adalah kemampuan menjalankan proses Thread yang berbeda dibandingkan pada Main Thread atau Thread utama yang berjalan di halaman web.

## Keuntungan

Keuntungan menggunakan Web Worker adalah jika terdapat proses yang membutuhkan waktu lama, Web tidak akan mengalami `Freeze` atau web tidak merespon interaksi user akibat dari proses Thread utama yang berjalan secara Concurrent. 

Dengan menggunakan Web Worker, proses akan berjalan di Thread yang berbeda dari main Thread (yang biasa digunakan oleh UI).

> :memo: **Baca selengkapnya:** [Tentang Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)