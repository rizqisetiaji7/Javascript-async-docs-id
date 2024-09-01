---
title: Promise Static Method
---

# Promise Static Method

Promise juga memiliki beberapa static method, diantaranya:

- `Promise.all()` : Digunakan untuk mengeksekusi beberapa promise sekaligus dan menunggu semua hasil promisenya.
- `Promise.any()` : Digunakan untuk mengeksekusi beberapa promise sekaligus dan mengambil hasil promise yang paling cepat.
- `Promise.race()` : Digunakan untuk mengeksekusi beberapa promise sekaligus dan mengambil hasil promise yang paling cepat tidak peduli baik `fulfilled` atau `rejected`.

> :memo: **Baca selengkapnya:** [Promise Static Method](https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Promise#static_methods)

Untuk penggunaanya tidak menggunakan object promisenya, melainkan langsung melalui classnya:

```js
// Mengambil seluruh promise `fulfilled`
Promise.all()

// Mengambil salah satu promise `fulfilled` yang paling cepat
Promise.any()

// Mengambil salah satu promise `fulfilled` atau `rejected` yang paling cepat
Promise.race()
```

## `Promise.all()`

Disini kita akan menggunakan contoh dari kode sebelumnya, hanya saja disini sedit mengubah link json menjadi dynamic url, serta menambahkan parameter pada function `getProduct(product)` berikut codenya:

::: code-group
```js{1,4} [product.js]
function getProduct(product) {
   return new Promise(function(resolve, reject) {
      const ajax = new XMLHttpRequest()
      ajax.open('GET', 'api/product.json') // [!code --]
      ajax.open('GET', `api/${product}.json`) // [!code ++]
      ajax.onload = function() {
         if (ajax.status === 200) {
            resolve(JSON.parse(ajax.responseText))
         } else {
            reject(ajax.responseText)
         }
      }
   })
}
```
:::

Selanjutnya, buat file `product1.json`, `product2.json`, `product3.json` sebagai contoh percobaan, berikut masing-masing isinya:

::: code-group
```js [product1.json]
{
   "id": 1,
   "name": "Macbook Pro M1 2021",
   "price": 24999000
}
```

```js [product2.json]
{
   "id": 2,
   "name": "Macbook Pro M2 2023",
   "price": 32999000
}
```

```js [product3.json]
{
   "id": 3,
   "name": "iPhone 15 Pro Max 32/512",
   "price": 16799000
}
```
:::


### Menjalankan `Promise.all()`

::: code-group
```js [product.js]
const response = Promise.all([
   getProduct('product1'),
   getProduct('product2'),
   getProduct('product3')
])

response
   .then((products) => {
      console.log(products) // Berisi 3 data product sekaligus
   })
   .catch((error) => console.log(error))
```
:::

Pada contoh diatas, Promise memanggil data product sebanyak 3 kali bisa juga lebih. Pada `Promise.all()` semua promise dieksekusi secara bersamaan, dimana kita harus menunggu hingga semua promisenya sukses, baru bisa mengambil atau memanipulasi data response nya. 

Penggunaan static Method pada promise, sebagai contoh `Promise.all()`, sangat bermanfaat untuk menyederhanakan code dan juga meminimalisir jumlah request pada networknya. Contohnya kita tidak perlu lagi menggunakan kode seperti berikut: 

```js
getProduct('product1') // [!code --]
   .then((result) => /* Do something */) // [!code --]
   .catch((error) => /* Do something */) // [!code --]

getProduct('product2') // [!code --]
   .then((result) => /* Do something */) // [!code --]
   .catch((error) => /* Do something */) // [!code --]

getProduct('product3') // [!code --]
   .then((result) => /* Do something */) // [!code --]
   .catch((error) => /* Do something */) // [!code --]
```

::: tip :bulb: PENTING DIKETAHUI
Kode diatas tentunya sangat tidak efisien, karena bisa saja ada lebih banyak pemanggilan promise sekaligus, sehingga akan lebih mudah apabila digabung didalam `Promise.all()`.
:::

## `Promise.any()`

Mengambil data promise yang paling cepat. Berikut contonya:

```js 
const response = Promise.any([
   getProduct('product1'),
   getProduct('product2'),
   getProduct('product3')
])

response.then((products) => {
   console.log(products) // Data product hanya akan diambil satu yang tercepat
})
```

## Perbedaan Promise `all()`, `any()`, dan `race()`

- Pada static method `Promise.all()` akan mengambil seluruh data promise dan wajib `fulfilled` atau semua promisenya sukses.

- Pada static method `Promise.any()` akan mengambil Promise yang paling cepat, misalnya terdapat 5 Promise, Promise pertama paling cepat akan tetapi `rejected`, maka promise pertama tersebut akan di ignore, akan tetapi jika promise selain yang pertama tadi berstatus `fulfilled` atau sukses, maka promise tersebut akan di ambil yang `fulfilled` tercepat.

- Sedangkan `Promise.race()` akan menunggu apa terdapat promise yang `fulfilled` atau `rejected`, jika terdapat `rejected` maka akan mengambil yang paling pertama Promise `rejected` nya, jadi tidak peduli `rejected` atau `fulfilled` maka yang tercepat akan tetap diambil.

```js
Promise.any([ product1(), product2(), ...productN() ])

Promise.race([ product1(), product2(), ...productN() ])
```