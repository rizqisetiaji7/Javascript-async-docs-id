---
title: Class Constructor
---

# Class Constructor

Karena bentuk Conctructor function mirip dengan function, jadi bisa menambah parameter pada constructor function, lalu bagaimana dengan menggunakan class?

Pada class juga bisa menambahkan constructor, yang dimana dengan menggunakan constructor, bisa menambahkan parameter saat pertama kali object dibuat.

Untuk membuat constructor pada class, bisa dengan menggunakan kata kunci `constructor`.

## Kode: Class Constructor

::: code-group
```js [Class]
class Person {

   constructor(name) { // [!code ++]
      // do something... // [!code ++]
      console.log(`Membuat Person ${name}`)
   } // [!code ++]

}

const john = new Person('John Doe')
console.log(john)
```

``` [Console]
Membuat Person John Doe

Person 
   > __proto__: Object
```
:::