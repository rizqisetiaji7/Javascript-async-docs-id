---
title: Promise Method
---

# Promise Method

Promise memiliki tiga method yang biasa digunakan, diantaranya:

- `then()`     : Digunakan untuk mendapatkan atau mengubah data ketika Promise Sukses.
- `catch()`    : Digunakan untuk mendapatkan informasi error ketika Promise gagal.
- `finally()`  : Akan selalu dijalankan ketika terjadi sukses atau gagal pada Promise.

> :memo: **Baca selengkapnya:** [Promise Instance Methods](https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Promise#instance_methods)

## Case Penggunaan

Berikut contoh kode pada materi sebelumnya, kali ini dengan dibungkus didalam sebuah function `getProduct()`. Setelah Promise dibuat, kita bisa menggunakan promise method:

```js
function getProduct() {
   return new Promise(function(resolve, reject) {
      const ajax = new XMLHttpRequest()
      ajax.open('GET', 'api/product.json')
      ajax.onload = function() {
         if (ajax.status === 200) {
            resolve(ajax.responseText)
         } else {
            reject(`Error GET Product: ${ajax.status}`)
         }
      }
      ajax.send()
   })
}

// Penggunaan Promise Method
getProduct()
   .then(function(response) { // [!code ++]
      return JSON.parse(response) // Konversi json // [!code ++]
   }) // [!code ++]
```

::: info :memo: NOTE
Jika bentuk kode seperti pada contoh diatas, maka otomatis akan menjadi promise baru, namun datanya sesuai dengan yang sudah di konversi pada `JSON.parse(response)`. Dengan kata lain, kita bisa menggunakan berkali-kali method `then()` dengan cara di `chaining`.
:::

Setelah data dari reponse promise sebelumnya telah di konversi, maka kita bisa menggunakan `then()` lagi lalu memanipulasi datanya sesuai dengan kebutuhan, misalnya menampilkan datanya ke elemen DOM.

### Konversi Data Jika Sukses

```js
getProduct()
   .then(function(response) {
      return JSON.parse(response)
   })

   /**
    * Menggunakan Promise baru dengan data yang telah di konversi 
    * dari method 'then()' sebelumnya
    */
   .then(function(json) {
      /**
       * Manipulasi response data 
       * Misalnya menampilkan datanya ke element DOM
       */ 
      document.getElementById('id').textContent = json.id
      document.getElementById('name').textContent = json.name
      document.getElementById('price').textContent = json.price
   })
```

### Error Handling

Promise juga dapat menangani Error dengan menggunakan method `catch()`, yang menerima parameter yang berisi informasi error tersebut, berikut contohnya:

```js{3-5}
getProduct()
   .then(function(json) { ... })
   .catch((error) => console.log(error)) // [!code ++]
```

### Finally Method

Method `finally()` akan selalu di jalankan meskipun `Promise` sukses maupun terjadi error, berikut contohnya:

```js
getProduct()
   .then(function(json) { ... })
   .catch((error) => console.log(error))
   .finally(() => console.log('Proses Selesai.')) // [!code ++]
```

Atau lakukan sesuatu hal lain pada method finally seperti event trigger, atau aksi yang berjalan setelah promise selesai dijalankan.