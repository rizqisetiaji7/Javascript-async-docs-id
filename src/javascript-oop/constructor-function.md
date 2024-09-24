---
title: Constructor Function
---

# Constructor Function

Sebelum EcmaScript versi 6, pembuatan class biasanya menggunakan function. Hal ini dikarenakan JavaScript bukanlah bahasa pemrograman yang berorientasi Object. Jadi untuk membuat class di JavaScript versi lama, perlu menggunakan function. Function yang dibuat untuk membuat Object disebut **_Constructor Function_**.

## Kode: Constructor Function

Untuk membuat Constructor Function seperti halnya membuat function biasa. Akan tetapi khusus untuk Constructor Function penamaannya diawali dengan huruf kapital (uppercase). Berikut contohnya:

```js
function Person() {
   // do something...
}
```

## Object Constructor Function

Membuat object dari Constructor Function bisa dengan menggunakan kata kunci `new`, lalu diikuti nama Construcor Function-nya.

## Kode: Object Constructor Function

```js
function Person() {
   // do something...
}

const john = new Person() // [!code ++]
const son = new Person() // [!code ++]
```

Setiap object disimpan didalam variable. Variable tersebut kemudian diisi kata kunci `new` dan Constructor Function-nya, seperti contoh kode diatas.

## Property Constructor Function

Sebenarnya setelah membuat object, bisa dengan mudah menambahkan property kedalam object tersebut hanya dengan menggunakan nama variabelnya diikuti tanda titik dan nama property-nya.

Namun jika seperti itu, constructor function yang sudah dibuat menjadi tidak terlalu berguna. Karena property-nya hanya ada di object yang ditambahkan property-nya.

Untuk menambahkan property didalam semua object yang dibuat dari constructor function, maka bisa dengan menggunakan kata kunci `this` yang diikuti nama property-nya.