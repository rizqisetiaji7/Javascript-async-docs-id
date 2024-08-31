---
title: 'Async Method setInterval'
---

# Async Method - setInterval

## `setInterval()`

`setInterval` akan menjalankan proses Async terus menerus secara periodik berdasarkan waktu yang telah ditentukan. Memiliki dua parameter, yang pertama adalah callback, dan yang kedua adalah waktu dalam milidetik (ms). Syntax `setInterval`:

```js
setInterval(callback, timeMilis)
```

## Contoh penggunaan

Berikut contoh penerapan `setInterval()`:

```js{10}
const setTime = function() {
   const date = new Date()
   const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
   
   const text = document.getElementById('textInterval')
   text.textContent = `Pukul ${time}`
}

// akan terus dijalankan setiap 1 detik
setInterval(setTime, 1000)
console.log('Program Selesai.')
```