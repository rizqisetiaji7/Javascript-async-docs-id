---
title: Worker Object
---

# Worker Object

Untuk menggunakan Web Worker API, bisa dengan membuat object `Worker`. Saat membuat object `Worker`, tidak akan secara otomatis berjalan, melainkan perlu memberikan perintah dengan cara mengirim pesan. Untuk mengirim pesan bisa dengan menggunakan method `postMessage()`.

Sedangkan untuk menerima balasan dari `Worker`, bisa dengan menggunakan event listener `onmessage`.
Data yang diterima adalah object `MessageEvent`.

> :memo: **Baca selengkapnya:** <br>
> [Worker Object](https://developer.mozilla.org/en-US/docs/Web/API/Worker) dan [MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)

## Membuat Worker

### Syntax Dasar

```js
const worker = new Worker(/*<String> worker js file or url*/)

// Example
const worker = new Worker('worker.js')
```

### Contoh Sederhana

Berikut contoh sederhana dalam menggunakan Object `Worker`:

```js
const worker = new Worker('worker.js')

worker.onmessage = () => { ... } // [!code --]
worker.addEventListener('message', function(message) {
   console.log(message.data)
})
```

Selanjutnya tinggal memberikan perintah untuk menjalankan Worker nya, serta jangan lupa untuk membuat file `js/worker.js`. Contoh disini Worker akan dijalankan setelah klik suatu tombol:

::: code-group
```js [index.js]
const worker = new Worker('js/worker.js')
worker.addEventListener('message', function(message) {
   console.log(message.data)
})

document.getElementById('button').onclick = function() {
   worker.postMessage(100000)
}
```

```js [worker.js]
addEventListener('message', function(event) {
   const total = event.data
   for (let 1 = 0; i < total; i++) {
      postMessage(i)
   }
})
```
:::