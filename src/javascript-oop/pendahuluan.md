---
title: JavaScript OOP
---

# Pengenalan Object Oriented Programming

Object Oriented Programming adalah sudut pandang bahasa pemrograman yang berkonsep pada `"Objek"`. Ada banyak sudut pandang bahasa pemrograman, seperti contohnya _procedural programming_, dan _functional programming_, namun OOP merupakan sudut pandang yang sangat populer saat ini. 

Tidak hanya pada JavaScript, OOP juga di adopsi oleh beberapa bahasa pemrograman yang lain, seperti contohnya Java, C++, Phyton, PHP, dll. 

Dalam OOP terdapat beberapa istilah yang perlu dimengerti, yaitu `Object` dan `Class`.

## Apa itu Object?

Object adalah data yang berisi `field`/`properties`/`attributes` dan `method`/`function`/`behavior`.

## Apa itu Class?

Class adalah blueprint, prototype yang digunakan untuk membuat Object. Dalam OOP sebelum membuat Object wajib membuat Classnya terlebih dahulu. Class berisikan deklarasi semua properties dan method yang dimiliki suatu Object yang dimana setiap Object akan selalu dibuat dari Class, serta sebuah Class bisa membuat Object tanpa batas.

## Class dan Object

Contoh terdapat sebuah Class dengan nama `Person`, yang terdiri dari dua property `firstName` dan `lastName`, serta dua method contohnya `sayHello(name)` dan `sayGoodBye(name)`. Class tersebut baru bisa digunakan ketika sudah membuat Objectnya.

Object dibuat berdasarkan Class blueprint-nya, contohnya Class `Person` akan dibuatkan object dengan nama `john`, lalu set property `firtName='John'` dan `lastName='Doe'`. Tentunya Object dari class `Person` bisa dibuat banyak sekali object person lainnya. Berikut contoh diagramnya:

![OOP Diagram](/images/oop-diagram.png)