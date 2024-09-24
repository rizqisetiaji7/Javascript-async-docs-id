---
title: Property Constructor Function
---

# Property Constructor Function

Sebenarnya setelah membuat object, bisa dengan mudah menambahkan property kedalam object tersebut hanya dengan menggunakan nama variabelnya diikuti tanda titik dan nama property-nya.

Namun jika seperti itu, constructor function yang sudah dibuat menjadi tidak terlalu berguna. Karena property-nya hanya ada di object yang ditambahkan property-nya.

Untuk menambahkan property didalam semua object yang dibuat dari constructor function, maka bisa dengan menggunakan kata kunci `this` yang diikuti nama property-nya.

## Kode: Property Constructor Function

Berikut contoh pembuatan property dalam constructor function serta penggunaan keyword `this`:

```js
function Person() {
   this.firstName = ''
   this.lastName = ''
}

const john = new Person()
const son = new Person()
```

Dengan menggunakan cara diatas, maka object yang dibuat dari class tersebut secara otomatis memiliki perilaku dan fungsi yang seragam, dalam hal ini class yang diberi property, atau method, maka objectnya pun memiliki property dan method yang sama pula.

Untuk mengubah value property-nya bisa mengubahnya di object yang telah dibuat, berikut contohnya:

```js
const john = new Person()
john.firstName = 'John'
john.lastName = 'Doe'

const son = new Person()
son.firstName = 'Heung Min'
son.lastName = 'Son'
```