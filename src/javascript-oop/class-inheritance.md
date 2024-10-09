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

::: code-group
```js [Code]
const sayaka = new Employee()
sayaka.name = 'Sayaka'
sayaka.sayHello('John')

const john = new Manager()
john.name = 'John'
john.sayHello('Sayaka')
```

``` [Console]
Hi John, my name is employee Sayaka

Hi Sayaka, my name is manager John
```
:::

## Cek Inheritance

Untuk melihat inheritance pada instance objectnya bisa menggunakan `console.log()`. Berikut contohnya:

::: code-group
```js [Code]
console.log(sayaka)
console.log(john)
```

``` [Console]
> Employee
   name: 'Sayaka'
   > __proto__:
      > constructor: class Employee
      > sayHello: f sayHello(name)
      > __proto__: Object

> Manager
   name: 'John'
   > __proto__: Employee
      > constructor: class Manager
      > sayHello: f sayHello(name)
      > __proto__: 
         > constructor: class Employee
         > sayHello: f sayHello(name)
         > __proto__: Object
```
:::

Pada output di atas terdapat perbedaan, terutama pada object instance `Manager`, yang dimana terdapat `__proto__` yang didalamnya ada constrcutor yang merujuk pada class `Employee`.