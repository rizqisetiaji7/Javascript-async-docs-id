---
title: Prototype
---

# Prototype

JavaScript sebelumnya dikenal dengan pemrograman berbasis Prototype. Konsep Prototype di JavaScript memang sedikit membingungkan tertutama ketika baru mempelajari tentang konsep tersebut. Akan tetapi pada meteri kali ini akan dibahas seputar detail konsep Prototype.

## Prototype Inheritance

Saat membuat object dari Constructor function, object tersebut disebut instance, semua property (baik itu value, atau method) akan berada di dalam instance objectnya.

Setiap membuat constructor function, secara otomatis akan dibuatkan prototype-nya, misalnya ketika membuat constructor function `Person`, makan terdapat `Person.prototype`.

Saat membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari `Constructor.prototype` nya. Untuk mengakses prototype milik sebuah instance, bisa dengan menggunakan `__proto__`.

### Kode: Object Instance

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
   lastName: "Sudarsono"
   > sayHello: f (name)
   > __proto__: Object

Person
   firstName: "John"
   lastName: "Doe"
   > sayHello: f (name)
   > __proto__: Object
```
:::

### Prototype Diagram

![Prototype](/images/prototype-diagram.png)

Pada kode object instance `budi` dan `john` dari sebuah construcor function, maka secara otomatis akan menjadi turunan dari prototype constructor function-nya. Atau secara otomatis akan membuat `Person.prototype`.

Jika diperhatikan terdapat `__proto__`, yang sebenarnya mengacu pada `Person.prototype`, mirip seperti pewarisan, jadi apa yang dimiliki oleh prototypenya juga dimiliki oleh object instancenya. 

Pada contoh kode object instance `budi` dan `john` secara otomatis memiliki `__proto__` yang mengacu pada `Person.prototype` yang sama.

Begitu juga dengan constructor function `Person.prototype` yang juga memiliki `__proto__` mengacu ke prototype yang lainnya terus hingga yang paling terakhir yaitu `Object.prototype`.

## Menambah Property ke Prototype

Property mirip seperti Object, yang dimana bisa menambah property baik itu value maupun method.
Saat menambahkan property ke Prototype, secara otomatis semua object instance yang merupakan turunan dari prototype tersebut, akan memiliki property tersebut.

### Kode: Menambah Property ke Instance Object

::: code-group
```js [Object Instance]
const budi = new Person('Budi', 'Sudarsono')

// Hanya untuk instance object budi
budi.sayBye = function() {
   console.log('Good Bye')
}

const john = new Person('John', 'Doe')

console.log(budi)
console.log(john)
```

``` [Console]
Person
   firstName: "Budi"
   lastName: "Sudarsono"
   > sayBye: f () // [!code ++]
   > sayHello: f (name)
   > __proto__: Object

Person
   firstName: "John"
   lastName: "Doe"
   - // [!code --]
   > sayHello: f (name)
   > __proto__: Object
```
:::

Pada kode diatas jika dilihat pada console, maka property `sayBye` yang berisi method, hanya ada pada instance object `budi`, sedangkan pada instance object `john` tidak ada.

### Kode: Menambah Property ke Prototype

Untuk menambahkan property sebelumnya bisa dilakukan didalam classnya, akan tetapi ada cara lain yaitu menggunakan prototype melalui property `prototype`, berikut contoh kodenya:

```js
Person.prototype.sayBye = function() {
   console.log(`Good Bye`)
}

// Bisa menambahkan banyak property lebih dari satu
Person.prototype.run = function() {
   console.log(`${this.firstName} is running`)
}

const budi = new Person('Budi', 'Sudarsono')
const john = new Person('John', 'Doe')

console.log(budi)
console.log(john)
```

Dengan menggunakan cara seperti contoh kode diatas, property tersebut tidak ditambahkan kedalam objectnya, akan tetapi didalam prototype-nya pada property `__proto__`, berikut output melalui console:

```
Person
   firstName: "Budi"
   lastName: "Sudarsono"
   > sayHello: f (name)
   > __proto__: 
      > run: f () // [!code ++]
      > sayBye: f () // [!code ++]

Person
   firstName: "John"
   lastName: "Doe"
   > sayHello: f (name)
   > __proto__: 
      > run: f () // [!code ++]
      > sayBye: f () // [!code ++]
```

## Cara Kerja Prototype Inheritance

Bagaimana bisa property pada prototype diakses dari object instance?

- Ketika mengakses property di object instance, pertama akan di cek apakah pada object tersebut terdapat property yang dimaksud atau tidak. 

- Jika tidak, maka akan di cek pada `__proto__` (prototype)-nya. 

- Jika masih tidak ada, akan di cek lagi di `__proto__` (prototype) yang lebih tinggi, dan seterusnya, sampai berakhir di Object Prototype.

Jadi ketika di akses pertama pada object instance terlebih dahulu, jika ada maka yang digunakan adalah property yang ada pada object instance-nya, barulah jika tidak ada pada object instance-nya, maka akan di cek pada `__proto__`.

Jadi untuk mengakase property pada prototype, sama seperti mengakses property seperti biasanya, berikut contohnya:

```js
const budi = new Person('Budi', 'Sudarsono')

budi.sayBye() // [!code ++]
budi.run() // [!code ++]
```