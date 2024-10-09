---
title: Class Super Constructor
---

# Class: Super Constructor

Class inheritance sifatnya seperti Prototype Inheritance. 

Lalu bagaimana dengan Constructor Inheritance? Sebenarnya pada Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini.

Dalam kasus ini, untuk mencapai tujuan yang sama, bisa dengan menggunakan kata kunci `super` didalam constructor.
Kata kunci `super` digunakan untuk memanggil constructor super class.

Jika child class membuat constructor, maka wajib memanggil parent constructor, walaupun pada parent tidak ada constructor.

## Kode: Super Constructor (1)

```js
class Employee {
   constructor(name) {
      this.name = name
   }

   sayHello(name) {
      console.info(`Hi ${name}, my name is employee ${this.name}`)
   }
}

class Manager extends Employee {
   sayHello(name) {
      console.info(`Hi ${name}, my name is manager ${this.name}`)
   }
}
```

Ketika menambahkan constructor pada parent classnya, maka kode pada child, menyesuaikan dengan constructor parent-nya. Jika constructor pada parent class memiliki parameter, maka instance child object yang memiliki pewarisan dari class parent, wajib mengisi parameternya juga. Singkatnya, apa yang di miliki Emplyee, maka akan dimiliki oleh class turunannya. Berikut contohnya:

```js
const sayaka = new Employee('Sayaka') // [!code ++]
sayaka.name = 'Sayaka' // [!code --]
sayaka.sayHello('John')

const john = new Manager('John') // [!code ++]
john.name = 'John' // [!code --]
john.sayHello('Sayaka')
```

## Kode: Super Constructor (2)

Lalu bagaimana jika pada child class memiliki constructor juga? 
Jika child memiliki constructor, maka *wajib* memanggil constructor dari parent class-nya. Jika tidak memanggil constructor parent, maka akan terjadi error. Untuk memanggil constructor parent, bisa dengan menggunakan kata kunci `super()`. Kata kunci `super()` hanya boleh dipanggil didalam constructor, tidak bisa pada method. Berikut contohnya:

```js

```