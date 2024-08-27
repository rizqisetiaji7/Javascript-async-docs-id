---
title: Async
---

# Async

Async digunakan untuk menandakan bahwa Function tersebut adalah function Asynchronous, dan secara otomatis mengembalikan Promise. 

Jadi, meskipun didalam function mengembalikan data real seperti `string`, `number`, atau `object`, dan menandai function tersebut sebagai async function secara otomatis response atau return value nya akan dibentuk dalam sebuah Promise.

Dengan menggunakan Async, sekarang tidak perlu membuat Promise secara manual, seperti pada materi sebelumnya.

## Menggunakan Async

Berikut contoh perbandingan antara menggunakan Promise manual dan Async:

**Manual Promise:**

```js
// return Promise<String>
function getNamePromise() {
   return new Promise(function(resolve, reject) {
      resolve('Your response data')
   })
}
```

**Setelah menggunakan Async**

```js
// return Promise<String>
async function getNameAsync() {
   return 'Your response data'
}
```

Bisa dilihat perbandingan diatas, dengan menggunakan kata kunci `async` didepan keyword function, secara otomatis function tersebut berjalan secara Asynchronous, dan kode menjadi lebih sederhana serta mudah dibaca.

### Mengambil Response

```js
getNameAsync()
   .then(response => console.log(response))
```