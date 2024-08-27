---
title: Error Handling di Async Await
---

# Error Handling di Async Await

Pada saat menggunakan Promise, kita bisa menggunakan method `catch()` untuk menangani ketika terjadi error.
Pada Async Await, kita bisa memanfaatkan block `try catch` untuk melakukan penanganan error seperti layaknya menangani error pada code yang bukan Asynchronous. 

Ketika akan mengambil response menggunakan Await, namun terjadi error, secara otomatis akan terjadi `Exception`.

## Try Catch

```js
async function getProductName() {
   try {
      const product = await getProduct()
      return product.name
   } catch (e) {
      return 'Product Not Found'
   }
}
```

Contoh diatas ketika akan menangani error pada kode Async Await maka gunakan `Try Catch`, termasuk ketika akan menjalankan `finally`, berikut contohnya:

```js
async function getProductName() {
   try {
      const product = await getProduct()
      return product.name
   } catch (e) {
      return 'Product Not Found'
   } finally { // [!code ++]
      console.log('Process Done!') // [!code ++]
   } // [!code ++]
}
```
