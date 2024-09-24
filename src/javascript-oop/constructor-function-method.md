---
title: Method Constructor Function
---

# Method Constructor Function

Sama seperti pada tipe data object biasanya, method bisa ditambahkan dalam constructor function. Jika menambahkan method pada constructor function, secara otomatis object yang dibuat akan memiliki method tersebut.

## Kode: Method Constructor Function

Berikut contoh method didalam constructor function:

```js
function Person() {
   this.firstName = ''
   this.lastName = ''

   this.sayHello = function(name) { // [!code ++]
      console.log(`Hello ${name}, my name is ${this.firstName}`) // [!code ++]
   } // [!code ++]
}
```

Seperti contoh diatas, pembuatan method pada constructor function sama seperti membuat property, namun diisi oleh anonymous function. Secara otomatis object yang dibuat dari `Person` tersebut memiliki method `sayHello()`.

::: code-group
```js [JavaScript]
const john = new Person()
john.firstName = 'John'
john.lastName = 'Doe'

john.sayHello('Harry') // [!code ++]
```

``` [Console]
Hello Harry, my name is John
```
:::