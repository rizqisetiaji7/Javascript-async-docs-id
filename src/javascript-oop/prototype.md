---
title: Prototype
---

# Prototype

JavaScript sebelumnya dikenal dengan pemrograman berbasis Prototype. Konsep Prototype di JavaScript memang sedikit membingungkan tertutama ketika baru mempelajari tentang konsep tersebut. Akan tetapi pada meteri kali ini akan dibahas seputar detail konsep Prototype.

## Prototype Inheritance

Saat membuat object dari Constructor function, object tersebut disebut instance, semua property (baik itu value, atau method) akan berada di dalam instance objectnya.

Setiap membuat constructor function, secara otomatis akan dibuatkan prototype-nya, misalnya ketika membuat constructor function `Person`, makan terdapat `Person.prototype`.

Saat membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari `Constructor.prototype` nya. Untuk mengakses prototype milik sebuah instance, bisa dengan menggunakan `__proto__`.

## Kode: Object Instance

Berikut contoh kode dari materi sebelumnya, yaitu menggunakan Class `Person` dengan parameter:

```js
function Person(firstName, lastName) {
   this.firstName = firstName
   this.lastName = lastName
   this.sayHello = function(name) {
      console.log(`Hello ${name}, my name is ${this.firstName}`)
   }
}
```

Membuat Object dari construcor function:

::: code-group
```js [Instance]
const budi = new Person('Budi', 'Sudarsono')
console.log(budi)

const john = new Person('John', 'Doe')
console.log(john)
```

``` [Console]
Person
   firstName: "Budi"
   lastName: "Sudarsono",
   > sayHello: f (name)
   > __proto__: Object

Person
   firstName: "John"
   lastName: "Doe",
   > sayHello: f (name)
   > __proto__: Object
```
:::

## Prototype Diagram

![Prototype](/images/prototype-diagram.png)

Pada kode object instance `budi` dan `john` dari sebuah construcor function, maka secara otomatis akan menjadi turunan dari prototype constructor function-nya. Atau secara otomatis akan membuat `Person.prototype`.

Jika diperhatikan terdapat `__proto__`, yang sebenarnya mengacu pada `Person.prototype`, mirip seperti pewarisan, jadi apa yang dimiliki oleh prototypenya juga dimiliki oleh object instancenya. 

Pada contoh kode object instance `budi` dan `john` secara otomatis memiliki `__proto__` yang mengacu pada `Person.prototype` yang sama.

Begitu juga dengan constructor function `Person.prototype` yang juga memiliki `__proto__` mengacu ke prototype yang lainnya terus hingga yang paling terakhir yaitu `Object.prototype`.

## Menambah Property ke Prototype

Property mirip seperti Object, yang dimana bisa menambah property baik itu value maupun method.
Saat menambahkan property ke Prototype, secara otomatis semua object instance yang merupakan turunan dari prototype tersebut, akan memiliki property tersebut.