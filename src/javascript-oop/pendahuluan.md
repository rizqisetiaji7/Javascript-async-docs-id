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

Pada contoh gambar diatas hanya terdapat satu class yaitu `Person` sebagai blueprint. Class tidak bisa langsung digunakan, untuk menggunakannya harus membuat object terlebih dahulu. Seperti contoh diatas terdapat tiga object yaitu, `john`, `anwar`, dan `cena`. Masing-masing dari object tersebut bisa set property yang sudah didefinisikan pada blueprint class `Person` seperti `firstName` dan `lastName`, serta bisa juga menggunakan methodnya.

Setiap object yang telah dibuat tidak ada hubungannya satu sama lain atau berdiri sendiri. Seperti contoh diatas terdapat tiga object yaitu, `john`, `anwar`, dan `cena`. Dari ketiga object tersebut memiliki perannya masing-masing.

## OOP di JavaScript

JavaScript sebenarnya didesain sebagai bahasa pemrograman yang prosedural, bukan bahasa pemrograman berorientasi objek. Oleh karena itu, implementasi OOP di JavaScript tidak sedetail bahasa pemrograman lain yang sudah murni sejak awal menggunakan konsep OOP seperti Java, C++, dll. Jadi konsep OOP di JavaScript baru di implemetasikan di javascript versi yang terbaru.

Kenapa JavaScript tidak menguubah saja menjadi bahasa pemrograman yang OOP? hal ini karena terkait _Backward compatibility_ sehingga tidak memungkinkan untuk merubah semuah konsep pemrograman di JavaScript menjadi OOP karena kompatibilitas dengan program yang versi terdahulunya.