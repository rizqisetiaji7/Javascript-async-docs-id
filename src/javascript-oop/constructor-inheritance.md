---
title: Constructor Inheritance
---

# Constructor Inheritance

Dalam constructor biasanya bisa membuat property baik itu berisi value maupun method. Di dalam constructor, bisa juga memanggil constructor lain. Dengan begitu, constructor bisa mewarisi semua property yang dibuat di constructor lain tersebut. 

## Memanggil Constructor Lain

Untuk memanggil constructor lain, bisa menggunakan kode seperti berikut:

```js
NamaConstructor.call(this, parameter)
```

Method `.call()` terdapat dua parameter, `this` merujuk pada object yang sedang digunakan, dan parameter dari constructor selanjutnya.

## Kode: Constructor Function

```js 
function Employee(firstName) {
   this.firstName = firstName
   this.sayHello = function(name) {
      console.log(`Hi ${name}, my name is ${this.firstName}`)
   }
}

function Manager(firstName, lastName) {
   Employee.call(this, firstName) // [!code ++]
   this.lastName = lastName
}
```

Sekilas mirip seperti inheritance, akan tetapi yang sebenarnya di lakukan kode diatas adalah seperti meng-copy property, method, atau perilaku dari constructor lain.

