---
title: 'Async Method setTimeout'
---

# Async Method - setTimeout

## `setTimeout()`

`setTimeout` hanya akan menjalankan sekali ketika proses Async telah selesai berdasarkan waktu yang telah ditentukan. Memiliki dua parameter, yang pertama adalah callback, dan yang kedua adalah waktu dalam milidetik (ms). Syntax `setTimeout`:

```js
setTimeout(callback, timeMilis)
```

## Contoh penggunaan

Berikut contoh penerapan `setTimeout()`, yang akan memunculkan text setelah 5 detik:

```js
setTimeout(function() {
   alert('Async function menggunakan setTimeout()')
}, 5000) // Dalam milidetik

console.log('Program selesai')
```