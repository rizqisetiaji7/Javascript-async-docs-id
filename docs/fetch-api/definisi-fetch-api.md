---
title: Fetch API
---

# Fetch API
## Definisi Fetch API

**Fetch API** merupakan fitur baru sebagai alternatif dari penggunaan [AJAX](/docs/ajax/definisi-ajax). Pada saat menggunakan AJAX, `Callback` diperlukan untuk menerima response atau data dari server, sedangkan pada Fetch API secara default sudah menggunakan [Promise](/docs/promise/definisi-promise), sehingga penggunaan Fetch API lebih mudah dibandingkan menggunakan AJAX.

Hampir seluruh web browser modern saat ini, sudah mendukung penggunaan Fetch API. Hal yang biasa dilakukan pada AJAX, sekarang bisa juga dilakukan menggunakan Fetch API.

> :memo: **Baca selengkapnya:** [Tentang Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Konsep dan Penggunaan

Fetch API menggunakan konsep `Request` dan `Response` object. Hal ini mengizinkan untuk menggunakan apapun yang dibutuhkan di masa depan, seperti service workers, Cache API, dan lain-lain yang serupa untuk menghandel atau modifikasi request dan response.