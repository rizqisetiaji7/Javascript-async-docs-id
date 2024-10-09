---
title: Class Inheritance
---

# Class Inheritance

Prototype mendukung pewarisan, meski pada materi sebelumnya cukup rumit untuk menerapkannya.
Namun hal tersebut telah di perbaiki di ES6 dengan menggunakan fitur class-nya.
Sebuah class bisa melakukan pewarisan dari class lainnya menggunakan kata kunci `extends`.
Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class.

## Kode: Class Inheritance

Berikut contoh inheritance pada class di JavaScript:

**Contoh 1: Membuat class Inheritance**

```js
class Employee {
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

**Contoh 2: Membuat Object Instance**

```js
const sayaka = new Employee()
sayaka.name = 'Sayaka'
sayaka.sayHello('John')

const john = new Manager()
john.name = 'John'
john.sayHello('Sayaka')
```