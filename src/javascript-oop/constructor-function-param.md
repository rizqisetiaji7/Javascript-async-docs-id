---
title: Constructor Function Parameter
---

# Parameter di Constructor Function

Class yang berbentuk function di JavaScript, secara default bisa memiliki parameter. [Constructor function](./constructor-function) sama seperti function biasanya, yaitu bisa memiliki parameter. Hal ini dalam membuat object dalam constructor function bisa mengirim langsung data melalui parameter pada constructor function tersebut.

## Kode: Parameter Constructor Function

Berikut contoh kode parameter di constructor function:

```js
function Person(firstName, lastName) { // [!code ++]
   this.firstName = '' // [!code --]
   this.lastName = '' // [!code --]

   this.firstName = firstName // [!code ++]
   this.lastName = lastName // [!code ++]

   this.sayHello = function(name) { 
      console.log(`Hello ${name}, my name is ${this.firstName}`) 
   } 
}
```

Pada kode diatas, terdapat parameter `firstName` dan `lastName`, yang berarti secara default constructor function bisa mengirimkan data melalui parameternya, dan bisa secara langsung menggunakan parameter tersebut ke property atau method didalam constructor function.

## Parameter Object

Ketika constructor function terdapat parameter yang perlu diisi, maka ketika membuat suatu object bisa menambahkannya ketika inisialisasi objeknya. Sehingga tidak perlu menambahkan value secara manual ke property seperti pada materi sebelumnya. Berikut perbandingan kode sebelum dan sesudah menggunakan parameter di contructor function.

**Tanpa Parameter**

```js
const john = new Person()
john.firstName = 'John'
john.lastName = 'Doe'
john.sayHello('Hanekawa')
```

**Menggunakan Parameter**

```js
const john = new Person('John', 'Doe')
john.sayHello('Hanekawa')
```

Dengan menggunakan parameter function, property tidak perlu di isi secara manual sesudah object dibuat, sehingga kode menjadi lebih rapi.