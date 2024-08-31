---
title: Await
---

# Await

Await digunakan untuk mendapatkan value hasil dari Promise. Sebelumnya untuk mendapatkan response data, kita menggunakan method `then()` yang bersisi `callback` datanya. Dengan menggunakan Await, kita bisa menunggu hingga datanya ada dan memprosesnya dengan mudah sesuai kebutuhan.

> [!IMPORTANT] PENTING
> Await hanya bisa digunakan dalam Async Function. Jadi, jika mengambil data dari Promise menggunakan Await, hanya boleh dilakukan ketika function tersebut didefinisikan sebagai Async Function.

## Menggunakan Await

Berikut contoh sederhana penggunaan Await:

```js
// Promise<JSON Product>
function getProduct() {
   const request = new Request('api/product.json', {
      method: 'GET'
   })

   const response = fetch(request)

   return response.then((response) => response.json())
}
```

### Sebelum Menggunakan Await

Biasanya ketika akan mengambil response datanya, dikarenakan menggunakan Promise, maka mau tidak mau harus menggunakan Promise lagi untuk mendapatkan datanya, seperti pada materi sebelumnya. Berikut contohnya:

```js
// Promise<String ProductName>
function getProductName() {
   return new Promise(function(resolve, reject) {
      getProduct()
         .then(product => resolve(product.name))
         .catch(error => reject(error))
   })
}

getProductName()
   .then(productName => console.log(productName))
```

Pada contoh diatas untuk mengambil data menggunakan Promise secara berulang akan terdapat banyak kode yang perlu ditulis. Solusinya dengan menggunakan kata kunci `await`, kita bisa mengambil data promise tersebut tanpa perlu menggunakan chaining method (`then()`, `catch()`) berulang.

### Sesudah Menggunakan Await

```js
// Promise <String>
async function getProductName() {
   const product = await getProduct()
   return product.name
}

getProductName()
   .then((productName) => console.log(productName))
```