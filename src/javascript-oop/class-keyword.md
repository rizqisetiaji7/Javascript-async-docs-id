---
title: Kata Kunci Class
---

# Kata Kunci Class

Sejak EcmaScript versi 6, diperkenalkan kata kunci baru, yaitu `class`. Ini merupakan kata kunci yang digunakan untuk membuat class di JavaScript. Dengan kata kunci `class`, sekarang tidak perlu lagi menggunakan [constructor function](./constructor-function) untuk membuat class.

## Kode: Membuat Class

::: code-group
```js [Class]
class Person {

}

const john = new Person()
console.log(john)
```

``` [Console]
Person 
   > __proto__: 
      > constructor: class Person
      > __proto__: Object
```
:::