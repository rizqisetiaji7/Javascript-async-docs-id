---
title: Window | JS DOM
---

# Window

Window merupakan interface atau representasi window yang berisikan DOM Document, dan merupakan turunan dari [EventTarget](/docs/dom/event-target). Beberapa function seperti `alert()`, `confirm()`, dan `prompt()` berasal dari object window. Pada window juga terdapat `method`, `property`, dan `event` yang bisa digunakan.

Sama seperti document untuk mengunakan window, kita tidak perlu membuat objectnya, cukup menggunakan kata kunci `window`.

> :memo: **Baca selengkapnya:** [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

## Window Property

Terdapat banyak sekali property yang ada pada `window`, berikut beberapa property-nya:

| Window Property | Deskripsi |
| --------------- | --------- |
| `Window.document` | Mengembalikan referensi ke dokumen yang ada di window |
| `Window.fullscreen` | Properti ini menunjukkan apakah window ditampilkan dalam layar penuh atau tidak |
| `Window.history` | Mengembalikan referensi ke riwayat object |
| `Window.indexedDB` | Menyediakan mekanisme bagi aplikasi untuk mengakses database yang ter-index secara asynchronous; Mengembalikan objek IDBFactory |
| `Window.innerHeight` | Mendapatkan tinggi area konten window browser, termasuk jika dirender, scrollbar horizontal |
| `Window.innerWidth` | Mendapatkan lebar area konten windo browser, termasuk jika dirender, scrollbar vertikal |
| `Window.localStorage` | Mengembalikan referensi ke objek penyimpanan lokal yang digunakan untuk menyimpan data yang hanya dapat diakses oleh origin yang membuatnya. |
| `Window.location` | Get/Set lokasi, atau URL saat ini, dari objek jendela |
| `Window.screen` | Mengembalikan referensi ke objek screen yang terkait dengan window |

Serta masih banyak sekali property lainnya.

## Window Method

Window juga memiliki banyak method, berikut contoh beberapa method-nya:

| Window Method | Deskripsi |
| ------------- | --------- |
| `Window.alert()` | Menampilkan dialog peringatan. |
| `Window.clearInterval()` | Membatalkan eksekusi berulang menggunakan `setInterval()` |
| `Window.clearTimeout()` | Membatalkan eksekusi yang tertunda menggunakan `setTimeout()` |
| `Window.setInterval()` | Menjadwalkan suatu fungsi untuk dieksekusi setiap kali dengan jumlah tertentu menggunakan milidetik |
| `Window.setTimeout()` | Menjadwalkan suatu fungsi untuk dijalankan dalam jangka waktu tertentu |
| `Window.close()` | Menutup jendela saat ini |
| `Window.confirm()` | Menampilkan dialog dengan pesan yang perlu ditanggapi oleh user |
| `Window.print()` | Membuka Dialog Print untuk mencetak dokumen saat ini |
| `Window.prompt()` | Mengembalikan teks yang dimasukkan oleh pengguna dalam dialog prompt |
| `Window.scroll()` | Menggulir jendela ke tempat tertentu dalam dokumen |

## Window Event

Window juga memiliki event yang bisa digunakan menggunakan `addEventListener()`, berikut contoh beberapa event-nya:

| Window Event | Deskripsi |
| ------------ | --------- |
| `error` | Diaktifkan ketika sumber daya gagal dimuat, atau tidak dapat digunakan. Misalnya, jika skrip mengalami kesalahan eksekusi atau gambar tidak dapat ditemukan atau tidak valid. |
| `resize` | Diaktifkan ketika jendela telah diubah ukurannya |
| `storage` | Diaktifkan ketika area penyimpanan (`localStorage` atau `sessionStorage`) telah dimodifikasi dalam konteks dokumen lain |

## Kode: Window

Berikut contoh kode dengan `Window` untuk mengetahui tinggi dan lebar layar:

::: code-group
```html [HTML]
<p id="content"></p>
<p id="urlLocation"></p>

<script>
   const content = document.getElementById('content')
   const urlLocation  = document.getElementById('urlLocation')

   const height = window.screen.height
   const width = window.screen.width
   const url = window.location.href

   content.textContent = `Window width (${width}) x height (${height})`
   urlLocation.textContent = `Current URL: ${url}`
</script>
```

```html [Output]
Window width (1366) x height (768)

Current URL: http://localhost:5173/docs/dom/window
```
:::