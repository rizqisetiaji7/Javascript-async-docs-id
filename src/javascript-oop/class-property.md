---
title: Class Property
---

# Class Property

Sama seperti pada [constructor function](./constructor-function), didalam class pun bisa menambahkan property.
Karena hasil akhirnya adalah sebuah object, jadi menambahkan property di class juga bisa dilakukan pada instance object-nya.

## Kode: Class Property

::: code-group
```js [JavaScript]
class Person {
   constructor(name) {
      this.name = name // [!code ++]
   }
}

const john = new Person('John Doe')
console.log(john.name) // [!code ++]
```

``` [Console]
John Doe
```
:::