---
title: Prototype Inheritance
---

# Prototype Inheritance

[Prototype](./prototype) selalu memiliki parent, yang berarti prototype merupakan turunan, dan parent tertingginya adalah Object Prototype.

Lalu bagaimana jika ingin melakukan inheritance ke Prototype lain?

Hal ini juga bisa dilakukan, akan tetapi sedikit lebih rumit. Hal ini dikarenakan, untuk JavaScript modern tidak direkomendasikan lagi praktik OOP menggunakan Prototype, karena pada ES6 sudah dikenalkan kata kunci `class`.

Meski begitu, pembahasan mengenai prototype tetap harus di ketahui, terutama mengenai implementasi class di JavaScript yang sebenarnya berupa prototype.

## Kode: Prototype Inheritance

Untuk melakukan pewarisan di prototype bisa dengan menggunakan `Object.create(Constructor.prototype)`. Berikut contohnya:

```js
function Employee(name) {
   this.name = name
}

function Manager(name) {
   this.name = name
}

Manager.prototype = Object.create(Employee.prototype) // [!code ++]

Manager.prototype.sayHello = function(name) {
   console.log(`Hello ${name}, my name is Manager ${this.name}`)
}

Employee.prototype.sayHello = function(name) {
   console.log(`Hello ${name}, my name is Employee ${this.name}`)
}
```

Berikut cara menggunakan dan hasil output dari kode diatas:

::: code-group
```js [Prototype]
const employee = new Employee('Budi')
employee.sayHello('John')

const manager = new Manager('Mulyono')
manager.sayHello('John')
```

``` [Console]
Hello John, my name is Employee Budi
Hello John, my name is Manager Mulyono
```
:::