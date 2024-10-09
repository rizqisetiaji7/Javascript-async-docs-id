---
title: Class Super Constructor
---

# Class: Super Constructor

Class inheritance sifatnya seperti Prototype Inheritance. 

Lalu bagaimana dengan Constructor Inheritance? Sebenarnya pada Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini.

Dalam kasus ini, untuk mencapai tujuan yang sama, bisa dengan menggunakan kata kunci `super` didalam constructor.
Kata kunci `super` digunakan untuk memanggil constructor super class.

Jika child class membuat constructor, maka wajib memanggil parent constructor, walaupun pada parent tidak ada constructor.