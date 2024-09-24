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
