---
title: Class Method
---

# Class Method

Membuat method didalam class, bisa dilakukan dengan cara seperti menambahkan method di [constructor function](./constructor-function). 
Namun, hal tersebut sebenarnya menambahkan method kedalam instance object. 

::: tip :bulb: PERLU DIKETAHUI
Khusus untuk method, sebaiknya menambahkannya ke prototype, bukan pada instance object-nya.
:::

Untungnya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype.

## Kode: Class Method

::: code-group
```js [JavaScript]
class Person {
   constructor(name) {
      this.name = name
   }

   sayHello(name) { // [!code ++]
      console.log(`Hi ${name}, my name is ${this.name}`) // [!code ++]
   } // [!code ++]
}

const john = new Person('John Doe')
john.sayHello('Sayaka') // [!code ++]
```

```Console
Hi Sayaka, my name is John Doe
```
:::

Pada contoh kode diatas, method di tulis tanpa kata kunci `function`, atau langsung ditulis nama methodnya. Dan secara ototmatis method `sayHello(name)` sudah tambahkan ke `Person.prototype`.